import { useState, useEffect } from 'react';
import RootLayout from "../../app/layout";
import techStack from "../../public/techStack.json";

export default function TechStack() {

  return (
    <RootLayout>
      <div className="flex flex-col items-start min-h-screen bg-black pb-20">
        <h1 className="text-teal-600 font-bold text-4xl my-10 mt-12 self-center">Tech Stack</h1>
        <div className="flex flex-col items-start justify-start ml-10 w-full">
          {techStack.map((tech, index) => (            
            <div key={index} className="p-4 flex items-center justify-center w-full">
              <div className="flex flex-col items-center justify-center text-center px-8 w-28">
                <div className="flex justify-center items-center w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#ef4444" className="h-9 w-9">
                    <path d={tech.icon}/>
                  </svg>
                </div>
                <span className="text-white">{tech.name}</span>
              </div>
              <div className="relative flex items-center w-full h-8">
                <div className="absolute bg-teal-600 left-0 h-full" style={{ width: `${tech.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RootLayout>
  );
}
