import Image from "next/image";
import { ImageBlock } from "./ImageBlock";
import { Navbar } from "./Navbar";

export const Homepage = () => {
  return (
    <>
      <div className="[height:100svh] [max-height:100svh] w-full  px-2 pt-4 bg-yellow_green-700 overflow-scroll snap-y ">
        <div className="hidden md:block mb-4 ">{/* <Navbar /> */}</div>
        <div className="hidden md:block fixed z-10 top-0 left-0 right-0  px-2 pt-4 bg-yellow_green-700 ">
          {/* <Navbar /> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 mt-4">
            <div className="p-4  rounded-md h-full text-4xl inline-block font-bold">
              Welcome to Vikram&rsquo;s
              <br />
              <br />
              <span className="text-6xl text-lime-700 font-bold">
                Photography &
                <br />
                Videography
              </span>
              <div className="text-base mt-4 text-right italic">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content.
              </div>
            </div>
          </div>
          <div className="hidden order-3 lg:order-2 lg:block">
            <div className="flex justify-center items-center h-full">
              <div className="text-right font-bold ">
                lory ipsum is something important.
                <br />
                <div className="text-right">Something More Important.</div>
              </div>
            </div>
          </div>
          <div className="order-2 lg:order-3">
            <div className="flex justify-center">
              <div className="rounded-md overflow-hidden">
                <video autoPlay muted loop style={{ width: 400 }}>
                  <source src="/3.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* second section */}
      </div>
    </>
  );
};
