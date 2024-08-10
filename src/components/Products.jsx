import dinoProduct from "../assets/products/dino-ping.jpg";
import dinoTshirt from "../assets/products/dino-tshirt.jpg";
import keyChaing from "../assets/products/keychaing.webp";

export default function Products() {
  return (
    <div className="h-fit ">
      <div className=" mt-auto  bg-blackk   w-screen h-fit pt-36 pb-36 flex flex-col">
        <div className="flex   pb-2    w-fit mx-auto  items-center  flex-col">
          <p className="font-Courier mb-5  text-center text-secondary text-[36px] ">
            Our Products
          </p>
          <p className="text-center  text-whitee w-[30%]  font-Courier text-[18px] ">
            Explore our exclusive tech-themed accessories, perfect for adding a
            touch of IT and networking flair to your style.
          </p>
        </div>

        <div className="flex    mt-16  mx-16 ">
          <div className="justify-around mx-auto shadow-lg shadow-black flex flex-row w-[100%] bg-primary py-10 rounded-lg ">
            <div className=" hover:scale-105 shadow-md cursor-pointer  shadow-black transition-all delay-75 flex flex-col rounded-lg  w-[300px] h-fit bg-whitee">
              <div className="relative  h-[300px] ">
                <img
                  className="rounded-t-lg object-fill h-full w-full"
                  src={dinoProduct}
                  alt=""
                />
                <span className="absolute top-0 right-0  bg-whitee font-Courier text-black px-2 mt-5 rounded-md rounded-r-none text-lg flex items-center justify-center italic ">
                  Special
                </span>
              </div>
              <div className=" pb-5 pt-2">
                <p className="font-Courier mx-auto w-fit text-blackk text-lg ">
                  Dino T-Shirt
                </p>
                <p className="text-black  w-fit mx-auto font-Courier">4.5$</p>
              </div>
            </div>

            <div className=" hover:scale-105 cursor-pointer  transition-all shadow-md shadow-black delay-75 flex flex-col rounded-lg  w-[300px] h-fit bg-whitee">
              <div className="relative h-[300px] ">
                <img
                  className="rounded-t-lg object-fill h-full w-full"
                  src={keyChaing}
                  alt=""
                />
                <span className="absolute top-0 right-0  bg-whitee font-Courier text-black px-2 mt-5 rounded-md rounded-r-none text-lg flex items-center justify-center italic ">
                  Special
                </span>
              </div>
              <div className=" pb-5 pt-2">
                <p className="font-Courier mx-auto w-fit text-blackk text-lg ">
                  Dino T-Shirt
                </p>
                <p className="text-black  w-fit mx-auto font-Courier">3$</p>
              </div>
            </div>
            <div className=" hover:scale-105 transition-all  cursor-pointer  shadow-md shadow-black delay-75 flex flex-col rounded-lg  w-[300px] h-fit bg-whitee">
              <div className="relative  h-[300px] ">
                <img
                  className="rounded-t-lg contain-cover h-full w-full"
                  src={dinoTshirt}
                  alt=""
                />
                <span className="absolute top-0 right-0  bg-whitee font-Courier text-black px-2 mt-5 rounded-md rounded-r-none text-lg flex items-center justify-center italic ">
                  Special
                </span>
              </div>
              <div className=" pb-5 pt-2">
                <p className="font-Courier mx-auto w-fit text-blackk text-lg ">
                  Dino T-Shirt
                </p>
                <p className="text-black  w-fit mx-auto font-Courier">10$</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-white w-screen h-[250px] ">

 </div> */}
      </div>
    </div>
  );
}
