import React, { useEffect, useRef, useState } from "react";
import KUTE, { onComplete } from "kute.js";
import "./DinoGame.css";
import GameOver from "../assets/gameover_text.png";
import scroll from '../assets/arrow.png'
import Navbar from "./navbar";
const DinoGame = () => {


  ////////////////////
  // All Used useRef
  ///////////////////
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
  const scrollArrowRef = useRef(null);
  const textContainer2Ref = useRef(null);
  const scrollDownRef = useRef(null);


  /////////////////////
  // All used useState
  /////////////////////
  const [showImage, setShowImage] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [hidePage, setHidePage] = useState(false);
  const [ hideHUD,setHideHUD]  = useState(false);
  const [ showFirstM,setShowFirstM] = useState(false);
  const [showSecondM, setShowSecondM] = useState(false);
  const [showThirdM, setShowThirdM] = useState(false);
  const[allowScroll,setAllowScroll] = useState(false);
  const [hideLanding,setHideLanding] = useState(false);

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


//  useEffect(()=>{

//   console.log(window.scrollY)
//   console.log(allowScroll)
//   if(allowScroll){
//     scrollDownRef.current.scrollIntoView({ behavior: "smooth" });
//     console.log("done scroll")
//   }

//  },[window.scrollY])
const handleScroll = () => {
  console.log("Scroll position:", window.pageYOffset);
  if(allowScroll && window.pageYOffset > 0 ){
    scrollDownRef.current.scrollIntoView({behavior:'smooth'})
    setTimeout(()=>{
    setHideLanding (true)
    },400)
  }
};

window.addEventListener("scroll", handleScroll);
   
  useEffect(() => {
    /////////////////////////////////////////
    // calculating the distance and duration 
    /////////////////////////////////////////
    const distance = screenWidth / 2 - 40;

    var duration;
    var mChat;
    if (screenWidth < 500) {
      duration = 2000;
      mChat=10
      console.log(duration);
    } else {
      duration = 3000;
      mChat=screenWidth/2.5
    }

    /////////////////////////////////
    // The Start of  score Animation
    /////////////////////////////////
    const scoreIncrease = KUTE.to(
      scoreRef.current,
      { number: 4000 },
      { duration: duration }
    ).start();
    /////////////////////////////////
    // The end of  score Animation
    /////////////////////////////////

    /////////////////////////////////
    // The Start of  Dino Animation
    /////////////////////////////////

    const dinoAnimation = KUTE.fromTo(
      dinoRef.current,
      { translateX: 0 },
      { translateX: distance },
      {
        duration: duration,
        onComplete: () => {
          setShowImage(true);

          //  KUTE.to(textRef.current, {
          //    text: "I'm going to die ",
          //  }).start();
          //  setHidePage(true);

          //  setTimeout(
          //   ()=>{
          //   scrollDownRef.current.scrollIntoView({ behavior: "smooth" });

          //   },1000
          //  )
          setTimeout(() => {
            KUTE.fromTo(
              cactusRef.current,
              {
                translateX: -distance,
              },
              {
                translateX: 2000,
              },
              {
                duration: 2000,
              }
            ).start();

            KUTE.fromTo(
              cactus2Ref.current,
              {
                translateX: -distance,
              },
              {
                translateX: 2000,
              },
              {
                duration: 2000,
              }
            ).start();

            KUTE.fromTo(
              cloud2Ref.current,
              {
                translateX: -distance,
              },
              {
                translateX: -2000,
              },
              {
                duration: 2000,
              }
            ).start();

            KUTE.fromTo(
              cloud3Ref.current,
              {
                translateX: -distance,
              },
              {
                translateX: -2000,
              },
              {
                duration: 2000,
              }
            ).start();

            KUTE.fromTo(
              cloud4Ref.current,
              {
                translateX: -distance,
              },
              {
                translateX: -2000,
              },
              {
                duration: 2000,
              }
            ).start();

            KUTE.fromTo(
              cloud5Ref.current,
              {
                translateX: -distance,
              },
              {
                translateX: -2000,
              },
              {
                duration: 2000,
              }
            ).start();

            KUTE.fromTo(
              cloud6Ref.current,
              {
                translateX: -distance,
              },
              {
                translateX: 2000,
              },
              {
                duration: 2000,
              }
            ).start();

            KUTE.fromTo(
              cloudRef.current,
              {
                translateX: distance,
              },
              {
                translateX: 2000,
              },
              {
                duration: 2000,
              }
            ).start();

            KUTE.fromTo(
              bird2Ref.current,
              {
                translateX: -distance,
              },
              {
                translateX: 2000,
              },
              {
                duration: 2000,
              }
            ).start();

            KUTE.fromTo(
              birdRef.current,
              {
                translateX: -distance,
              },
              {
                translateX: 2000,
              },
              {
                duration: 2000,
              }
            ).start();

            KUTE.fromTo(
              cloud2Ref.current,
              {
                translateX: -distance,
              },
              {
                translateX: -2000,
              },
              {
                duration: 2000,
              }
            ).start();

            KUTE.fromTo(
              landRef.current,
              {
                translateX: -distance,
              },
              {
                translateX: -2000,
              },
              {
                duration: 2000,
              }
            ).start();

            KUTE.fromTo(
              land2Ref.current,
              {
                translateX: -distance,
              },
              {
                translateX: 2000,
              },
              {
                duration: 2000,
                onComplete: () => {
                  setHideHUD(true);

                  // KUTE.fromTo(
                  //   dinoRef.current,
                  //   {
                  //     translate: distance,
                  //     scale: 1.5,
                  //   },
                  //   {
                  //     translateY: -screenHeight / 2,
                  //     translateX: mChat,
                  //     scale: 1,
                  //   },
                  //   {
                  //     duration: 1000,
                  //     onComplete: () => {
                  //       setTimeout(() => {
                  //         setShowFirstM(true);
                  //         setTimeout(() => {
                  //           setShowSecondM(true);
                  //           setTimeout(() => {
                  //             setShowThirdM(true);
                  //             setTimeout(() => {
                  //               KUTE.fromTo(
                  //                 scrollArrowRef.current,
                  //                 { translateY: 0, translateX: 0 },
                  //                 { translateY: -50, translateX: 0 },
                  //                 {
                  //                   duration: 1000,
                  //                   onComplete: () => {
                  //                       setAllowScroll(true);

                  //                     KUTE.fromTo(
                  //                       scrollArrowRef.current,
                  //                       { translateY: -50, translateX: 0 },
                  //                       { translateY: 0, translateX: 0 },
                  //                       { duration: 1000 }
                  //                     ).start();
                  //                   },
                  //                 }
                  //               ).start();
                  //               setInterval(() => {
                  //                 KUTE.fromTo(
                  //                   scrollArrowRef.current,
                  //                   { translateY: 0, translateX: 0 },
                  //                   { translateY: -50, translateX: 0 },
                  //                   {
                  //                     duration: 1000,
                  //                     onComplete: () => {
                  //                       KUTE.fromTo(
                  //                         scrollArrowRef.current,
                  //                         { translateY: -50, translateX: 0 },
                  //                         { translateY: 0, translateX: 0 },
                  //                         { duration: 1000 }
                  //                       ).start();
                  //                     },
                  //                   }
                  //                 ).start();
                  //               }, 2000);
                  //             }, 400);
                  //           }, 400);
                  //         }, 400);
                  //       }, 400);
                  //     },
                  //   }
                  // ).start();
                },
              }
            ).start();
          }, 100);
        },
      }
    ).start();
    /////////////////////////////////
    // The Start of  cactus Animation
    /////////////////////////////////

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

    /////////////////////////////////
    // The end of  cactus Animation
    /////////////////////////////////

    /////////////////////////////////
    // The Start of  Cloud Animation
    /////////////////////////////////
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

    /////////////////////////////////
    // The End of  Cloud Animation
    /////////////////////////////////

    /////////////////////////////////
    // The Start of  Bird Animation
    /////////////////////////////////
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

    /////////////////////////////////
    // The ENd of  bird Animation
    /////////////////////////////////

    /////////////////////////////////
    // The Start of  Land Animation
    /////////////////////////////////
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

    /////////////////////////////////
    // The end of  land Animation
    /////////////////////////////////

    // Text ref
    // const textAnimation = KUTE.to(textRef.current, {
    //   borderRadius: "5rem",
    // }).start();
  }, [screenWidth]);

  return (
    <div>
      <div
        className={`
    
      w-full h-screen flex items-center bg-[#f7f7f7] justify-center  
      overflow-x-hidden
      ${
        hideLanding ? "hidden" : ''
      }
      `}
      >
        {showImage && (
          <img
            src={GameOver}
            className={`w-[50%] md:w-[25%] z-10 mb-44  absolute
${hideHUD ? "hidden" : ""}

            `}
            alt=""
          />
        )}

        <div
          className={`absolute top-0 right-0 mr-10 mt-2
          ${hideHUD ? " hidden" : ""}
          `}
        >
          <p>
            <pre className="text-gray-400">
              HI{" "}
              <span className="text-black" ref={scoreRef}>
                {" "}
              </span>
            </pre>
          </p>
        </div>
        <div className="relative w-[100%] h-[200px] flex items-center     bg-transparent">
          {/*///////////////////*/}
          {/* The cluods */}
          {/*///////////////////*/}
          <div
            className={`bg-cloud bg-contain absolute -right-4 bg-no-repeat bg-top w-[42px]  h-[39px]
              ${hideHUD ? "hidden" : " "}
              `}
            ref={cloudRef}
          ></div>
          <div
            className={`bg-cloud bg-contain absolute -right-[120px] mb-[100px] bg-no-repeat bg-top w-[42px]  h-[39px]
              ${hideHUD ? "hidden" : " "}
              `}
            ref={cloud2Ref}
          ></div>
          <div
            className={`bg-cloud bg-contain absolute right-[80px] mb-[26px] bg-no-repeat bg-top w-[42px]  h-[39px]
              ${hideHUD ? "hidden" : " "}
              `}
            ref={cloud3Ref}
          ></div>
          <div
            className={`bg-cloud bg-contain absolute right-[180px] mb-[70px] bg-no-repeat bg-top w-[42px]  h-[39px]
              ${hideHUD ? "hidden" : " "}
              `}
            ref={cloud4Ref}
          ></div>
          <div
            className={`bg-cloud bg-contain absolute -right-[200px] mb-[70px] bg-no-repeat bg-top w-[42px]  h-[39px]
              ${hideHUD ? "hidden" : " "}
              `}
            ref={cloud5Ref}
          ></div>
          <div
            className={`bg-cloud bg-contain absolute -right-[250px] mb-[120px] bg-no-repeat bg-top w-[42px]  h-[39px]
              ${hideHUD ? "hidden" : " "}
              `}
            ref={cloud6Ref}
          ></div>
          {/*///////////////////*/}
          {/* end of clouds     */}
          {/*///////////////////*/}

          {/*///////////////////*/}
          {/* birds */}
          {/*///////////////////*/}
          <div
            className={`bird bg-contain absolute -right-[80px] mb-[90px] bg-no-repeat bg-top     
              ${hideHUD ? "hidden " : ""}
              `}
            ref={birdRef}
          ></div>
          <div
            className={`bird bg-contain absolute -right-[900px] mb-[120px] bg-no-repeat bg-top   
              ${hideHUD ? "hidden " : ""}
              `}
            ref={bird2Ref}
          ></div>
          {/*///////////////////*/}
          {/* end of birds */}
          {/*///////////////////*/}

          {/*///////////////////*/}
          {/* Dino */}
          {/*///////////////////*/}
          <div
            className={`bg-black w-[40px] h-[43px] z-10 mb-2 self-end  ${
              showImage ? "bg-deadDino" : " bg-trex"
            } 
            ${
              hideHUD ? "hidden" : ""
            }   bg-transparent dino bg-no-repeat z-[1]`}
            ref={dinoRef}
          >
            {/* The message container & the message */}
            <div>
              {/* /*This div will contain the dino when he move chat and the user */}
              <div>
                <div
                  ref={textContainerRef}
                  className={`bg-[#535353]
                  
                left-[50px]
                top-0
                ${
                  showFirstM
                    ? "rounded-xl    border-white flex items-center px-3  text-white border-2  w-fit h-10"
                    : ""
                }   absolute -top-14  `}
                >
                  <p
                    className={`z-10 w-fit ml-1  text-s text-nowrap
                    ${showFirstM ? "" : "hidden"}
                  `}
                    ref={textRef}
                  >
                    It seems you'r disconnected !
                  </p>
                </div>
              </div>

              <div
                className={`absolute    left-[400px] top-[50px] bg-user bg-cover w-[40px] h-[29px] bg-transparent
              ${showSecondM ? "" : "hidden"}
              `}
              >
                <p className="absolute flex items-center right-10 border-white text-nowrap border-2 h-10 bg-[#535353]  rounded-xl w-fit px-3 text-white text-s">
                  help
                </p>
              </div>

              <div
                className={`absolute      top-[100px] bg-Dino bg-cover w-[40px] h-[42px] bg-transparent
              ${showThirdM ? "" : "hidden"}
              `}
              >
                <p className="absolute ml-1 flex items-center left-[50px] border-white text-nowrap border-2 h-10 bg-[#535353]  rounded-xl w-fit px-3 text-white text-s">
                  tfdl ma3e
                </p>
              </div>
            </div>

            {/* <div
              ref={textContainer2Ref}
              className={`
              -right-[8px]
              
              bg-[#535353] absolute   ${
                showFirstM
                  ? "rounded-br-full  h-4 w-4 border-black border-2 border-t-0"
                  : ""
              }  -top-5 `}
            ></div> */}
          </div>

          {/*///////////////////*/}
          {/* end of dino */}
          {/*///////////////////*/}

          {/*///////////////////*/}
          {/* Cactus */}
          {/*///////////////////*/}
          <div
            ref={cactusRef}
            className={` bg-black w-[40px] h-[43px] mb-2 self-end bg-cactus bg-contain bg-transparent absolute right-0 bg-no-repeat z-[1] 
              ${hideHUD ? "hidden" : ""}
              `}
          ></div>

          <div
            ref={cactus2Ref}
            className={` bg-black w-[49px] h-[33px] mb-2 self-end bg-tripleCactus bg-contain bg-transparent absolute -right-[200px] bg-no-repeat z-[1]
               ${hideHUD ? "hidden" : ""}
              `}
          ></div>

          {/*///////////////////*/}
          {/* End of cactus */}
          {/*///////////////////*/}

          {/*///////////////////*/}
          {/*  LAnds */}
          {/*///////////////////*/}
          <div
            ref={landRef}
            className={`
           ${hideHUD ? "hidden" : ""}
          absolute bottom-0 flex w-full h-[29px]`}
          >
            <div className="bg-land1 bg-repeat-x bg-contain w-[1500px] h-[29px]"></div>
            <div className="bg-land2 bg-repeat-x bg-contain w-[1500px] h-[29px]"></div>
            <div className="bg-land3 bg-repeat-x bg-contain w-[1500px] h-[29px]"></div>
          </div>
          <div
            ref={land2Ref}
            className={` -right-[100%] absolute bottom-0 flex w-full h-[29px]
               ${hideHUD ? "hidden" : ""}
              `}
          >
            <div className="bg-land1 bg-repeat-x bg-contain w-[1500px] h-[29px]"></div>
            <div className="bg-land2 bg-repeat-x bg-contain w-[1500px] h-[29px]"></div>
            <div className="bg-land3 bg-repeat-x bg-contain w-[1500px] h-[29px]"></div>
          </div>

          {/*///////////////////*/}
          {/* End of Lands */}
          {/*///////////////////*/}
        </div>

        {/* //////////////////////////////////////////////////////////////////////////////////////// */}
        {/* Scroll caution after the conv ends it will start to jump until the user scroll down  */}
        {/* //////////////////////////////////////////////////////////////////////////////////////// */}

        <div
          className="absolute bottom-0 flex justify-center flex-col items-center center w-[52px] h-[52px] mb-10"
          ref={scrollArrowRef}
        >
          {showThirdM && (
            <>
              <p className="mb-2 text-xl text-gray-500">Scroll Down</p>
              <img src={scroll} alt="" />
            </>
          )}
        </div>


      </div >
       
       <div 
       className={`bg-red-400 h-[100vh]
        ${allowScroll ? '' : 'hidden'}
       `}
       ref={scrollDownRef}
       >
        <Navbar />
      </div> 
    </div>
  );
};

export default DinoGame;
