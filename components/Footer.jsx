import contact from "../public/contact.json";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-1/5 right-0 m-0 z-50 mb-5 mr-5 hover:w-2/5 ease-in duration-200">
        <div className="flex justify-around bg-black py-2 rounded-xl">
        {contact.map((contactObj, index) => (
            <a href={contactObj.link} target="_blank" rel="noopener noreferrer" key={index}>
            <div className="relative group">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-7 h-7 cursor-pointer text-white hover:text-red-500 hover:h-8 hover:w-8 ease-in duration-200"
                fill="currentColor"
                >
                    <path d={contactObj.icon} />
                </svg>
                <div className="absolute bottom-full hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
                {contactObj.method}
                </div>
            </div>
            </a>
        ))}
        </div>
    </div>

  );
};

export default Footer;
