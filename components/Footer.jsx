import contact from "../public/contact.json";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-1/2 mr-10 transform -translate-x-1/2 w-3/4 sm:left-auto sm:transform-none sm:right-0 sm:w-1/2 md:w-1/3 lg:w-1/5 mb-5 hover:w-4/5 sm:hover:w-2/3 md:hover:w-1/2 lg:hover:w-2/5 ease-in duration-200">
      <div className="flex justify-around bg-black py-2 rounded-xl">
        {contact.map((contactObj, index) => (
          <a
            href={contactObj.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
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
