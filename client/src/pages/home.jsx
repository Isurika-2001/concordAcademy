import React from "react";

function Home() {
  return (
    <>
      <div className="bg-gray-100 grid-rows-2 px-4 py-6 min-h-full lg:min-h-screen space-y-6 sm:space-y-0 sm:gap-4">
        <div className="h-96 col-span-4 bg-gradient-to-tr from-indigo-800 to-indigo-500 rounded-md flex items-center justify-between">
          <div className="ml-20 w-80">
            <h2 className="text-white text-4xl">
              {import.meta.env.VITE_APP_NAME}
            </h2>
            <marquee
              className="text-white mt-4 capitalize font-thin tracking-wider leading-7"
              behavior="scroll"
              direction="left"
              scrollamount="3"
            >
              {import.meta.env.VITE_APP_SLOGAN}
            </marquee>

            <a
              href="/apply-now"
              className="uppercase inline-block mt-8 text-sm bg-white py-2 px-4 rounded font-semibold transition duration-500 ease-in-out hover:bg-indigo-100 hover:text-white hover:after:bg-transparent hover:bg-gradient-to-tr from-indigo-600 to-yellow-500"
            >
              apply now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
