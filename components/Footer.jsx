import contact from "../public/contact.json";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full m-0 z-50">
        <div className="flex justify-between bg-black py-2 px-20">
        {contact.map((contactObj, index) => (
            <a href={contactObj.link} target="_blank" rel="noopener noreferrer" key={index}>
            <div className="relative group">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-8 h-8 cursor-pointer text-white hover:text-red-500 hover:h-10 hover:w-10 ease-in duration-200"
                fill="currentColor"
                >
                <path d={contactObj.icon} />
                </svg>
                <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
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
