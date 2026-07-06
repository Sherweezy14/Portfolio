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
    <section className="mx-auto max-w-350 px-2 pb-2  ">
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-2 mt-2 px-0.5 md:px-4 md:h-60">
        <div className="bg-red-800 rounded-md  col-span-1 md:col-span-4 lg:col-span-7">
          <SectionCard>
            <div className="px-4  py-6 flex flex-col md:flex-row justify-end">
              <div className="flex font-inter  flex-grow flex-col gap-3 md:gap-1 lg:gap-3">
                <p className="text-red-500 opacity-90  font-bold  tracking-tighter text-sm">
                  FEATURED PROJECT
                </p>
                <p className="font-bold  md:text-xl lg:text-2xl tracking-wider">
                  Tournament Manager
                </p>
                <p className="text-xs leading-relaxed">
                  A modern tournament management platform that streamlines
                  scheduling, score tracking, team management, and live
                  standings for competitive events.
                </p>
                <p className="text-center md:text-left text-sm md:text-xs tracking-widest font-bold text-red-500">
                  React - TypeScript - Supabase - PostgresSQL
                </p>
                <p className=" hidden text-sm md:flex items-center gap-1 text-amber-500">
                  View Case Study <ArrowRight size={16} />
                </p>
              </div>
              <div className=" flex md:w-[400px] flex-col md:flex-row items-center rounded-md  md:pl-4">
                <img src={tourney_ss} className="my-2 rounded-md " alt="" />
                <p className=" text-sm flex md:hidden items-center gap-1 text-amber-500">
                  View Case Study <ArrowRight size={16} />
                </p>
              </div>
            </div>
          </SectionCard>
        </div>
        <div className="bg-blue-700 rounded-md  col-span-1 md:col-span-2 lg:col-span-2">
          <SectionCard>
            <img
              src={graph}
              className="w-48  absolute  right-0 md:right-0 md:top-20 "
              alt=""
            />
            <div className="flex flex-col pl-5 py-4 md:p-4">
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
        <div className=" rounded-md col-span-1 md:col-span-3 lg:col-span-3">
          <SectionCard>
            <div className="p-4 ">
              <p className="font-bold pb-2"> MY SKILLS</p>
              <div className="grid font-inter  grid-cols-3 md:grid-cols-6 lg:grid-cols-3 gap-2">
                <div className="flex flex-col items-center">
                  <img src={react} className="w-12 h-auto" alt="React" />
                  <p className="md:hidden lg:block"> React</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src={node} className="w-12 h-auto" alt="Node" />
                  <p className="md:hidden lg:block"> Node</p>
                </div>
                <div className="flex  flex-col  items-center">
                  <img src={ts} className="w-12  h-auto" alt="TypeScript" />
                  <p className="md:hidden lg:block"> TypeScript</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src={mongo} className="w-12 h-auto" alt="MongoDB" />
                  <p className="md:hidden lg:block"> MongoDB</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src={tailwind} className="w-12 h-auto" alt="TailWind" />
                  <p className="md:hidden lg:block"> TailWind</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src={post} className="w-12 h-auto" alt="PostgresSQL" />
                  <p className="md:hidden lg:block"> PostgresSQL</p>
                </div>
              </div>
              <p className="flex text-sm items-center justify-center pt-3 gap-1 text-amber-500">
                View All Skills <ArrowRight size={16} />
              </p>
            </div>
          </SectionCard>
        </div>
        <div className="bg-gray-400 rounded-md col-span-1 md:col-span-3 lg:col-span-3">
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
        <div className="bg-red-500 rounded-md col-span-1 md:col-span-3 lg:col-span-5">
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
        <div className="bg-gray-400 rounded-md col-span-1 md:col-span-3 lg:col-span-2">
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
        <div className="bg-gray-400 rounded-md col-span-1 md:col-span-6 lg:col-span-2">
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
        <div className="bg-red-500 rounded-md col-span-1 md:col-span-6 lg:col-span-12">
          <SectionCard>
            <div className=" px-0.5 py-4 md:p-4 flex flex-col">
              <p className="mb-2 ml-2 md:ml-0 tracking-tighter font-bold">
                FUN FACTS ABOUT ME
              </p>
              <div className="flex justify-between md:justify-center  items-start md:items-center">
                <div className="flex flex-col w-1/5 md:w-full md:flex-row items-center gap-3">
                  <Dog size={40} strokeWidth={1} className="text-red-500" />
                  <div className="text-center md:text-left flex flex-col">
                    <p className="text-red-400">Dog Dad to 4</p>
                    <p className="text-sm"> Jack Rusells </p>
                  </div>
                </div>
                <div className="flex flex-col  md:justify-center w-1/5 md:w-full md:flex-row items-center gap-3">
                  <Dumbbell
                    size={40}
                    strokeWidth={1}
                    className="text-yellow-500"
                  />
                  <div className="text-center md:text-left flex flex-col">
                    <p className="text-yellow-200">I Lift Heavy Things</p>
                    <p className="text-sm"> Bench 1RM 405lbs </p>
                  </div>
                </div>
                <div className="flex flex-col md:justify-center w-1/5 md:w-full md:flex-row items-center gap-3">
                  <GraduationCap
                    size={40}
                    strokeWidth={1}
                    className="text-blue-500"
                  />
                  <div className="text-center md:text-left flex flex-col">
                    <p className="text-blue-400">Mentor</p>
                    <p className="text-sm"> College Prep </p>
                  </div>
                </div>
                <div className="flex flex-col md:justify-center w-1/5 md:w-full md:flex-row items-center gap-3">
                  <Volleyball
                    size={40}
                    strokeWidth={1}
                    className="text-orange-500"
                  />
                  <div className="text-center md:text-left flex flex-col">
                    <p className="text-orange-400 md:flex md:gap-1">
                      <span className="hidden md:block"> Basketball</span>{" "}
                      <span className="md:hidden"> BBall</span>{" "}
                      <span className="block"> Legend</span>
                    </p>
                    <p className="text-sm"> Scored 47pts on JV </p>
                  </div>
                </div>
                <div className="flex flex-col w-1/5 md:w-full md:flex-row md:justify-center items-center gap-3">
                  <Brain size={40} strokeWidth={1} className="text-green-500" />
                  <div className="text-center md:text-left flex flex-col">
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
