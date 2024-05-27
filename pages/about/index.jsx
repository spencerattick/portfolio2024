import Parser from 'rss-parser';
import RootLayout from "../../app/layout";
import Goodreads from '../../components/Goodreads';
import AboutMe from '../../components/AboutMe';
import Strava from '../../components/Strava';
// import fs from 'fs';

import { commitsThisYearPromise } from "../../services/githubAPI.js";

const getGithubCommitData = async () => {
  try {
    const commitsThisYear = await commitsThisYearPromise;
    return commitsThisYear;
  } catch (error) {
    console.error('Error:', error);
  }
}


//ADD GITHUB COMMIT GRAPH??
// https://medium.com/@yuichkun/how-to-retrieve-contribution-graph-data-from-the-github-api-dc3a151b4af



const parser = new Parser();


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
          {/* //ADD GITHUB DATA */}
          <div className="flex">
            <Goodreads initialData={goodReadsData}/>
            {/* <Strava initialData={stravaData}/> */}
          </div>
        </div>

      </RootLayout>
    );
}

export default About;
