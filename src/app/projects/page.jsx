// // pages/projects.js
// 'use client';

// import { useEffect, useState } from "react";
// import Parser from 'rss-parser';

// const parser = new Parser();

// export async function getServerSideProps() {
//     try {
//         const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@spencer.attick');
//         const data = await response.json();
//         console.log('DATA: ', data);
//         return { props: { initialData: data.items } };
//     } catch (error) {
//         console.log(error);
//         return { props: { initialData: [] } };
//     }
// }

// const ProjectsPage = ({ initialData }) => {
//     const [projects, setProjects] = useState(initialData);

//     useEffect(() => {
//         setProjects(initialData);
//     }, [initialData]);

//     return (
//         <div>
//             <h1>PROJECTS</h1>
//             <ul>
//                 {projects.map((project, index) => (
//                     <li key={index}>{project.title}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// export default ProjectsPage;

const Projects = () => {
    return (
        <h1>PROJECTS</h1>
    )
}

export default Projects;
