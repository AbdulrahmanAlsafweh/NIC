
import { Link } from "react-router-dom";

export default function TestPage() {
  return (
    <div className="bg-blackk px-[30px] pt-[24px]">
      <div
        style={{
          backgroundImage: `url('/Assets/Images/Navbar/Subtract.svg')`,
          backgroundSize: "contain", // Adjust to make the SVG shrink
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat", // Prevent repeat
          height: "100vh", // Full viewport height
          width: "100vw", // Full viewport width
        }}
      >
        <div className="flex flex-row  relative justify-between">
          <img
            src="Assets/Images/Logo.png"
            className="w-[150px]"
            alt="NIC LOGO"
          />
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

          <button className="   md:w-[150px] h-12 rounded-l-full text-secondary">
            test
          </button>
        </div>
      </div>
    </div>
  );
}
