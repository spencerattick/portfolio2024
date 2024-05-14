import RootLayout from "../../app/layout";
import techStack from "../../public/techStack.json";

export default function TechStack() {
  return (
    <RootLayout>
      <div className="flex flex-col justify-center items-center min-h-screen bg-black">
        <h1 className="text-teal-600 font-bold text-4xl my-10 mt-12">Tech Stack</h1>
        <div className="flex flex-col items-center">
          {techStack.map((tech, index) => {
            return (
              <div key={index} className="p-4 flex flex-col items-center">
                <span className="mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white" className="h-10 w-10">
                    <path d={tech.icon}/>
                  </svg>
                </span>
                <span className="text-red-500">{tech.name}</span>
                <span className={`bg-yellow-400 w-${tech.level} h-6 ml-5`}></span>
              </div>
            );
          })}
        </div>
      </div>
    </RootLayout>
  );
}
