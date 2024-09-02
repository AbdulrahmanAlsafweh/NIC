import contactUs from '../assets/contact us/contact-us.jpg'

export default function ContactUs() {
    return (
      <div className="w-screen flex relative  justify-between items-center bg-whitee h-[40vh]  ">
        <p className="font-Courier text-[50px] text-center ml-16 text-blackk font-bold">
          <span className="whitespace-nowrap">Get in</span> <br />
          <span className='text-secondary bg-blackk px-2 rounded-tl-2xl rounded-br-2xl '>touch</span>
        </p>{" "}
        {/* <div className='flex h-[40vh]'>
                <div>
                    <input type="email" />
                </div>
        </div> */}
        <svg
          className="h-[40vh]    w-full"
          color="#2A222D"
          viewBox="0 0 200 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M213.19,-0.00 C152.69,69.86 270.04,69.86 202.98,149.60 L500.00,149.60 L500.00,-0.00 Z"
            fill="currentColor"
            stroke="none"
          />
        </svg>
        <div className="relative  h-[40vh]">
          <img src={contactUs} alt="" className="   z-10" />

          <div className="block absolute w-full h-full top-0  bg-black opacity-50"></div>
        </div>
        {/* <div className="bg-white w-[300px] right-[25%] top-[50%] z-10 h-[40vh] absolute shadow-xl"></div>
          <div className="bg-white w-[300px] right-[50%] top-[50%] z-10 h-[40vh] absolute shadow-xl"></div> */}
      </div>
    );
}