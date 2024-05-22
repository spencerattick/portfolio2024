import Parser from 'rss-parser';
import RootLayout from "../../app/layout";
import Goodreads from '../../components/Goodreads';

const parser = new Parser();

export async function getServerSideProps() {
    try {
        const response = await fetch('https://www.goodreads.com/user/updates_rss/104822881');
        const feedXML = await response.text();
        const feed = await parser.parseString(feedXML);
        return { props: { initialData: feed } };
    } catch (error) {
        console.error(error);
        return { props: { initialData: [] } };
    }
}


const About = ({ initialData }) => {
    return (
      <RootLayout>
        <div className="flex">
          <Goodreads initialData={initialData}/>
        </div>
      </RootLayout>
    );
}

export default About;
