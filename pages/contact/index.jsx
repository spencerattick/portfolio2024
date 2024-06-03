import RootLayout from "../../app/layout";
import contact from "../../public/contact.json";
import Image from "next/image";
import contactPhoto from "../../public/contact.png";

export default function Contact() {
  return (
    <RootLayout>
      <div className="flex flex-col text-center h-screen">
        <h1 className="text-black font-bold text-4xl my-10 mt-12">CONTACT ME</h1>
        <div className="flex justify-center space-x-32">
          <Image src={contactPhoto} width={300} height={300} alt="Spencer hiking in Colorado"></Image>
          <div className="flex flex-col p-4 items-center">
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
