import instagram from "../assets/Footer/instagram.png";
import x from '../assets/Footer/x.png'

export default function FooterPage() {
  return (
    <div className="w-full bg-white flex-col flex items-center  justify-center h-[50vh]">
      <div className=" text-black  relative ">
        <span
          className="before:content-[''] after:content-[''] 
          before:block after:block before:w-[75vh] after:w-[75vh] before:h-[2px]
           after:h-[2px] before:bg-black after:bg-black before:absolute 
           after:absolute before:right-32 after:left-32 before:top-5 after:top-5 
          
            "
        >
          <div className="flex">
            <ul className="flex   flex-row items-center    space-x-5 px-2 ">
              <li>
                <a href="">
                  <img
                    className="hover:scale-150 transition-all delay-75"
                    src={instagram}
                    width={41}
                    height={41}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="hover:scale-150 transition-all delay-75"
                    src={x}
                    width={41}
                    height={41}
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </span>
      </div>
      <div className="w-fit text-black mt-10 mx-auto">
        <p className="mx-auto w-fit font-Courier text-2xl italic    ">NIC Team</p>
        <p>Copyright &copy; 2024 NIC Company </p>
      </div>
      <div className="flex  text-black mt-3  ">
        <p className="border-r  border-black  border-1  pr-5">
          <a href="">Contact Us</a>
        </p>
        <p className="border-r border-1 border-black  pl-5 pr-5">
          <a href="">Services</a>
        </p>
        <p className="pl-5 border-r border-1 border-black pr-5">
          <a href="">Products</a>
        </p>
        <p className="pl-5">
          <a href="">About Us</a>
        </p>
      </div>
    </div>
  );
}
