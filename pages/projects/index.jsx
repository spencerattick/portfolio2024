// pages/projects.js
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
        const projectsFeed = feed.items.filter((post) => post.title.includes('Project'));
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

const Projects = ({ initialData }) => {
    const [projects, setProjects] = useState(initialData);

    useEffect(() => {
        setProjects(initialData);
    }, [initialData]);

    return (
        <RootLayout>
            <div className="flex flex-col justify-center items-center h-full">
                <h1 className="text-teal-600 font-bold text-4xl my-10">PROJECTS</h1>
                <ul className="flex flex-wrap justify-around">
                    {projects.map((project, index) => {
                        const cleanTitle = removeProjectFromTitle(project.title);
                        const imgUrl = getImgURL(project['content:encoded']);
                        return (
                            <li key={index} className="text-teal-600 text-xl m-10 mx-12 shadow-lg shadow-gray-500 hover:text-white ease-in-out duration-200 h-80 w-80 border-0 border-b-red-500 border-b-8 hover:bg-black hover:w-96 rounded-lg">
                                <a href={project.guid} target="_blank" className="cursor-pointer">
                                    <div className="text-center flex flex-col justify-center items-center">
                                        <p className="my-4 font-semibold">{cleanTitle}</p>
                                        <p className="text-sm text-black mb-4">{new Date(project.isoDate).toDateString().split(' ').slice(1).join(' ')}</p>
                                        <div className="relative w-full h-44">
                                            <div className="inset-1">
                                                <Image src={imgUrl} layout="fill" objectFit="cover" alt={cleanTitle} className="" />
                                            </div>
                                        </div>
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

export default Projects;
