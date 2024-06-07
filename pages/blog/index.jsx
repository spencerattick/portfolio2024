// https://dribbble.com/tags/card-ui
'use client';

import { useEffect, useState } from "react";
import Parser from 'rss-parser';
import RootLayout from "../../app/layout";
import Image from "next/image";


const parser = new Parser();

export async function getServerSideProps() {
    try {
        const response = await fetch('https://medium.com/feed/@spencer.attick');
        const feedXML = await response.text();
        const feed = await parser.parseString(feedXML);
        const projectsFeed = feed.items.filter((post) => !post.title.includes('Project'));
        return { props: { initialData: projectsFeed } };
    } catch (error) {
        console.error(error);
        return { props: { initialData: [] } }; // Return empty data in case of error
    }
}

const removeProjectFromTitle = title => {
    const cleanedTitle = title.replace('Project: ', '');
    return cleanedTitle;
  }

  const getImgURL = content => { 
    let dataParsed = content.split('<');
    let lineWithImg;
    let imgURL;
     for (const line of dataParsed) {
       if (line.includes('cdn-images')) {
         lineWithImg = line;
         for (const item of lineWithImg.split('=')) {
           if (item.includes('cdn-images')) {
             imgURL = item.split(' ')[0];
             break;
           }
         }
         //format URL to remove extra quotes
         return imgURL.replace(/"/g, '');
       }
     }
  }

const Blog = ({ initialData }) => {
    const [projects, setProjects] = useState(initialData);

    useEffect(() => {
        setProjects(initialData);
    }, [initialData]);

    return (
        <RootLayout>
            <div className="flex flex-col justify-center items-center h-ful py-10">
                <h1 className="text-black font-bold text-4xl my-10 mt-12">BLOG POSTS</h1>
                <ul className="flex flex-wrap justify-around">
                    {projects.map((project, index) => {
                        const cleanTitle = removeProjectFromTitle(project.title);
                        const imgUrl = getImgURL(project['content:encoded']);
                        return (
                            <li key={index} className="text-black bg-white text-xl m-10 mx-12 rounded-lg shadow-lg shadow-gray-500 hover:text-white ease-in-out duration-200 h-70 w-60 md:h-80 md:w-80 border-0 hover:bg-black hover:w-96 ml-5 sm:ml-0">
                                <a href={project.guid} target="_blank" className="cursor-pointer">
                                    <div className="text-center flex flex-col justify-center items-center">
                                        <div className="relative w-full h-40">
                                            <div className="absolute inset-0">
                                                <Image src={imgUrl} layout="fill" objectFit="cover" alt={cleanTitle} className="rounded-t-lg" />
                                            </div>
                                        </div>
                                        <p className="my-4 text-sm sm:text-md md:text-lg lg:text-xl font-semibold">{cleanTitle}</p>
                                        <p className="text-xs sm:text-sm md:text-md text-black mb-4">{new Date(project.isoDate).toDateString().split(' ').slice(1).join(' ')}</p>
                                    </div>   
                                </a>
                                
                            </li>
                        )
                       
                    })}
                </ul>
            </div>
         
        </RootLayout>
    )
}

export default Blog;
