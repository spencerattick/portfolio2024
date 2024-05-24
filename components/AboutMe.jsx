import Image from "next/image";
import aboutMe from "../public/aboutMe.png";

const AboutMe = () => {
    return (
        <div className="flex justify-center items-center border border-black h-full text-center mt-20">
          <div className="flex-col justify-center items-center border border-black h-full text-center">
            <h1 className="font-bold text-2xl">Hi, I'm Spencer! I'm a full stack software engineer who is constantly learning new things.</h1>
            <p>
              After pivoting from education into tech, I've spent my career leaning into my curiousity by way of creative problem solving and continually seeking out new projects. I'm incredibly passionate about software as a tool for social good. 
            </p>
          </div>
          <div>
            <Image src={aboutMe} width={200} height={200} alt="Spencer hiking in the mountains"/>
          </div>
        </div>
   
    )
}

export default AboutMe;
