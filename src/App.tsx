import Hero from "./components/Hero";
import "./App.css";
import SectionCard from "./components/SectionCard";
import {
  ArrowRight,
  Laptop,
  ChevronRight,
  PanelsTopLeft,
  CircleGauge,
  ArrowDownUp,
  BriefcaseBusiness,
  Dog,
  Dumbbell,
  Brain,
  Volleyball,
  GraduationCap,
  Users,
  Ad,
  Ticket,
  PartyPopper,
} from "lucide-react";
import tourney_ss from "./assets/allfours_ss.png";
import graph from "./assets/uptrend-graph.svg";
import node from "./assets/node-js-svgrepo-com.svg";
import react from "./assets/react-svgrepo-com.svg";
import ts from "./assets/typescript-official-svgrepo-com.svg";
import mongo from "./assets/mongo-svgrepo-com.svg";
import tailwind from "./assets/tailwind-svgrepo-com.svg";
import post from "./assets/PostgresSQL.svg";

function App() {
  return (
    <section className="mx-auto max-w-350 px-8  ">
      <Hero />
      <div className="flex gap-2 mt-2 px-4 h-60">
        <div className="bg-red-800 rounded-md w-7/12">
          <SectionCard>
            <div className="px-4  py-6 flex justify-end">
              <div className="flex font-inter flex-col w-1/2 gap-3">
                <p className="text-red-500 opacity-90  font-bold  tracking-tighter text-sm">
                  FEATURED PROJECT
                </p>
                <p className="font-bold  text-2xl tracking-wider">
                  Tournament Manager
                </p>
                <p className="text-xs">
                  A modern tournament management platform that streamlines
                  scheduling, score tracking, team management, and live
                  standings for competitive events.
                </p>
                <p className="text-xs tracking-widest text-red-500">
                  React - TypeScript - Supabase - PostgresSQL
                </p>
                <p className="flex text-sm items-center gap-1 text-amber-500">
                  View Case Study <ArrowRight size={16} />
                </p>
              </div>
              <div className=" flex items-center  rounded-md  justify-center w-1/2 pl-4">
                <img
                  src={tourney_ss}
                  className="w-56 rounded-md h-auto"
                  alt=""
                />
              </div>
            </div>
          </SectionCard>
        </div>
        <div className="bg-blue-700 rounded-md w-2/12">
          <SectionCard>
            <img src={graph} className="absolute top-20 " alt="" />
            <div className="flex flex-col p-4">
              <p className="text-5xl font-semibold text-blue-700 font-inter tracking-tighter">
                8+
              </p>
              <p className="font-inter pl-2 text-xs">
                Years of <br />
                Experience
              </p>
            </div>
          </SectionCard>
        </div>
        <div className=" rounded-md w-3/12">
          <SectionCard>
            <div className="p-4 ">
              <p className="font-bold pb-2"> MY SKILLS</p>
              <div className="grid font-inter grid-cols-3 gap-2">
                <div className="flex flex-col items-center">
                  <img src={react} className="w-12 h-auto" alt="" />
                  React
                </div>
                <div className="flex flex-col items-center">
                  <img src={node} className="w-12 h-auto" alt="" />
                  Node
                </div>
                <div className="flex flex-col items-center">
                  <img src={ts} className="w-12 h-auto" alt="" />
                  TypeScript
                </div>
                <div className="flex flex-col items-center">
                  <img src={mongo} className="w-12 h-auto" alt="" />
                  MongoDB
                </div>
                <div className="flex flex-col items-center">
                  <img src={tailwind} className="w-12 h-auto" alt="" />
                  Tailwind
                </div>
                <div className="flex flex-col items-center">
                  <img src={post} className="w-12 h-auto" alt="" />
                  PostgresSQL
                </div>
              </div>
              <p className="flex text-sm items-center justify-center pt-3 gap-1 text-amber-500">
                View All Skills <ArrowRight size={16} />
              </p>
            </div>
          </SectionCard>
        </div>
      </div>
      <div className="flex gap-2  mt-2 px-4 h-40">
        <div className="bg-gray-400 rounded-md w-3/12">
          <SectionCard>
            <div className="p-4 text-base flex flex-col">
              <p className="mb-2 text-xl tracking-tighter"> WHAT I DO</p>
              <div className="flex gap-2 items-center">
                <Laptop size={16} className="text-yellow-500" />
                <div className="flex justify-between w-full items-center">
                  <p>Full Stack Development</p>
                  <ChevronRight size={16} className="ml-2" />
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <PanelsTopLeft size={16} className="text-purple-500" />
                <div className="flex justify-between w-full items-center">
                  <p>UI/UX Implementationt</p>
                  <ChevronRight size={16} className="ml-2" />
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <CircleGauge size={16} className="text-green-500" />
                <div className="flex justify-between w-full items-center">
                  <p>Performance Optimization</p>
                  <ChevronRight size={16} className="ml-2" />
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <ArrowDownUp size={16} className="text-blue-500" />
                <div className="flex justify-between w-full items-center">
                  <p>API Design & Integration</p>
                  <ChevronRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
          </SectionCard>
        </div>
        <div className="bg-red-500 rounded-md w-5/12">
          <SectionCard>
            <div className="bg-red-500 opacity-30 p-6 right-4 absolute top-6 rounded-full p-3"></div>
            <BriefcaseBusiness
              size={60}
              strokeWidth={1}
              className="text-red-500 absolute right-[10px] p-3 top-[18px]"
            />

            <div className="p-4 flex flex-col text-xs gap-1">
              <p className="font-bold">EXPERIENCE HIGHLIGHTS</p>
              <p className="text-blue-700 text-base">Unity Sports Club</p>
              <p className=" text-sm"> Web Developer & Event Manager</p>
              <p className="mt-1">
                Built digital prescence, manage events, and drive
              </p>
              <p className="mb-1 -mt-1">
                revenue through technology and marketing
              </p>
              <p className="flex text-xs items-center tracking-wide gap-1 text-blue-700">
                View Full Experience <ArrowRight size={16} />
              </p>
            </div>
          </SectionCard>
        </div>
        <div className="bg-gray-400 rounded-md w-2/12">
          <SectionCard>
            <div className="flex flex-col p-3">
              <p className="font-boldmb-1">Education</p>
              <p className=" text-xl tracking-tighter font-inter text-yellow-500 mb-2">
                Framingham State
              </p>
              <p className="font-semibold text-sm mb-1">
                Computer Science {"(BA)"}
              </p>
              <p className="text-xs tracking-wide">
                Relevant Courses: Data Structures, Algorithms, Mobile Web Design
              </p>
            </div>
          </SectionCard>
        </div>
        <div className="bg-gray-400 rounded-md w-2/12">
          <SectionCard>
            <div className="px-4 py-2 flex flex-col gap-1 ">
              <p className="tracking-tighter mb-1">QUICK STATS</p>
              <div className="flex justify-between  items-center">
                <PartyPopper size={20} className="text-gray-500" />
                <p> 1k+</p>
                <p> Events</p>
              </div>
              <div className="flex justify-between items-center">
                <Ticket size={20} className="text-blue-500" />
                <p> 40k+</p>
                <p> Sold</p>
              </div>
              <div className="flex justify-between items-center">
                <Ad size={20} className="text-purple-500" />
                <p> 125+</p>
                <p> Created</p>
              </div>
              <div className="flex justify-between items-center">
                <Users size={20} className="text-green-500" />
                <p> 100+</p>
                <p> Clients</p>
              </div>
            </div>
          </SectionCard>
        </div>
      </div>
      <div className="flex gap-2 mt-2 px-4 h-28">
        <div className="bg-red-500 rounded-md w-full">
          <SectionCard>
            <div className="p-4 flex flex-col">
              <p className="mb-2 tracking-tighter font-bold">
                FUN FACTS ABOUT ME
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Dog size={40} strokeWidth={1} className="text-red-500" />
                  <div className="flex flex-col">
                    <p className="text-red-400">Dog Dad to 4</p>
                    <p className="text-sm"> Jack Rusells </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Dumbbell
                    size={40}
                    strokeWidth={1}
                    className="text-yellow-500"
                  />
                  <div className="flex flex-col">
                    <p className="text-yellow-200">I Lift Heavy Things</p>
                    <p className="text-sm"> Bench 1RM 405lbs </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap
                    size={40}
                    strokeWidth={1}
                    className="text-blue-500"
                  />
                  <div className="flex flex-col">
                    <p className="text-blue-400">Mentor</p>
                    <p className="text-sm"> College Prep </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Volleyball
                    size={40}
                    strokeWidth={1}
                    className="text-orange-500"
                  />
                  <div className="flex flex-col">
                    <p className="text-orange-400">Basketball Legend</p>
                    <p className="text-sm"> Scored 47pts on JV </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Brain size={40} strokeWidth={1} className="text-green-500" />
                  <div className="flex flex-col">
                    <p className="text-green-400">Always Learning</p>
                    <p className="text-sm"> PyTorch Next </p>
                  </div>
                </div>
              </div>
            </div>
          </SectionCard>
        </div>
      </div>
    </section>
  );
}

export default App;
