import RootLayout from "../../app/layout";
import contact from "../../public/contact.json";
import Image from "next/image";
import contactPhoto from "../../public/contact.png";

export default function Contact() {
  return (
    <RootLayout>
      <div className="flex flex-col text-center h-screen p-4 sm:p-20">
        <div className="mb-8 flex-col justify-center items-center">
          <h1 className="font-bold text-3xl sm:text-4xl mt-5 sm:mt-0">
            I'd love to hear from you!
          </h1>
          <p className="text-lg sm:text-xl">Feel free to click around and take a look at what I've been up to.</p>
        </div>

        <div className="flex flex-col-reverse sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-40 sm:mt-10">
          <Image src={contactPhoto} width={300} height={300} alt="Spencer hiking in Colorado" className="w-full sm:w-auto mt-5 sm:mt-0"/>
          <div className="flex flex-col p-4 items-center sm:items-start border-2 border-red-500 w-2/5 sm:w-auto">
            {contact.map((contactObj, index) => (
              <a
                href={contactObj.link}
                target="_blank"
                key={index}
                className="flex items-center mb-4 w-full max-w-xs group"
              >
                <div className="flex items-center w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-8 h-8 cursor-pointer text-black group-hover:text-red-500"
                    fill="currentColor"
                  >
                    <path d={contactObj.icon} />
                  </svg>
                  <div className="ml-4 text-left group-hover:text-red-500">
                    {contactObj.method}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
