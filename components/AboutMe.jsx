import Image from "next/image";
import aboutMe from "../public/aboutMe.png";

const AboutMe = () => {
    return (
        <div className="flex justify-center items-center h-full m-20">
          <div className="flex-col justify-center items-center h-full p-20">
            <h1 className="font-bold text-4xl">Hi, I'm Spencer! I'm a full stack software engineer obsessed with constantly learning new things.</h1>
            <p className="text-xl">
              After pivoting from education into tech, I've spent my career leaning into my curiousity by way of creative problem solving and continually seeking out new projects. I'm incredibly passionate about software as a tool for social good and am always on the lookout to tap into projects that can make a positive change. 
            </p>
          </div>
          <div>
            <Image src={aboutMe} width={800} height={800} alt="Spencer hiking in the mountains" className="rounded-3xl rotate-6" />
          </div>
        </div>
   
    )
}

export default AboutMe;
