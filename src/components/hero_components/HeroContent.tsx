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

      <div
        id="content-left"
        className="flex flex-col items-center md:items-start lg:justify-end  relative md:w-100 pl-0 lg:pl-10 pt-15 lg:pt-20 lg:px-0"
      >
        <img
          src={heroLogo}
          className="h-auto w-64   md:w-80  lg:w-96 lg:absolute  lg:top-12"
          alt=""
        />

        <div className=" font-inner top-68 px-1 lg:pl-12 text-base tracking-wide">
          <p className="hidden w-70 ml-2 md:block">
            I build scalable web applications, powerful digital experiences, and
            help businesses grow.
          </p>
          <div className="flex flex-row justify-center md:justify-start items-center gap-2 lg:mt-2 md:mt-2 mt-28 md:gap-4">
            <a
              href="https://tournament-manager-chi-taupe.vercel.app/"
              target="new"
            >
              <button className="flex items-center cursor-pointer gap-2 bg-yellow-500 p-2 my-1 md:ml-1 rounded-md tracking-wider font-bold text-sm md:text-xs text-black">
                View My Work <ArrowRight size={14} />
              </button>
            </a>
            <a href="../../public/resume.pdf" download>
              <SectionCard>
                <p className="m-2 flex gap-2  text-sm lg:text-xs">
                  <p>Download Resume </p>
                  <Download className="hidden md:block" size={14} />{" "}
                </p>
              </SectionCard>
            </a>
          </div>

          <div className="flex gap-4 justify-center md:justify-start  items-center mt-1">
            <a href="https://github.com/Sherweezy14" target="new">
              <img src={Github} className="w-8 h-auto" alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/sherwyn-cooper-3193b234/"
              target="new"
            >
              <img src={linkedin} className="w-6 h-auto" alt="" />{" "}
            </a>
            <a href="mailto:sherwyn@unityeventhall.com?subject=Let's%20Work%20Together&body=Hi%20Sherwyn,%0A%0AI'd%20like%20to%20discuss...">
              <Mail size={29} />{" "}
            </a>
          </div>
        </div>
      </div>

      <div className=" absolute -z-10 -translate-x-1/2 w-[320px] md:w-[640px] md:left-3/4 left-1/2 top-30 md:top-10">
        <img
          src={blast}
          className=" absolute -z-8  w-[320px] md:w-[640px]  md:top-0 md:right-25 "
          alt=""
        />
        <img
          src={sherwynImg}
          className=" absoulute w-[320px] md:w-[400px]   -z-9"
          alt=""
        />
        <div className="absolute top-20 right-2 lg:right-[18%]  md:right-[23%] md:top-80">
          <SectionCard>
            <div className="flex gap-3 m-2 items-center text-xs">
              <p className="bg-green-500 p-1 rounded-full"></p>
              <p className="font-space">
                Available <span className="hidden md:inline-block"> for</span>
                <span className="hidden md:block"> opportunities</span>{" "}
              </p>
            </div>
          </SectionCard>
        </div>
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
      </div>
    </div>
  );
}
