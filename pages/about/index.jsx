import Parser from 'rss-parser';
import RootLayout from "../../app/layout";
import Goodreads from '../../components/Goodreads';
import Strava from '../../components/Strava';

const parser = new Parser();

//STRAVA CODE
const isStravaTokenExpired = (currentExpirationTime) => {
  console.log('IS STRAVA TOKEN EXPIRED')
  const currentEpochTime = Date.now();
  if (currentExpirationTime === 'undefined') {
      return `There is an error with the currentEpirationTime, it's value is: ${currentExpirationTime}.`
  }
  return currentEpochTime > currentExpirationTime;
}

const generateNewToken = async () => {
  console.log('Generating new token...');
  const requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };
  const requestURL = `https://www.strava.com/oauth/token?client_id=${process.env.STRAVA_CLIENT_ID}&client_secret=${process.env.STRAVA_CLIENT_SECRET}&grant_type=refresh_token&refresh_token=ReplaceWithRefreshToken&refresh_token=${process.env.STRAVA_CACHED_REFRESH_TOKEN}`;

  try {
      let response = await fetch(requestURL, requestOptions);
      response = await response.json(); 
      if (response.message === 'Bad Request') {
        console.log(response);
          return;
      }
      console.log('NO PROBLEM GETTING NEW TOKEN')
      return {
          refreshToken: await response.refresh_token, 
          expirationTime: await response.expires_at,
          accessToken: await response.access_token
      }
  } catch (error) {
      console.log(error);
  }

}



const persistNewTokenData = async (newTokenData) => {
  console.log('PERSIST NEW TOKEN DATA')
  // Read the .env file
  const envBuffer = fs.readFileSync('.env');
  const envConfig = dotenv.parse(envBuffer);

  // // // Update the relevant key with the new value
  if (newTokenData.expirationTime) {
    envConfig['STRAVA_EXPIRATION_TIME'] = newTokenData.expirationTime;
  }
  if (newTokenData.refreshToken) {
    envConfig['STRAVA_CACHED_REFRESH_TOKEN'] = newTokenData.refreshToken;
  }
  if (newTokenData.accessToken) {
    envConfig['STRAVA_CACHED_TOKEN'] = newTokenData.accessToken;
  }

  // const envText = Object.keys(envConfig).map(key => `${key}=${envConfig[key]}`).join('\n');
  // try {
  //   await fs.promises.writeFile('.env', envText);
  //   console.log('File successfully written');
  // } catch (error) {
  //   console.error('Error writing file:', error);
  // }
  
};

const getStravaActivityData = async () => {
  console.log('GET STRAVA ACTIVITY DATA')
  console.log('Requesting activity data from Strava...');
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${process.env.STRAVA_CACHED_TOKEN}`);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  try {
      const response = await fetch("https://www.strava.com/api/v3/athlete/activities", requestOptions);
      return response.json();

  } catch (error) {
      console.log('error', error);
      return;
  }   
}

const executeStravaLogic = async () => {
  console.log('EXECUTE STRAVA LOGIC')
  const isTokenExpired = isStravaTokenExpired(process.env.STRAVA_EXPIRATION_TIME);
  console.log('TOKEN EXPIRED? ', isTokenExpired)

  if (typeof isTokenExpired === 'string') {
      console.log('Please resolve the error with the current expiration time stored in the .env file.');
      return;
  } else if (isTokenExpired) {
      console.log('The expiration time has passed. Generating a new token...');
      //if yes - generate a new token
      const newTokenData = await generateNewToken();
      if (!newTokenData.expirationTime) {
          console.log('There was an error getting refresh token data.')
          return;
      } 
     //save the new token info to .env
      persistNewTokenData(newTokenData);

  } 
  // //make request to Strava activities endpoint
  const stravaActivityData = await getStravaActivityData();
  console.log(stravaActivityData[0].name);
};

const getGoodreadsData = async () => {
  try {
    const response = await fetch('https://www.goodreads.com/user/updates_rss/104822881');
    const feedXML = await response.text();
    const feed = await parser.parseString(feedXML);
    return feed;
  } catch (error) {
      console.error(error);
      return {};
  }
}


export async function getServerSideProps() {
  const [goodReadsData, stravaData] = await Promise.all([
    getGoodreadsData(), 
    // executeStravaLogic()
  ]);
  return { props: { goodReadsData } };
}

// export async function getServerSideProps() {
//     try {
//         const response = await fetch('https://www.goodreads.com/user/updates_rss/104822881');
//         const feedXML = await response.text();
//         const feed = await parser.parseString(feedXML);
//         return { props: { goodreadsData: feed } };
//     } catch (error) {
//         console.error(error);
//         return { props: { goodreadsData: [] } };
//     }

// }

// export async function getServerSidePropsStrava() {
//     try {
//         const stravaData = await executeStravaLogic();
//         return { props: { stravaData: stravaData } }; // Replace {} with your actual Strava data
//     } catch (error) {
//         console.error(error);
//         return { props: { stravaData: {} } };
//     }
// }

const About = ({ goodReadsData, stravaData }) => {
    return (
      <RootLayout>
        <div className="flex">
          <Goodreads initialData={goodReadsData}/>
          <Strava initialData={stravaData}/>
        </div>
      </RootLayout>
    );
}

export default About;
