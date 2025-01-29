import { Link } from "react-router-dom";



export default function Footer(){
    return (
      <div className="flex md:px-14 md:py-14 border-t justify-between items-top flex-col  ">
        <div className="flex flex-row justify-between items-top">
          {/* Logo Section */}
          <div className="md:w-[250px] my-auto">
            <img src="Assets/Images/logo.png" alt="logo" />
          </div>

          {/* Discover Section */}
          <div className="flex flex-col md:gap-5 font-Secondary">
            <h3 className="font-bold">Discover</h3>
            <ul className="flex md:gap-2 flex-col">
              <li>
                {" "}
                <Link className="text-gray-400 hover:text-black transition-all delay-75">
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link className="text-gray-400 hover:text-black transition-all delay-75">
                  {" "}
                  About Us
                </Link>
              </li>
              <li>
                {" "}
                <Link className="text-gray-400 hover:text-black transition-all delay-75">
                  {" "}
                  Portfolio
                </Link>
              </li>
              <li>
                {" "}
                <Link className="text-gray-400 hover:text-black transition-all delay-75">
                  {" "}
                  Contact Us
                </Link>
              </li>
              <li>
                {" "}
                <Link className="text-gray-400 hover:text-black transition-all delay-75">
                  {" "}
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* About Section */}

          <div className="flex flex-col md:gap-5 font-Secondary">
            <h3 className="font-bold">About</h3>
            <ul className="flex md:gap-2 flex-col">
              <li>
                {" "}
                <Link className="text-gray-400 hover:text-black transition-all delay-75">
                  {" "}
                  Team
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-black transition-all delay-75">
                  Careers
                </Link>
              </li>
              <li>
                {" "}
                <Link className="text-gray-400 hover:text-black transition-all delay-75">
                  {" "}
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div className=" flex flex-col md:gap-5 font-Secondary">
            <h3 className="font-bold">Help</h3>
            <ul className="flex md:gap-2 flex-col">
              <li>
                {" "}
                <Link className="text-gray-400 hover:text-black transition-all delay-75">
                  {" "}
                  Term Of Service
                </Link>
              </li>
              <li>
                {" "}
                <Link className="text-gray-400 hover:text-black transition-all delay-75">
                  {" "}
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}

          <div className="flex">
            <div className="items-center flex-col md:gap-5 flex font-Secondary">
              <h3 className="font-bold">Follow Us</h3>
              <div className="flex flex-row gap-1 ">
                <Link>
                  <img
                    src="Assets/Images/instagram.png"
                    className="md:w-10"
                    alt=""
                  />
                </Link>

                <Link>
                  <img
                    src="Assets/Images/facebook.png"
                    alt=""
                    className="md:w-10"
                  />
                </Link>
                <Link>
                  <img src="Assets/Images/x.png" alt="" className="md:w-10" />
                </Link>
              </div>
              {/* <button
              className="w-full border-secondary border bg-black font-Secondary md:py-2  md:px-4 text-secondary"
              > Contact Us </button> */}
            </div>
          </div>
        </div>

        <div className="md:px-14 md:w-full flex items-center justify-center border mx-auto md:mt-14 border-gray-400"></div>
        <div className="flex items-center justify-center md:mt-14">
          <p className="flex text-gray-400  font-Secondary">
            All rights reserved &reg; 2025
          </p>
        </div>
      </div>
    );
}
