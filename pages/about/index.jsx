import { useEffect, useState } from "react";
import Parser from 'rss-parser';
import RootLayout from "../../app/layout";
import Image from "next/image";

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

const getBookImg = book => {
  const content = book.content;
  const start = content.indexOf('src="');
  const end =  content.indexOf('.jpg');

  const parsedImg = content.substring(start + 5, end + 4);
  const firstId = parsedImg.split('/')[7];
  const secondId = parsedImg.split('/')[8].split('.')[0];

  const imgURL = `https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/${firstId}/${secondId}.jpg`;

  return imgURL;
}

const getBookTitle = title => {
  const regex = /(?<=\').*?(?=\')/g;
  return title.match(regex)[0];
}

const About = ({ initialData }) => {
    const [goodReadsFeed, setGoodReadsFeed] = useState(initialData);

    useEffect(() => {
      setGoodReadsFeed(initialData);
    }, [initialData]);

    return (
      <RootLayout>
        <div className="flex flex-col justify-center items-center border border-red-400">
          <h2 className="text-teal-600 font-bold text-4xl my-10">Currently Reading</h2>
          <div className="flex flex-wrap justify-center items-center">
            {goodReadsFeed.items ? (
                goodReadsFeed.items.map((book, key) => {
                    const bookImg = getBookImg(book);
                    const bookTitle = getBookTitle(book.title);
                    console.log(bookImg)
                    return (
                      <div key={key} className="p-10 flex flex-col items-center text-center font-semibold">
                        <p className="border border-gree-400 h-14 w-64">{bookTitle}</p>
                        <div className="">
                          <Image src={bookImg} width={200} height={200} alt={bookTitle} className=""></Image>
                        </div>
                      </div>
                    );
                })
            ) : (
                <div>
                  It looks like something went wrong. You can see what I'm reading here: <a href="https://www.goodreads.com/user/show/104822881-spencer-attick">Goodreads Feed</a>.
                </div>
            )}
          </div>
        </div>
      </RootLayout>
    );
}

export default About;
