import RootLayout from "../../app/layout";
import contact from "../../public/contact.json";
import Image from "next/image";
import contactPhoto from "../../public/contact.png";

export default function Contact() {
  return (
    <RootLayout>
      <div className="flex flex-col text-center h-screen m-20">
        {/* <h1 className="text-black font-bold text-4xl my-12">CONTACT ME</h1> */}
        <div className="mb-8 flex-col justify-center items-center">
            <h1 className="font-bold text-4xl">
              I'd love to hear from you!
            </h1>
            <p className="text-xl">Feel free to click around and take a look at what I've been up to.</p>
        </div>

        <div className="flex justify-center items-center space-x-32">
          <Image src={contactPhoto} width={400} height={400} alt="Spencer hiking in Colorado" className=""/>
          <div className="flex flex-col p-4 items-start">
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
