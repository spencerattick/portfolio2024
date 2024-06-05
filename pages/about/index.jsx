import RootLayout from "../../app/layout";
import Goodreads from '../../components/Goodreads';
import AboutMe from '../../components/AboutMe';
import Strava from '../../components/Strava';
import { getGoodreadsData } from "../../services/goodReadsRSS.js";
import { commitsThisYearPromise } from "../../services/githubAPI.js";

const getGithubCommitData = async () => {
  try {
    const commitsThisYear = await commitsThisYearPromise;
    return commitsThisYear;
  } catch (error) {
    console.error('Error:', error);
  }
}



export async function getServerSideProps() {
  const [goodReadsData, githubCommitData /*stravaData */] = await Promise.all([
    getGoodreadsData(), 
    getGithubCommitData()
    // executeStravaLogic()
  ]);
  return { props: { goodReadsData, githubCommitData } };
}


const About = ({ goodReadsData, stravaData, githubCommitData }) => {
    return (
      <RootLayout>
        <div>
          <AboutMe githubCommitData={githubCommitData}/>
          <div className="flex">
            <Goodreads className="mt-7" initialData={goodReadsData}/>
            {/* <Strava initialData={stravaData}/> */}
          </div>
        </div>

      </RootLayout>
    );
}

export default About;
