import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons'; // For the menu icon

export default function Navbar() {
  const [visible, setVisible] = useState(false); // State to control Drawer visibility

  // Show Drawer
  const showDrawer = () => {
    setVisible(true);
  };

  // Close Drawer
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="flex items-center justify-between md:py-5 md:px-5 shadow-sm shadow-gray-300">
      {/* Logo */}
      <div className="md:w-auto w-[50%]">
        <a href="/home">
          <img
            src="/Assets/Images/Logo.png"
            alt="Logo"
            className="w-full md:w-[200px] h-auto"
          />
        </a>
      </div>

      {/* Navigation Links (Desktop view) */}
      <div className="hidden md:flex">
        <ul className="font-Secondary flex flex-row gap-5">
          <li>
            <a href="">IT Support & Maintenance</a>
          </li>
          <li>
            <a href="">Online & Hosting Services</a>
          </li>
          <li>
            <a href="">Advisory and Technology Strategy</a>
          </li>
        </ul>
      </div>

      {/* Button Section */}
      <div className=" hidden md:flex items-center justify-center md:gap-5 space-x-4">
        <div>
          <a href="">
            <button className="bg-blackk hover:bg-secondary hover:text-blackk transition-all text-secondary rounded-3xl md:px-5 md:py-2 flex items-center justify-center sm:px-3 sm:py-1">
              <p>Contact Us</p>
            </button>
          </a>
        </div>
        <div>
          <a href="">
            <button className="bg-secondary hover:bg-blackk hover:text-secondary transition-all text-blackk rounded-3xl md:px-5 md:py-2 flex items-center justify-center sm:px-3 sm:py-1">
              <p>Free Consult</p>
            </button>
          </a>
        </div>
      </div>

      {/* Mobile Drawer Button */}
      <div className="md:hidden flex items-center">
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={showDrawer}
          className="text-black"
        />
      </div>

      {/* Drawer Component for Mobile View */}
      <Drawer
        title="Navigation Menu"
        placement="right" // Drawer slides from the left
        onClose={onClose}
        visible={visible}
        width={250} // Optional, set width for the drawer
      >
        <ul className="font-Secondary flex flex-col gap-4">
          <li>
            <a href="">IT Support & Maintenance</a>
          </li>
          <li>
            <a href="">Online & Hosting Services</a>
          </li>
          <li>
            <a href="">Advisory and Technology Strategy</a>
          </li>
          <li>
            <button className="bg-secondary text-white px-4 py-2 rounded-md">
              Contact Us
            </button>
          </li>
          <li>
            <button className="bg-black text-white px-4 py-2 rounded-md">
              Free Consult
            </button>
          </li>
        </ul>
      </Drawer>
    </div>
  );
}
