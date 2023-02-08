import Arrow from "../assets/Arrow.png";

const BlockchainesCard = ({ backgroundCrucial, title, img, activeImg, url }) => {
  return (
    <div className="mb-6 relative flex justify-center group">
      <div className="z-0 absolute h-16 w-16 -top-7">
        <img src={`${backgroundCrucial}`} />
      </div>
      <div className="bg-neutral-700/25 relative backdrop-blur-lg z-10 rounded-lg h-80 md:w-10/12 w-full flex flex-col justify-center lg:w-full">
        <div className="absolute opacity-0 rounded-lg group-hover:opacity-100 z-20 transition duration-1000 ease-in-out bg-gradient-to-b from-[#312E81] to-indigo-500 h-full w-full"></div>
        <div className="pt-6 group-hover:pt-0 h-full md:h-4/6 flex flex-col justify-between items-center mt-14 pb-8 md:pb-0">
          <div className="flex flex-col items-center">
            <img
              className="mb-4 transition duration-1000 ease-in-out opacity-100 group-hover:w-0 group-hover:h-0 group-hover:opacity-0 group-hover:mb-0"
              src={`${img}`}
              alt="active"
            />
            <img
              className="mb-4 transition duration-1000 ease-in-out w-0 h-0 opacity-0 group-hover:w-24 group-hover:h-24 group-hover:opacity-100 z-20"
              src={`${activeImg}`}
              alt={title}
            />
            <span className="text-xl z-20">{title}</span>
          </div>
          <a
            href={url}
            target="_blank"
            className="text-sm mx-3 flex opacity-0 group-hover:opacity-100 z-20 transition duration-1000 ease-in-out"
          >
            {url}
            <img className="ml-5 pb-1" src={`${Arrow}`} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlockchainesCard;
