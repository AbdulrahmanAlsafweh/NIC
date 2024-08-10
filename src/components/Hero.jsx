import hero from '../assets/hero/hero.jpeg'
import instagram from "../assets/hero/instagram.png";
import x from "../assets/hero/x.png";
import websites from '../assets/hero/web-programming.png';
import hardwareRepair from '../assets/hero/pc-tower.png';
import servers from '../assets/hero/infrastructure.png';
import NavbarPage from './navbar';

export default function Hero(){
    return (
      <div>
        <div className="bg-homePage shadow-gray-400 shadow-md bg-opacity-[80%] flex items-center justify-center w-screen h-screen bg-cover">
          <div className="absolute z-10 top-0 w-full">
            <NavbarPage />
          </div>
          <div className="block w-full h-full  bg-black opacity-50"></div>
          <div className="absolute text-white px-5 py-3 top-0 mt-[15%] border-secondary border-1">
            <p className="font-Courier text-center text-[41px] font-bold ">
              Future-Proof{" "}
              <span className="bg-whitee text-blackk px-2 rounded-sm">
                {" "}
                Your
              </span>{" "}
              Business <br />
              with Our IT Solutions
            </p>
          </div>
          {/* This website will help me with hero
https://dev.socrata.com/
*/}
          <div className="  absolute  shadow-md shadow-secondary  right-0 rounded-xl rounded-r-none border-r-0 border-secondary border-2 flex flex-col bg-blackk w-fit h-fit  px-4 py-3">
            <ul className="flex  flex-col  space-y-5">
              <li>
                <a href="">
                  <img
                    className="hover:scale-150 transition-all delay-75"
                    src={instagram}
                    width={32}
                    height={32}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="hover:scale-150 transition-all delay-75"
                    src={x}
                    width={32}
                    height={32}
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" mt-auto shadow-gray-400 shadow-sm st w-screen h-screen pt-36 pb-36 flex flex-col">
          <div className="flex   pb-2 border-secondary border-b-2 w-fit mx-auto   flex-col">
            <p className="font-Courier  text-center text-blackk text-[36px] ">
              Our Services
            </p>
            <p className="text-center text-gray-500 font-Courier text-[18px] ">
              We are the best IT team with best services
            </p>
          </div>

          <div className="flex cursor-pointer  justify-around mt-16 flex-row mx-16 ">
            <div className="bg-primary flex flex-row justify-around h-fit pt-10 pb-10  mx-auto shadow-md shadow-black   w-[100%]   py-10 rounded-lg">
              <div className="flex w-1/4 gap-3 transition-all hover:scale-110  delay-[25] rounded-2xl py-10 hover:border-2 hover:border-secondary justify-center text-center items-center flex-col">
                <img src={servers} height={44} width={44} alt="" />
                <p className="text-black text-lg font-Courier ">
                  Server Installation
                </p>
                <p className="text-gray-700  mt-5 w-[50%] ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Rerum, iusto!{" "}
                </p>
              </div>

              <div className="flex hover:scale-110  w-1/4 justify-center gap-3 text-center items-center flex-col transition-all delay-[25] rounded-2xl py-10 hover:border-2 hover:border-secondary">
                <img src={websites} height={44} width={44} alt="" />
                <p className="text-black text-lg font-Courier ">
                  Websites Building
                </p>
                <p className="text-gray-700 mt-5 w-[50%] ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Rerum, iusto!{" "}
                </p>
              </div>

              <div className="flex w-1/4 hover:scale-110 justify-center gap-3  text-center items-center flex-col transition-all delay-[25] rounded-2xl py-10 hover:border-2 hover:border-secondary">
                <img src={hardwareRepair} height={44} width={44} alt="" />
                <p className="text-black text-lg  font-Courier">
                  Hardware Reparing
                </p>
                <p className="text-gray-700  mt-5 w-[50%]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Rerum, iusto!{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
}