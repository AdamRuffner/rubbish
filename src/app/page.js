/* eslint-disable react/no-unescaped-entities */
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import dumpster from "public/dumpster.jpg";

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
            <a href="tel:7656069506">
              <p className=" bg-white text-main-blue rounded-xl p-3 mb-7 text-xs hover:bg-gray-400 hover:text-white font-bold ">
                CALL NOW (765)-748-1730
              </p>
            </a>
          </div>
        </header>
      </section>
      <section>
        <div className=" lg:gap-6 p-8">
          <div className=" text-center p-10 my-10 shadow-2xl shadow-gray-500 rounded-xl sm:grid md:flex">
            <div className="">
              <h3 className="text-4xl pb-8 text-main-blue font-Title">
                About Us
              </h3>
              <p className=" pb-6 md:px-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                repellat iusto animi sequi itaque. Suscipit, possimus hic labore
                provident dolores voluptatem quod sint repudiandae aspernatur
                quisquam, modi veritatis, totam dolore! Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Sequi repudiandae id
                temporibus doloremque sed perspiciatis deleniti molestiae rerum
                dolorem tempora quasi quibusdam, aspernatur tempore optio!
                Perferendis aperiam repellendus iure optio.
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
                  Dimensions: 14' Long x 7' Wide x 4' High
                </p>
                <div>
                  <Image src={dumpster} alt="dumpster" className="pb-5" />
                </div>
                <p>do tht</p>
                <p>ideal for blah</p>
                <p className="font-Title text-main-blue text-xl">
                  Starting at $250
                </p>
              </div>
              <div className="shadow-2xl rounded-xl shadow-gray-500 w-100 p-10 mb-10">
                <h4 className="text-3xl py-3 text-main-blue font-Title">
                  10 Yard Dumpster
                </h4>
                <p className="text-sm  pb-3">
                  Dimensions: 14' Long x 7' Wide x 4' High
                </p>
                <div>
                  <Image src={dumpster} alt="dumpster" className="pb-5" />
                </div>
                <p>do tht</p>
                <p>ideal for blah</p>
                <p className="font-Title text-main-blue text-xl">
                  Starting at $350
                </p>
              </div>
              <div className="shadow-2xl rounded-xl shadow-gray-500 w-100 p-10 mb-10">
                <h4 className="text-3xl py-3 text-main-blue font-Title">
                  20 Yard Dumpster
                </h4>
                <p className="text-sm pb-3">
                  Dimensions: 14' Long x 7' Wide x 4' High
                </p>
                <div>
                  <Image src={dumpster} alt="dumpster" className="pb-5" />
                </div>
                <p>do tht</p>
                <p>ideal for blah</p>
                <p className="font-Title text-main-blue text-xl">
                  Starting at $450
                </p>
              </div>
              <div className="shadow-2xl rounded-xl shadow-gray-500 w-100 p-10 mb-10">
                <h4 className="text-3xl py-3 text-main-blue font-Title">
                  30 Yard Dumpster
                </h4>
                <p className="text-sm pb-3">
                  Dimensions: 14' Long x 7' Wide x 4' High
                </p>
                <div>
                  <Image src={dumpster} alt="dumpster" className="pb-5" />
                </div>
                <p>do tht</p>
                <p>ideal for blah</p>
                <p className="font-Title text-main-blue text-xl">
                  Starting at $550
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-main-blue flex p-2 ">
        <div className="text-center grid grid-cols-2  ">
          <div className=" text-white pt-4  pl-5 rounded-xl w-full pr-10 hover:text-black">
            <a href="tel:7656069506">
              <div className=" text-3xl pb-3">
                <BsTelephone />
              </div>
            </a>
          </div>
          <div className="pt-4 rounded-xl w-1/4">
            <div className=" text-white pb-3 hover:text-black">
              <a href="mailto:bucksrubbish@gmail.com">
                <div className=" text-3xl pb-3">
                  <AiOutlineMail />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
