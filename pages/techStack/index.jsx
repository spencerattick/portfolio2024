import RootLayout from "../../app/layout";
import techStack from "../../public/techStack.json";

export default function TechStack() {
  return (
    <RootLayout>
      <div className="flex flex-col justify-center items-center min-h-screen bg-black">
        <h1 className="text-teal-600 font-bold text-4xl my-10 mt-12">Tech Stack</h1>
        <div className="flex flex-col items-start">
          {techStack.map((tech, index) => {
            return (
              <div key={index} className="p-4 flex items-center">
                <span className="mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white" className="h-9 w-9">
                    <path d={tech.icon}/>
                  </svg>
                </span>
                <span className="text-red-500">{tech.name}</span>
                <span className="bg-yellow-400 w-10 h-8 ml-5"></span>
              </div>
            );
          })}
        </div>
      </div>
    </RootLayout>
  );
}
