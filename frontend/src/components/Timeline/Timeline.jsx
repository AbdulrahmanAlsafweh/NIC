import React from "react";
import { Timeline } from "antd";
import {
  PhoneOutlined,
  HomeOutlined,
  CheckCircleOutlined,
  ToolOutlined,
} from "@ant-design/icons";

export default function HowToStartTimeline() {
  return (
    <div className="timeline-container md:mt-14 cursor-default  ">
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        className=""
        viewBox="0 0 1440 320"
      >
        <path
          fill="#D0DE55"
          fill-opacity="1"
          d="M0,160L9.6,181.3C19.2,203,38,245,58,261.3C76.8,277,96,267,115,256C134.4,245,154,235,173,213.3C192,192,211,160,230,128C249.6,96,269,64,288,64C307.2,64,326,96,346,138.7C364.8,181,384,235,403,266.7C422.4,299,442,309,461,282.7C480,256,499,192,518,176C537.6,160,557,192,576,186.7C595.2,181,614,139,634,144C652.8,149,672,203,691,229.3C710.4,256,730,256,749,245.3C768,235,787,213,806,186.7C825.6,160,845,128,864,128C883.2,128,902,160,922,149.3C940.8,139,960,85,979,69.3C998.4,53,1018,75,1037,90.7C1056,107,1075,117,1094,117.3C1113.6,117,1133,107,1152,96C1171.2,85,1190,75,1210,90.7C1228.8,107,1248,149,1267,160C1286.4,171,1306,149,1325,138.7C1344,128,1363,128,1382,138.7C1401.6,149,1421,171,1430,181.3L1440,192L1440,0L1430.4,0C1420.8,0,1402,0,1382,0C1363.2,0,1344,0,1325,0C1305.6,0,1286,0,1267,0C1248,0,1229,0,1210,0C1190.4,0,1171,0,1152,0C1132.8,0,1114,0,1094,0C1075.2,0,1056,0,1037,0C1017.6,0,998,0,979,0C960,0,941,0,922,0C902.4,0,883,0,864,0C844.8,0,826,0,806,0C787.2,0,768,0,749,0C729.6,0,710,0,691,0C672,0,653,0,634,0C614.4,0,595,0,576,0C556.8,0,538,0,518,0C499.2,0,480,0,461,0C441.6,0,422,0,403,0C384,0,365,0,346,0C326.4,0,307,0,288,0C268.8,0,250,0,230,0C211.2,0,192,0,173,0C153.6,0,134,0,115,0C96,0,77,0,58,0C38.4,0,19,0,10,0L0,0Z"
        ></path>
      </svg> */}

      <h2 className="text-center text-4xl font-bold font-Secondary mb-10 ">
        How to Start ?
      </h2>
      <Timeline mode="alternate" className="custom-timeline">
        {/* Step 1: Free Consultation */}
        <Timeline.Item
          dot={
            <div className="step-number">
              <span className="rounded-full bg-secondary text-blackk px-4 py-2 font-Secondary font-bold text-xl">
                1
              </span>
            </div>
          }
          className="timeline-item "
        >
          <div className="timeline-content md:mb-10">
            <div className="flex flex-row  ml-5 gap-5">
              <img
                src="Assets/Images/telephone.png"
                className="w-[32px] h-[32px]"
                alt=""
              />
              <h3 className="font-semibold text-2xl ">Free Consultation</h3>
            </div>
            <p className="text-lg ml-5">
              Discuss your needs and goals with our experts
            </p>
          </div>
        </Timeline.Item>

        {/* Step 2: On-Site Survey */}
        <Timeline.Item
          dot={
            <div className="step-number">
              <span className="rounded-full bg-blackk text-secondary px-3 py-2 font-Secondary font-bold text-xl">
                2
              </span>
            </div>
          }
          className="timeline-item"
        >
          <div className="timeline-content md:mb-10">
            <div className="w-fit flex flex-row ml-auto mr-5 gap-5">
              <h3 className="font-semibold text-2xl">On-Site Survey</h3>

              <img
                src="Assets/Images/location.png"
                className="w-[32px] h-[32px]"
                alt=""
              />
            </div>
            <p className="text-lg mr-5">
              Analyze your site to gather accurate requirements
            </p>
          </div>
        </Timeline.Item>

        {/* Step 3: Best Practices */}
        <Timeline.Item
          dot={
            <div className="step-number">
              <span className="rounded-full bg-secondary text-blackk px-3 py-2 font-Secondary font-bold text-xl">
                3
              </span>{" "}
            </div>
          }
          className="timeline-item"
        >
          <div className="timeline-content md:mb-10">
            <div className="flex flex-row items-center gap-5 ml-5">
              <img
                src="Assets/Images/settings.png"
                className="w-[32px] h-[32px]"
                alt=""
              />
              <h3 className="font-semibold text-2xl">Best Practices</h3>
            </div>
            <p className="text-lg ml-5">
              Plan the optimal solution based on industry standards
            </p>
          </div>
        </Timeline.Item>

        {/* Step 4: Setup Accomplished */}
        <Timeline.Item
          dot={
            <div className="step-number">
              <span className="rounded-full bg-blackk text-secondary px-3 py-2 font-Secondary font-bold text-xl">
                4
              </span>
            </div>
          }
          className="timeline-item"
        >
          <div className="timeline-content">
            <div className="w-fit flex flex-row ml-auto mr-5 gap-5">
              <h3 className="font-semibold text-2xl">Setup Accomplished</h3>
              <img
                src="Assets/Images/darts.png"
                className="w-[32px] h-[32px]"
                alt=""
              />
            </div>
            <p className="text-lg mr-5 ">
              Complete installation and ensure everything works perfectly
            </p>
          </div>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
