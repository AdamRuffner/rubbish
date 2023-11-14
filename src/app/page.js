import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import dumpster from "public/dumpster.jpg";

export default function Home() {
  return (
    <main>
      <section>
        <header className="bg-white">
          <div className="flex justify-center mt-7 pt-7 text-sm">
            <p>Open Mon - Sun | 8am - 8pm</p>
          </div>
          <div className="text-center bg-white m-3 p-4">
            <h2 className="p-3 text-3xl">Bucks Rubbish</h2>
            <a href="tel:7656069506">
              <p className="bg-blue-900 text-white rounded-xl p-3 mb-7 text-xs ">
                CALL NOW
              </p>
            </a>
          </div>
        </header>
      </section>
      <section>
        <div className=" lg:gap-6 p-8">
          <div className=" text-center p-10 my-10 shadow-2xl shadow-blue-500/50 rounded-xl sm:grid md:flex">
            <div className="">
              <h3 className="text-2xl text-blue-900 pb-8">About Us</h3>
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
          <div className="text-center p-10 my-10 shadow-2xl shadow-blue-500/50 rounded-xl">
            <h3 className="text-2xl text-blue-900 pb-8">Services</h3>
            <div className="gap-6 lg:grid grid-cols-2 p-10">
              <div className="shadow-2xl rounded-xl shadow-blue-500/50 w-100 p-10 mb-10">
                <h4 className="text-2xl">6 yards</h4>
                <p>use thus</p>
                <p>do tht</p>
              </div>
              <div className="shadow-2xl rounded-xl shadow-blue-500/50 w-100 p-10 mb-10">
                <h4 className="text-2xl">10 yards</h4>
                <p>use thus</p>
                <p>do tht</p>
              </div>
              <div className="shadow-2xl rounded-xl shadow-blue-500/50 w-100 p-10 mb-10">
                <h4 className="text-2xl">20 yards</h4>
                <p>use thus</p>
                <p>do tht</p>
              </div>
              <div className="shadow-2xl rounded-xl shadow-blue-500/50 w-100 p-10 mb-10">
                <h4 className="text-2xl">30 yards</h4>
                <p>use thus</p>
                <p>do tht</p>
              </div>
            </div>
          </div>
          <div className="text-center p-10 my-10 shadow-2xl shadow-blue-500/50 rounded-xl">
            <h3 className="text-2xl text-blue-900 pb-8">Something</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
              doloribus dolor blanditiis eum possimus adipisci officia ea quia
              reprehenderit rem odit quibusdam quos, praesentium accusantium
              earum nihil? Veniam, corrupti sunt.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center m-10">
          <div className="bg-black text-white p-8 m-8 rounded-xl">
            <a href="tel:7656069506">
              <div className="flex justify-center text-2xl pb-3">
                <BsTelephone />
              </div>
              <p className="text-2xl">(123) 123 123</p>
            </a>
          </div>
          <div className="bg-blue-900 text-white p-10 m-10 rounded-xl">
            <div className="flex justify-center text-2xl pb-3">
              <a href="mailto:bucksrubbish@gmail.com">
                <div className="flex justify-center text-3xl pb-3">
                  <AiOutlineMail />
                </div>
                <p className="text-2xl">bucksrubbish@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
