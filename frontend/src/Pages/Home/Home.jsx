import { Link } from "react-router-dom";
import WorkRoadMap from "../../components/WorkRoadMap/WorkRoadMap";
export default function HomePage() {
  return (
    <div className="bg-blackk md:px-7 md:py-7">
      <div className="bg-[#D2D4FF]   rounded-3xl">



        <div className="flex flex-row justify-between rounded-tr-full items-center px-5 py-5 relative">
          <img
            src="Assets/Images/Logo.png"
            alt="NIC LOGO"
            className="md:w-[150px]"
          />
          <div>
            <ul className="flex flex-row gap-5">
              <li className=" border-black border-b-2 border-0   ">
                <Link>Home</Link>
              </li>
              <li className="opacity-50 hover:opacity-100 hover:border-black hover:border-b-2 border-0 transition-all">
                <Link>Our Story</Link>
              </li>
              <li className="opacity-50 hover:opacity-100 hover:border-black hover:border-b-2 border-0 transition-all">
                <Link>Portfolio</Link>
              </li>
              <li className="opacity-50 hover:opacity-100 hover:border-black hover:border-b-2 border-0 transition-all">
                <Link>Team</Link>
              </li>
              <li className="opacity-50 hover:opacity-100 hover:border-black hover:border-b-2 border-0 transition-all">
                <Link>Blog</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <button className="bg-blackk absolute right-0    top-1/2 -translate-y-1/2 md:w-[150px] h-12 rounded-l-full text-secondary">
              test
            </button>
          </div>
          {/* <div className="absolute right-0  bg-blackk w-[150px] top-0  rounded-bl-full h-[50px]"> 

          </div> */}
        </div>




        <div className="flex flex-row justify-between z-0">
          <img src="Assets/Images/Navbar/mask_group.png" alt="" srcset="" />
          <div className="md:px-10 md:my-auto text-blackk ">
            <h1 className="font-bold md:text-[3.5rem] relative leading-[4rem] w-fit">
              Welcome to 
              <span className="md:w-[6.5rem]  right-0 mt-[2rem] z-14  md:h-7 top-0   absolute bg-secondary">
              </span>
              <span className=" italic relative z-20"> NIC </span> <br /> 
              Network and IT <br /> Consultants!
            </h1>
            <p className="md:ml-14 md:mt-10 text-wrap md:w-[550px]">
              At NIC, we offer comprehensive solutions for all your online brand
              promotion, marketing performance analysis, programming, and IT
              needs. Our dedicated teams work together to provide high-quality
              services tailored to your requirements. With our expertise and
              commitment to excellence, we ensure your success in the digital
              landscape.
            </p>
          </div>
        </div>
      </div>
      <WorkRoadMap />
    </div>
  );
}
