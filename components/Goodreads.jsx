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

const reformatTimestamp = timestamp => {
    const splitTimestamp = timestamp.split(' ');
    return `${splitTimestamp[2]} ${splitTimestamp[1]}, ${splitTimestamp[3]}`;

}

const Goodreads = ({ initialData }) => {
    const [goodReadsFeed, setGoodReadsFeed] = useState(initialData);

    useEffect(() => {
      setGoodReadsFeed(initialData);
    }, [initialData]);

    return (
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-bold text-3xl mt-24">Bookshelf</h2>
          <div className="flex flex-wrap justify-center items-center">
            {goodReadsFeed.items ? (
                goodReadsFeed.items.map((book, key) => {
                    const formattedTimestamp = reformatTimestamp(book.pubDate);
                    const bookImg = getBookImg(book);
                    const bookTitle = getBookTitle(book.title);
                    const bookLink = getBookLink(book.content);
                    return (
                        <a href={bookLink} target="_blank" key={key} className="p-10 flex flex-col items-center text-center font-semibold group">
                            <div className="w-48 h-72 overflow-hidden flex justify-center items-center">
                                <Image src={bookImg} width={200} height={300} alt={bookTitle} className="object-cover transform transition-transform group-hover:-translate-y-4"></Image>
                            </div>
                            <p className="mt-2 transition-opacity opacity-0 group-hover:opacity-100 border-b-red-500 border-r-red-500 border-t-transparent border-l-transparent border border-b-2 border-r-2 p-1 text-sm">{`Completed on ${formattedTimestamp}`}</p>
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
