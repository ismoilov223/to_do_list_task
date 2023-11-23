import React from "react";

const HeroBg = () => {
  return (
    <div className="hero-bg-cont top-0 w-full z-0">
      <div className="hero-mask">
        <div className="hero-bg bg-cover bg-center bg-[url('/png/mobile-bg.png')] md:bg-[url('/png/desktob-bg.png')] w-full h-[200px]"></div>
      </div>
    </div>
  );
};

export default HeroBg;
