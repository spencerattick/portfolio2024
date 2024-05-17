// pages/projects.js
'use client';

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
        // console.log('DATA: ', feed)
        return { props: { initialData: feed } };
    } catch (error) {
        console.error(error);
        return { props: { initialData: [] } }; // Return empty data in case of error
    }
}

// const getDate = time => {
//   console.log('TIME: ', time)
//   // const parsedTimestamp = time.toString().slice(0, -3);
//   // const date = new Date(parsedTimestamp * 1000).toDateString();
//   // const splitDate = date.split(' ');
//   // return `${splitDate[1]} ${splitDate[2]} ${splitDate[3]}`;
// } 

// const textToDisplay = item => {
//   let text;
//   if (item.title.includes('wants to read')) {
//     text = `added to list ${getDate(item.created)}`
//   } else if (item.title.includes('finished reading') || item.title.includes('has read') || item.title.includes('Spencer added')) {
//     text = `finished on ${getDate(item.created)}`
//   } else if (item.title.includes('started reading') || item.title.includes('currently reading')) {
//     text = `started reading on ${getDate(item.created)}`
//   }
//   return text;
// }


const getBookImg = book => {
  const content = book.content;
  console.log('DESCRIPTION: ', content)
  const start = content.indexOf('src="');
  const end =  content.indexOf('.jpg');

  const parsedImg = content.substring(start + 5, end + 4);
  console.log('PARSED: ', parsedImg)

  // const firstId = parsedImg.split('/')[1];
  // const secondId = parsedImg.split('/')[2].split('.')[0];

  // const imgURL = `https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/${firstId}/${secondId}.jpg`;

  return parsedImg;
}

const getBookTitle = title => {
  title = title.substring(title.indexOf("'") + 1);
  title = title.slice(0, -1);
  return title;
}


const About = ({ initialData }) => {
    const [goodReadsFeed, setGoodReadsFeed] = useState(initialData);

    useEffect(() => {
      setGoodReadsFeed(initialData);
    }, [initialData]);

  
    return (
      <RootLayout>
          <h2>Currently Reading</h2>
          <div id="goodreads-container">
              {goodReadsFeed.items ? (
                  goodReadsFeed.items.map((book, key) => {
                    console.log('BOOOK: ', book)
                      const bookImg = getBookImg(book);
                      const bookTitle = getBookTitle(book.title);
                      console.log('IMAGE: ', bookImg)
                      // const text = textToDisplay(book);
                      return (
                        <div key={key} className="book-div">
                            {/* <a href={book.link} target="_blank">
                                <img src={bookImg} alt={bookTitle} />
                                <p>{text}</p>
                            </a> */}
                            <p>{bookTitle}</p>
                            <Image src={bookImg} width={100} height={100} alt={bookTitle}></Image>
                          
                        </div>
                      );
                  })
                  ) : (
                  <div>
                    It looks like something went wrong. You can see what I'm reading here: <a href="https://www.goodreads.com/user/show/104822881-spencer-attick">Goodreads Feed</a>.
                  </div>
              )}
          </div>
      </RootLayout>
  )
  
}

export default About;
