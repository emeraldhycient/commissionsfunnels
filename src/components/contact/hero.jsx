import React from "react";
import wave from "../../assets/images/wave1.svg";

function Hero() {
  return (
    <div className="">
      <div
        style={{
          background: `url(https://picsum.photos/700/700/?blur=3)`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
        className="h-64 w-screen flex justify-center items-center"
      >
        <h1 className="text-4xl font-extrabold text-gray-100 backdrop-invert">
          Reach Out
        </h1>
      </div>
      <div
        style={{
          background: `url(${wave})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
        className="h-64 -mt-60 w-screen"
      ></div>
    </div>
  );
}

export default Hero;
