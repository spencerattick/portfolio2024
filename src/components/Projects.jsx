// pages/projects.js
'use client';

import { useEffect, useState } from "react";
import Parser from 'rss-parser';

const parser = new Parser();

export async function getServerSideProps() {
    try {
        const response = await fetch('https://medium.com/feed/@spencer.attick');
        const feedXML = await response.text();
        const feed = await parser.parseString(feedXML);
        console.log('FEED ', feed)
        return { props: { initialData: feed.items } };
    } catch (error) {
        console.error(error);
        return { props: { initialData: [] } }; // Return empty data in case of error
    }
}

const Projects = ({ initialData }) => {
    const [projects, setProjects] = useState(initialData);

    useEffect(() => {
        setProjects(initialData);
    }, [initialData]);

    return (
        <div>
            <h1>PROJECTS</h1>
            <ul>
                {/* {projects.map((project, index) => (
                    <li key={index}>{project.title}</li>
                ))} */}
            </ul>
        </div>
    )
}

export default Projects;
