import React from "react";
import { Covered_By_Your_Grace } from "next/font/google";

const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: "400",
});

function Hero() {
  return (
    <div
      className="hero h-[calc(100vh-174px)] aspect-[64/27] mt-16"
      style={{
        backgroundImage: "url(/home-hero.png)",
      }}
    >
      <div className="hero-content text-neutral-content max-w-7xl w-full h-full justify-start gap-10">
        <div className="max-w-md flex-col gap-4">
          <div className="uppercase font-medium">Welcome to agrios farming</div>
          <div
            className={`${coveredByYourGrace.className} text-4xl xl:text-8xl`}
          >
            <div>
              Agriculture <span className="text-amber-500">&</span> Eco Farming
            </div>
          </div>
          <div className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus,luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </div>
          <button className="btn bg-green-600 text-white border-none mt-2">
            <small>Discover More</small>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
