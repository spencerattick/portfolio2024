import RootLayout from "../../app/layout";
import techStack from "../../public/techStack.json";

export default function TechStack() {
  return (
    <RootLayout>
      <div className="flex flex-col justify-center items-center h-screen bg-black">
            <h1 className="text-teal-600 font-bold text-4xl my-10 mt-12">Tech Stack</h1>
            <ul className="">
                {
                    techStack.map((tech, index) => {
                        console.log('TECH ', tech.name)
                        return (
                            <>
                                <li key={index} className="text-red-500">{tech.name}</li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white">
                                    <path d={tech.icon}/>
                                </svg>
                            </>
                          
                        )
                    })
                }
            </ul>
       
      </div>
    </RootLayout>
  );
}
