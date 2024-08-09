import dinoProduct from "../assets/products/dino-ping.jpg";
import dinoTshirt from "../assets/products/dino-tshirt.jpg";

export default function Products() {
  return (
    <div className="h-screen">
      <div className=" mt-auto shadow-gray-400 bg-blackk  shadow-sm st w-screen h-screen pt-36 pb-36 flex flex-col">
        <div className="flex   pb-2    w-fit mx-auto  items-center  flex-col">
          <p className="font-Courier mb-5  text-center text-secondary text-[36px] ">
            Our Products
          </p>
          <p className="text-center  text-whitee w-[30%]  font-Courier text-[18px] ">
            Explore our exclusive tech-themed accessories, perfect for adding a
            touch of IT and networking flair to your style.
          </p>
        </div>

        <div className="flex   justify-around mt-16 flex-row mx-16 ">
          <div className="flex w-fit cursor-pointer   gap-3 transition-all hover:scale-105 bg-whitee delay-[25] rounded-2xl pb-10 hover:border-2 hover:border-secondary justify-between text-center items-center flex-col">
            <div className="h-[50%]">
              <img
                className="cover rounded-t-2xl"
                src={dinoProduct}
                //   height={150}
                width={450}
                alt=""
              />
            </div>
            <p className="text-black text-lg font-Courier ">Dino Pin</p>
            {/* <p className="text-gray-700  ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
                iusto!{" "}
              </p> */}
          </div>
          <div className="flex w-fit cursor-pointer h-[650px]   gap-3 transition-all hover:scale-105 bg-whitee delay-[25] rounded-2xl pb-10 hover:border-2 hover:border-secondary justify-between text-center items-center flex-col">
            <div className="h-[450px] w-full">
              <img
                className="cover rounded-t-2xl"
                src={dinoTshirt}
                //   height={150}
                width={450}
                alt=""
              />
            </div>
            <p className="text-black text-lg font-Courier ">Dino Pin</p>
            {/* <p className="text-gray-700  ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
                iusto!{" "}
              </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
