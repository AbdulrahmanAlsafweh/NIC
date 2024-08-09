import { useState } from "react";
import Logo from "../assets/NIC-Logo.png";

export default function NavbarPage() {
  return (
    <div className="drawer flex sm:block items-center drawer-end justify-between">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  flex flex-col">
        {/* Navbar */}
        <div className="navbar  bg-transparent w-full">
          <div className="mx-2 flex-1 px-2">
            {/* <img src={Logo} width={75} alt="" /> */}
            <p className="font-Courier text-whitee text-2xl font-bold cursor-pointer ">
              NIC Group
            </p>
          </div>
          <div className="hidden flex-none sm:block">
            <ul className="menu menu-horizontal font-Courier">
              {/* Navbar menu content here */}
              <li className="text-whitee text-lg hover:text-secondary transition-all delay-75">
                <a>Services </a>
              </li>
              <li className="text-whitee text-lg hover:text-secondary transition-all delay-75">
                <a>Products </a>
              </li>
              <li className="text-whitee text-lg hover:text-secondary transition-all delay-75">
                <a>About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side drawer-end">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
      <div className="flex-none sm:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
    </div>
  );
}
