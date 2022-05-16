import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">I love Matsumoto.</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          CUSTOM LABO
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          自己紹介文
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          nihil, blanditiis saepe et in ab accusantium fuga eaque, fugiat
          consequatur laboriosam officiis iure, velit id eveniet quas aliquam
          obcaecati rerum.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items:center hover:bg-pink-600 hover:border-pink-600">
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
