import sherwynImg from "../../assets/sherwyn.png";
import SectionCard from "../SectionCard";
import bubble from "../../assets/comic-speech-bubble.svg";
import Github from "../../assets/Copilot_Icon_White.svg";
import heroLogo from "../../assets/hero_img.png";
import linkedin from "../../assets/linkedin-svgrepo-com.svg";
import blast from "../../assets/comic-blast-burst.svg";
import clouds from "../../assets/neon-comic-clouds.svg";
import ractionLines from "../../assets/comic-radial-speed-lines-overlay.svg";
import lactionLines from "../../assets/left-speed-lines.svg";

import { ArrowRight, Download, Mail } from "lucide-react";

export default function HeroContent() {
  return (
    <div
      id="content"
      className=" absolute inset-0 flex flex-col md:flex-row z-40 justify-between"
    >
      <img
        src={lactionLines}
        className="-z-10 absolute md:-left-12 md:-top-16 top-0 hidden md:block opacity-60  md:h-120 "
        alt=""
      />
      <img
        src={ractionLines}
        className="-z-10 absolute   hidden md:block opacity-60 h-120 "
        alt=""
      />
      <img
        src={clouds}
        className="-z-10 absolute -bottom-10 -right-35 md:-right-10 -rotate-3 w-100 h-auto"
        alt=""
      />
      <img
        src={clouds}
        className="-z-10 absolute -bottom-15 -right-20 -rotate-6 w-100 h-auto"
        alt=""
      />
      <img
        src={clouds}
        className="-z-10 absolute -bottom-20 -right-20 -rotate-3 w-80 h-auto"
        alt=""
      />
      <img
        src={blast}
        className="-z-10 absolute   top-30  md:top-8 md:right-[5.5rem] right-2 w-[25rem] md:w-[45rem] h-auto"
        alt=""
      />
      <div
        id="content-left"
        className="flex flex-col md:justify-end  relative md:w-100 pl-0 lg:pl-10 pt-15 lg:pt-20 lg:px-0"
      >
        <img
          src={heroLogo}
          className="h-auto w-64 lg:w-96 lg:absolute  lg:top-12"
          alt=""
        />

        <div className=" font-inner top-68 px-1 lg:pl-12 text-base tracking-wide">
          <p className="hidden lg:block">
            I build scalable web applications, powerful digital experiences, and
            help businesses grow.
          </p>
          <div className="flex flex-row  items-center gap-2 mt-28 md:mt-2 md:gap-4">
            <button className="flex items-center gap-2 bg-yellow-500 p-2 my-1 rounded-md tracking-wider font-bold text-sm lg:text-xs text-black">
              View My Work <ArrowRight size={14} />
            </button>

            <SectionCard>
              <p className="m-2 flex gap-2  text-sm lg:text-xs">
                <p>Download Resume </p>
                <Download className="hidden md:block" size={14} />{" "}
              </p>
            </SectionCard>
          </div>

          <div className="flex gap-4  items-center mt-1">
            <img src={Github} className="w-8 h-auto" alt="" />
            <img src={linkedin} className="w-6 h-auto" alt="" />
            <Mail size={29} />
          </div>
        </div>
      </div>
      <div
        id="content-right"
        className="absolute top-32 right-15  -z-5 md:static flex flex-col md:flex-row items-end"
      >
        <div id="sherwyn-image" className="">
          <img src={sherwynImg} className=" h-100 lg:z-20" alt="" />
        </div>
        <div
          id="sherwyn-image-buttons"
          className="flex flex-col h-full justify-between pr-6 pt-20 pb-12"
        >
          <div className=" hidden md:block text-center md:relative">
            <img src={bubble} alt="" className="w-52 h-auto " />
            <p className="absolute  font-space inset-0 md:inset-7 z-10 text-black">
              <span className="text-5xl  tracking-tight font-space text-purple-950 font-bold">
                8 +
              </span>
              <br />
              <p className=" absolute inset-10  font-inter -rotate-2">
                yrs of experience
              </p>
            </p>
          </div>
          <div className="absolute top-20 -right-14 w-30  md:static">
            <SectionCard>
              <div className="flex gap-3 m-2 items-center text-xs">
                <p className="bg-green-500 p-1 rounded-full"></p>
                <p className="font-space">Available for opportunities</p>
              </div>
            </SectionCard>
          </div>
        </div>
      </div>
    </div>
  );
}
