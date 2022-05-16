import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-[60vh] bg-orange-50 text-black">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-orange-400">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Clint, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              debitis voluptate, adipisci incidunt maiores illo eum placeat
              minus laudantium numquam, corrupti quidem? Beatae hic eius
              molestiae perspiciatis ea cumque fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
