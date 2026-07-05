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
    <div id="content" className=" absolute inset-0 flex z-40 justify-between">
      <img
        src={lactionLines}
        className="-z-10 absolute -left-12 -top-16 opacity-60 h-120 "
        alt=""
      />
      <img
        src={ractionLines}
        className="-z-10 absolute   opacity-60 h-120 "
        alt=""
      />
      <img
        src={clouds}
        className="-z-10 absolute -bottom-10 -right-10 -rotate-3 w-100 h-auto"
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
        className="-z-10 absolute top-8 right-[5.5rem] w-140 h-auto"
        alt=""
      />
      <div
        id="content-left"
        className="flex flex-col relative w-100 pl-10 pt-20 p-8"
      >
        <img src={heroLogo} className="h-auto w-96 absolute top-12" alt="" />

        <div className=" font-inner absolute top-68 pl-12 text-base tracking-wide">
          <p>
            I build scalable web applications, powerful digital experiences, and
            help businesses grow.
          </p>
          <div className="flex flex-row items-center mt-2 gap-4">
            <button className="flex items-center gap-2 bg-yellow-500 p-2 my-1 rounded-md tracking-wider font-bold text-xs text-black">
              View my Work <ArrowRight size={14} />
            </button>

            <SectionCard>
              <p className="m-2 flex gap-2 text-xs">
                <p>Download Resume </p>
                <Download size={14} />{" "}
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
      <div id="content-right" className="flex items-end">
        <div id="sherwyn-image" className="relative">
          <img src={sherwynImg} className="h-100 z-20" alt="" />
        </div>
        <div
          id="sherwyn-image-buttons"
          className="flex flex-col h-full justify-between pr-6 pt-20 pb-12"
        >
          <div className="text-center relative">
            <img src={bubble} alt="" className="w-52 h-auto " />
            <p className="absolute  font-space inset-7 z-10 text-black">
              <span className="text-5xl  tracking-tight font-space text-purple-950 font-bold">
                18 +
              </span>
              <br />
              <p className=" absolute inset-10  font-inter -rotate-2">
                yrs of experience
              </p>
            </p>
          </div>
          <div>
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
