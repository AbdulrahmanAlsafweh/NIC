
export default function TopFooter(){
    return (
      <div className="flex bg-black cursor-default  relative justify-between px-14 py-14 group md:mt-14">
        <img
          src="Assets/Images/WhiteLogo.png"
          className="absolute w-[300px] opacity-40 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]
    transition-transform duration-300 group-hover:scale-110"
          alt=""
        />

        <div className="flex flex-row items-center md:gap-7">
          <img src="Assets/Images/price.png" className="md:w-14" />
          <p className="text-center font-Secondary text-white text-lg font-bold">
            Best <br /> Prices
          </p>
        </div>

        <div className="flex flex-row items-center md:gap-7">
          <img src="Assets/Images/rocket.png" className="md:w-14" />
          <p className="text-center font-Secondary text-white text-lg font-bold">
            Fastest <br /> Services
          </p>
        </div>

        <div className="flex flex-row items-center md:gap-7">
          <img src="Assets/Images/headset.png" className="md:w-14" />
          <p className="text-center font-Secondary text-white text-lg font-bold">
            Outstanding <br /> Support
          </p>
        </div>
      </div>
    );
}