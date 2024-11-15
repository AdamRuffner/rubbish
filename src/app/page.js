/* eslint-disable react/no-unescaped-entities */
"use client";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import dumpster from "public/dumpster.jpg";
import Link from "next/link";
// import Schedule from "@/app/schedule";

export default function Home() {
  return (
    <main className="">
      <section>
        <header className="bg-main-blue">
          <div className="flex justify-center pt-7 text-sm">
            <p className="text-white">Open Mon - Sun | 8am - 8pm</p>
          </div>
          <div className="text-center m-3 p-4">
            <h2 className="p-3 text-7xl text-white font-Title">Buck Truck</h2>
            <a href="tel:7657481730">
              <p className=" bg-white text-main-blue rounded-xl p-3 mb-7 text-xs hover:bg-gray-100 hover:text-black font-bold ">
                CALL NOW (765)-748-1730
              </p>
              {/* <Link href="/schedule">
                <button className=" bg-white text-main-blue rounded-xl p-3 mb-7 text-xs hover:bg-gray-100 hover:text-black font-bold ">
                  SCHEDULE ONLINE
                </button>
              </Link> */}
            </a>
          </div>
        </header>
      </section>
      <section>
        <div className=" lg:gap-6 p-8">
          <div className=" text-center p-10 my-10 shadow-lg shadow-gray-500 rounded-xl sm:grid md:flex">
            <div className="">
              <h3 className="text-4xl pb-8 text-main-blue font-Title">
                About Us
              </h3>
              <p className=" pb-6 md:px-6 lg:pt-1">
                Buck Truck is a premier dumpster rental company that has been
                around for three generations. We have grown and evolved under
                the leadership of successive generations, each contributing
                valuable insights and innovation to the business. Our three
                generation legacy is a testament to our enduring values,
                adaptability, and the trust we've earned from our clients over
                the years. We understand the importance of efficient waste
                management for both residential and commercial projects. Our
                services ensure a seamless and hassle-free experience, with
                state of the art vehicles and a range of dumpster sizes, we
                provide solutions for projects of any scale.
              </p>
            </div>
            <div>
              <Image src={dumpster} width={2500} alt="dumpster" className="" />
            </div>
          </div>
          <div className="text-center  ">
            <h3 className="text-4xl text-main-blue pb-8 font-Title">
              Services
            </h3>
            <div className="gap-6 lg:grid grid-cols-2">
              <div className="shadow-2xl rounded-xl shadow-gray-500 w-100 p-10 mb-10">
                <h4 className="text-3xl py-3 text-main-blue font-Title">
                  6 Yard Dumpster
                </h4>
                <p className="text-sm pb-3">
                  Dimensions: 6' Long x 5' Wide x 6' High
                </p>
                <div>
                  <Image src={dumpster} alt="dumpster" className="pb-5" />
                </div>
                <p className="pb-2">Small to Medium Renovation Projects</p>
                <p className="pb-2">Office or Retail Space Cleanup</p>
                <p className="pb-2">Apartment Complex Cleanouts</p>
                <p className="font-Title text-main-blue text-xl">
                  Starting at $250
                </p>
              </div>
              <div className="shadow-2xl rounded-xl shadow-gray-500 w-100 p-10 mb-10">
                <h4 className="text-3xl py-3 text-main-blue font-Title">
                  10 Yard Dumpster
                </h4>
                <p className="text-sm  pb-3">
                  Dimensions: 14' Long x 7.5' Wide x 3.5' High
                </p>
                <div>
                  <Image src={dumpster} alt="dumpster" className="pb-5" />
                </div>
                <p className="pb-2">Landscaping Projects</p>
                <p className="pb-2">Community Events</p>
                <p className="pb-2">Home Renovation Debris</p>
                <p className="font-Title text-main-blue text-xl">
                  Starting at $350
                </p>
              </div>
              <div className="shadow-2xl rounded-xl shadow-gray-500 w-100 p-10 mb-10">
                <h4 className="text-3xl py-3 text-main-blue font-Title">
                  20 Yard Dumpster
                </h4>
                <p className="text-sm pb-3">
                  Dimensions: 22' Long x 7.5' Wide x 4.5' High
                </p>
                <div>
                  <Image src={dumpster} alt="dumpster" className="pb-5" />
                </div>
                <p className="pb-2"> Home Renovation or Remodeling</p>
                <p className="pb-2"> Large Roofing Projects</p>
                <p className="pb-2"> Home or Building Demolition</p>
                <p className="font-Title text-main-blue text-xl pb-2">
                  Starting at $450
                </p>
                <p className="text-main-blue font-Title text-lg">
                  MOST POPULAR
                </p>
              </div>
              <div className="shadow-2xl rounded-xl shadow-gray-500 w-100 p-10 mb-10">
                <h4 className="text-3xl py-3 text-main-blue font-Title">
                  30 Yard Dumpster
                </h4>
                <p className="text-sm pb-3">
                  Dimensions: 23' Long x 8' Wide x 5' High
                </p>
                <div>
                  <Image src={dumpster} alt="dumpster" className="pb-5" />
                </div>
                <p className="pb-2">Commercial Projects</p>
                <p className="pb-2">Industrial Cleanup</p>
                <p className="pb-2">School or University Cleanouts</p>
                <p className="pb-2">Junk Removal</p>
                <p className="font-Title text-main-blue text-xl">
                  Starting at $550
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-main-blue p-2">
        {/* <Link href="/schedule" className="flex justify-center pt-5">
          <button className=" bg-white text-main-blue rounded-xl p-3 mb-7 text-xs hover:bg-gray-100 hover:text-black font-bold ">
            SCHEDULE ONLINE
          </button>
        </Link> */}
        <div className="flex justify-center gap-10">
          <div className=" text-white pt-4 rounded-xl hover:text-black">
            <a href="tel:7657481730">
              <div className=" text-3xl pb-3">
                <BsTelephone />
              </div>
            </a>
          </div>
          <div className=" text-white hover:text-black">
            <a href="mailto:bucksrubbish@gmail.com">
              <div className=" pt-4 text-3xl">
                <AiOutlineMail />
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="bg-main-blue">
        <h2 className=" flex justify-center p-3 text-5xl pb-10 text-white font-Title">
          Buck Truck
        </h2>
      </section>
    </main>
  );
}
