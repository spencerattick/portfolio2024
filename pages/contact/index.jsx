import RootLayout from "../../app/layout";
import contact from "../../public/contact.json";

export default function Contact() {
  return (
    <RootLayout>
      <div className="flex-col text-center">
        <h1 className="text-black font-bold text-4xl my-10 mt-12">CONTACT ME</h1>
        <div className='flex-col justify-end p-4'>
            {contact.map((contactObj, index) => {
                return (
                    <a href={contactObj.link} target="_blank" key={index}>
                    <div className="relative group">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-8 h-8 cursor-pointer text-black hover:text-red-500 hover:h-10 hover:w-10 ease-in duration-200 border border-red-400'fill="currentColor" > 
                            <path d={contactObj.icon}/>
                        </svg>
                        <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
                            {contactObj.method}
                        </div>
                    </div>
                    </a>
                )
            
            })}
        </div>
      </div>
      
    </RootLayout>
  );
}
