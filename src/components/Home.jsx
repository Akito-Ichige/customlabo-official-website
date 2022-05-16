import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-orange-50">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-black">I love Matsumoto.</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-orange-400">
          CUSTOM LABO
        </h1>
        <h2 className="text-xl sm:text-xl font-bold text-black">
          ただいま準備中です・・・
        </h2>
        <p className="text-black py-4 max-w-[700px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          nihil, blanditiis saepe et in ab accusantium fuga eaque, fugiat
          consequatur laboriosam officiis iure, velit id eveniet quas aliquam
          obcaecati rerum.
        </p>
        <div>
          <button className="text-white group border-2 border-orange-100 rounded-md font-bold px-6 py-3 my-2 flex items:center bg-orange-400 hover:bg-orange-300 hover:border-orange-300">
            CUSTOM LABOについて知る{" "}
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 mt-1" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
