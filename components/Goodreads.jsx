import { useEffect, useState } from "react";
import Image from "next/image";

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

const getBookLink = content => {
  const splitContent = content.split('<');
  const splitAgain = splitContent[1].split('"');
  const linkText = splitAgain[1];
  const link = `https://www.goodreads.com${linkText}`;

  return link;
}

const Goodreads = ({ initialData }) => {
    const [goodReadsFeed, setGoodReadsFeed] = useState(initialData);

    useEffect(() => {
      setGoodReadsFeed(initialData);
    }, [initialData]);

    return (
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-bold text-3xl my-10">Currently Reading</h2>
          <div className="flex flex-wrap justify-center items-center">
            {goodReadsFeed.items ? (
                goodReadsFeed.items.map((book, key) => {
                    const bookImg = getBookImg(book);
                    const bookTitle = getBookTitle(book.title);
                    const bookLink = getBookLink(book.content);
                    return (
                      <a href={bookLink} target="_blank">
                        <div key={key} className="p-10 flex flex-col items-center text-center font-semibold">
                            {/* <p className="bg-black text-teal-600 h-24 w-64 z-10 flex justify-center items-center text-md">      {bookTitle}
                            </p> */}
                            <div className="w-48 h-72 overflow-hidden flex justify-center items-center">
                              <Image src={bookImg} width={200} height={300} alt={bookTitle} className="object-cover"></Image>
                            </div>
                        </div>
                      </a>

                    );
                })
            ) : (
                <div>
                  It looks like something went wrong. You can see what I'm reading here: <a href="https://www.goodreads.com/user/show/104822881-spencer-attick">Goodreads Feed</a>.
                </div>
            )}
          </div> 
        </div>
    );
}

export default Goodreads;
