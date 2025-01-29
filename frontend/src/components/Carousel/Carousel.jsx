import React from "react";
import { Carousel } from "antd";

export default function FullScreenCarousel() {
  return (
    <Carousel autoplay draggable className="h-screen w-screen">
      {/* First Slide */}
      <div className="!flex relative flex-row h-[88vh] w-[75vw] justify-center items-center md:gap-32 px-6">
        <div className="md:w-[30%]">
          <img
            src="Assets/Images/carouselImage3.jpg"
            className="  object-contain"
            alt="image 2"
          />
        </div>
        <div className="flex flex-col md:gap-10">
          <div>
            <p className="font-Main font-bold md:text-3xl text-black leading-tight">
              Ready to Elevate <br /> Your Business <br /> with Tech Strategy?
            </p>
          </div>
          <div>
            <ul className="flex flex-col font-Secondary md:text-2xl md:gap-3">
              <li className="flex flex-row items-center gap-5">
                <span>
                  <img
                    src="Assets/Images/check.png"
                    className="w-[21px]"
                    alt=""
                  />
                </span>
                Custom IT Solutions
              </li>
              <li className="flex flex-row items-center gap-5">
                <span>
                  <img
                    src="Assets/Images/check.png"
                    className="w-[21px]"
                    alt=""
                  />
                </span>
                Seamless Tech Integration
              </li>
              <li className="flex flex-row items-center gap-5">
                <span>
                  <img
                    src="Assets/Images/check.png"
                    className="w-[21px]"
                    alt=""
                  />
                </span>
                Future-Ready Growth
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Second Slide */}
      <div className="!flex relative flex-row h-[88vh] w-[75vw] justify-center items-center md:gap-32 px-6">
       

        <div className="md:w-[30%]">
          <img
            src="Assets/Images/carouselImage1.png"
            className="  object-contain"
            alt="image 2"
          />
        </div>
        <div className="flex flex-col md:gap-10">
          <div>
            <p className="font-Main font-bold md:text-3xl text-black leading-tight">
              Ready for <span className="text-secondary">Reliable</span> <br />{" "}
              and Fast Web Hosting?
            </p>
          </div>
          <div>
            <ul className="flex flex-col font-Secondary md:text-2xl md:gap-3">
              <li className="flex flex-row items-center gap-5">
                <span>
                  <img
                    src="Assets/Images/check.png"
                    className="w-[21px]"
                    alt=""
                  />
                </span>
                Lightning-Fast Speeds
              </li>
              <li className="flex flex-row items-center gap-5">
                <span>
                  <img
                    src="Assets/Images/check.png"
                    className="w-[21px]"
                    alt=""
                  />
                </span>
                24/7 Expert Support
              </li>
              <li className="flex flex-row items-center gap-5">
                <span>
                  <img
                    src="Assets/Images/check.png"
                    className="w-[21px]"
                    alt=""
                  />
                </span>
                Free SSL Certificates
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Third Slide */}
      <div className="!flex flex-row h-[88vh] w-[75vw] justify-center items-center md:gap-32 px-6">
        <div className="md:w-[30%]">
          <img
            src="Assets/Images/IT.png"
            className="  object-contain"
            alt="image 2"
          />
        </div>
        <div className="flex flex-col md:gap-10">
          <div>
            <p className="font-Main font-bold md:text-3xl text-black leading-tight">
              Tech Issues? <br /> We’ve Got You Covered!
            </p>
          </div>
          <div>
            <ul className="flex flex-col font-Secondary md:text-2xl md:gap-3">
              <li className="flex flex-row items-center gap-5">
                <span>
                  <img
                    src="Assets/Images/check.png"
                    className="w-[21px]"
                    alt=""
                  />
                </span>
                Reliable IT Support, Anytime, Anywhere!
              </li>
              <li className="flex flex-row items-center gap-5">
                <span>
                  <img
                    src="Assets/Images/check.png"
                    className="w-[21px]"
                    alt=""
                  />
                </span>
                Fast, Expert IT Solutions for Your Needs
              </li>
              <li className="flex flex-row items-center gap-5">
                <span>
                  <img
                    src="Assets/Images/check.png"
                    className="w-[21px]"
                    alt=""
                  />
                </span>
                Dependable IT Maintenance, Always On
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
