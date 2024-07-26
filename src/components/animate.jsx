import React, { useEffect, useRef, useState } from "react";
import KUTE from "kute.js";
import "./DinoGame.css";
import GameOver from "../assets/gameover_text.png";
 
const DinoGame = () => {
  const dinoRef = useRef(null);
  const cactusRef = useRef(null);
  const cactus2Ref = useRef(null);
  const cloudRef = useRef(null);
  const cloud2Ref = useRef(null);
  const cloud3Ref = useRef(null);
  const cloud4Ref = useRef(null);
  const cloud5Ref = useRef(null);
  const cloud6Ref = useRef(null);
  const scoreRef = useRef(null);
  const landRef = useRef(null);
  const land2Ref = useRef(null);
  const birdRef = useRef(null);
  const bird2Ref = useRef(null);
  const textRef = useRef(null);
  const textContainerRef = useRef(null);
  const textContainer2Ref = useRef(null);
// const scrollDownRef = useRef(null);

  const [showImage, setShowImage] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [hidePage,setHidePage] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };
    setShowImage(false);
    setHidePage(false);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  useEffect(() => {
    const distance = screenWidth / 2 - 40;

    var duration;
    if (screenWidth < 415) {
      duration = 2000;
      console.log(duration);
    } else {
      duration = 3000;
    }

    const scoreIncrease = KUTE.to(
      scoreRef.current,
      { number: 4000 },
      { duration: duration }
    ).start();


   

    const dinoAnimation = KUTE.fromTo(
      dinoRef.current,
      { translateX: 0 },
      { translateX: distance },
      { duration: duration, onComplete: () => {setShowImage(true)
          
       KUTE.to(textRef.current, {
         text: "I'm going to die ",
       }).start();
       setHidePage(true);


      //  setTimeout(
      //   ()=>{
      //   scrollDownRef.current.scrollIntoView({ behavior: "smooth" });

      //   },1000
      //  )
      } }
    ).start();

    const cactusAnimation = KUTE.fromTo(
      cactusRef.current,
      { translateX: 0 },
      { translateX: -distance },
      { duration: duration }
    ).start();
    const cactus2Animation = KUTE.fromTo(
      cactus2Ref.current,
      { translateX: 0 },
      { translateX: -distance },
      { duration: duration }
    ).start();

    const cloudAnimation = KUTE.fromTo(
      cloudRef.current,
      { translateX: 0 },
      { translateX: -distance },
      { duration: duration }
    ).start();

    const cloud2Animation = KUTE.fromTo(
      cloud2Ref.current,
      { translateY: 0 },
      { translateX: -distance },
      { duration: duration }
    ).start();

    const cloud3Animation = KUTE.fromTo(
      cloud3Ref.current,
      { translateY: 0 },
      { translateX: -distance },
      { duration: duration }
    ).start();
    const cloud4Animation = KUTE.fromTo(
      cloud4Ref.current,
      { translateY: 0 },
      { translateX: -distance },
      { duration: duration }
    ).start();
    const cloud5Animation = KUTE.fromTo(
      cloud5Ref.current,
      { translateY: 0 },
      { translateX: -distance },
      { duration: duration }
    ).start();
    const cloud6Animation = KUTE.fromTo(
      cloud6Ref.current,
      { translateY: 0 },
      { translateX: -distance },
      { duration: duration }
    ).start();
    const birdAnimation = KUTE.fromTo(
      birdRef.current,
      { translateY: 0 },
      { translateX: -(distance * 2 + 160) },
      { duration: duration }
    ).start();

    const bird2Animation = KUTE.fromTo(
      bird2Ref.current,
      { translateY: 0 },
      { translateX: -(distance * 2 + 160) },
      { duration: duration }
    ).start();

    const landAnimation = KUTE.fromTo(
      landRef.current,
      { translateX: 0 },
      { translateX: -distance },
      { duration: duration }
    ).start();
    const land2Animation = KUTE.fromTo(
      land2Ref.current,
      { translateX: 0 },
      { translateX: -distance },
      { duration: duration }
    ).start();

    // Text ref
    const textAnimation = KUTE.to(textRef.current, {
      borderRadius: "5rem",
    }).start();
      
  }, [screenWidth]);

  return (
    <div>
      <div className={`
    
      w-full h-screen flex items-center bg-[#f7f7f7] justify-center  
      
      `}>
        {showImage && (
          <img
            src={GameOver}
            className="w-[50%] md:w-[25%] z-10 mb-44  absolute "
            alt=""
          />
        )}

        <div className="absolute top-0 right-0 mr-10 mt-2">
          <p>
            <pre className="text-gray-400">
              HI{" "}
              <span className="text-black" ref={scoreRef}>
                {" "}
              </span>
            </pre>
          </p>
        </div>
        <div className="relative w-[100%] h-[200px] flex items-center overflow-hidden    bg-transparent">
          {/*///////////////////*/}
          {/* The cluods */}
          {/*///////////////////*/}
          <div
            className="bg-cloud bg-contain absolute -right-4 bg-no-repeat bg-top w-[42px]  h-[39px]"
            ref={cloudRef}
          ></div>
          <div
            className="bg-cloud bg-contain absolute -right-[120px] mb-[100px] bg-no-repeat bg-top w-[42px]  h-[39px]"
            ref={cloud2Ref}
          ></div>
          <div
            className="bg-cloud bg-contain absolute right-[80px] mb-[26px] bg-no-repeat bg-top w-[42px]  h-[39px]"
            ref={cloud3Ref}
          ></div>
          <div
            className="bg-cloud bg-contain absolute right-[180px] mb-[70px] bg-no-repeat bg-top w-[42px]  h-[39px]"
            ref={cloud4Ref}
          ></div>
          <div
            className="bg-cloud bg-contain absolute -right-[200px] mb-[70px] bg-no-repeat bg-top w-[42px]  h-[39px]"
            ref={cloud5Ref}
          ></div>
          <div
            className="bg-cloud bg-contain absolute -right-[250px] mb-[120px] bg-no-repeat bg-top w-[42px]  h-[39px]"
            ref={cloud6Ref}
          ></div>
          {/*///////////////////*/}
          {/* end of clouds     */}
          {/*///////////////////*/}

          {/*///////////////////*/}
          {/* birds */}
          {/*///////////////////*/}
          <div
            className="bird bg-contain absolute -right-[80px] mb-[90px] bg-no-repeat bg-top      "
            ref={birdRef}
          ></div>
          <div
            className="bird bg-contain absolute -right-[900px] mb-[120px] bg-no-repeat bg-top     "
            ref={bird2Ref}
          ></div>
          {/*///////////////////*/}
          {/* end of birds */}
          {/*///////////////////*/}

          {/*///////////////////*/}
          {/* Dino */}
          {/*///////////////////*/}
          <div
            className={`bg-black w-[40px] h-[43px] mb-2 self-end  ${
              showImage ? "bg-deadDino" : " bg-trex"
            }    bg-transparent dino bg-no-repeat z-[1]`}
            ref={dinoRef}
          >
            {/* The message container & the message */}
            <div>
              <div
                ref={textContainerRef}
                className={`bg-[#535353]
                  
                -right-[72px]
                ${
                  showImage
                    ? "rounded  rounded-bl-none  border-black border-2  w-20 h-10"
                    : ""
                }   absolute -top-14  `}
              >
                <p className="z-10 ml-1 text-xs" ref={textRef}></p>
              </div>
            </div>
            <div
              ref={textContainer2Ref}
              className={`
              -right-[8px]
              
              bg-[#535353] absolute   ${
                showImage
                  ? "rounded-br-full  h-4 w-4 border-black border-2 border-t-0"
                  : ""
              }  -top-5 `}
            ></div>
          </div>

          {/*///////////////////*/}
          {/* end of dino */}
          {/*///////////////////*/}

          {/*///////////////////*/}
          {/* Cactus */}
          {/*///////////////////*/}
          <div
            ref={cactusRef}
            className="bg-black w-[40px] h-[43px] mb-2 self-end bg-cactus bg-contain bg-transparent absolute right-0 bg-no-repeat z-[1] "
          ></div>

          <div
            ref={cactus2Ref}
            className="bg-black w-[49px] h-[33px] mb-2 self-end bg-tripleCactus bg-contain bg-transparent absolute -right-[200px] bg-no-repeat z-[1] "
          ></div>

          {/*///////////////////*/}
          {/* End of cactus */}
          {/*///////////////////*/}

          {/*///////////////////*/}
          {/*  LAnds */}
          {/*///////////////////*/}
          <div ref={landRef} className="absolute bottom-0 flex w-full h-[29px]">
            <div className="bg-land1 bg-repeat-x bg-contain w-[1500px] h-[29px]"></div>
            <div className="bg-land2 bg-repeat-x bg-contain w-[1500px] h-[29px]"></div>
            <div className="bg-land3 bg-repeat-x bg-contain w-[1500px] h-[29px]"></div>
          </div>
          <div
            ref={land2Ref}
            className=" -right-[100%] absolute bottom-0 flex w-full h-[29px]"
          >
            <div className="bg-land1 bg-repeat-x bg-contain w-[1500px] h-[29px]"></div>
            <div className="bg-land2 bg-repeat-x bg-contain w-[1500px] h-[29px]"></div>
            <div className="bg-land3 bg-repeat-x bg-contain w-[1500px] h-[29px]"></div>
          </div>

          {/*///////////////////*/}
          {/* End of Lands */}
          {/*///////////////////*/}
        </div>
      </div>
{/* 
      <div 
      className="bg-red-400 h-[100vh]"
      ref={scrollDownRef}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae repudiandae odio deleniti ullam, eum eligendi fuga ipsum id, quibusdam omnis cupiditate unde accusantium beatae ab eius earum? Totam, tenetur culpa!
        </p>
      </div> */}
    </div>
  );
};

export default DinoGame;
