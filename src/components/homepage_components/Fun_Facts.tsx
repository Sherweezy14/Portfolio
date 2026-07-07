import SectionCard from "../SectionCard";
import { Dog, Dumbbell, GraduationCap, Brain, Volleyball } from "lucide-react";
export default function FunFacts() {
  return (
    <div className="bg-red-500 rounded-md col-span-1 md:col-span-6 lg:col-span-12">
      <SectionCard>
        <div className=" px-0.5 py-4 md:p-4 flex flex-col">
          <p className="mb-2 ml-2 md:ml-0 tracking-tighter font-bold">
            FUN FACTS ABOUT ME
          </p>
          <div className="flex justify-between md:justify-center  items-start md:items-center">
            <div className="flex flex-col w-1/5 md:w-full lg:flex-row items-center gap-3">
              <Dog
                strokeWidth={1}

                className="text-red-500 w-10 h-10  "
              />
              <div className="text-center md:text-left items-center flex flex-col">
                <p className="text-red-400">Dog Dad to 4</p>
                <p className="text-sm"> Jack Rusells </p>
              </div>
            </div>
            <div className="flex flex-col  md:justify-center w-1/5 md:w-full lg:flex-row items-center gap-3">
              <Dumbbell
                strokeWidth={1}
                className="text-yellow-500 w-10 h-10  "
              />
              <div className="text-center md:text-left  items-center flex flex-col">
                <p className="text-yellow-200">I Lift Heavy Things</p>
                <p className="text-sm"> Bench 1RM 405lbs </p>
              </div>
            </div>
            <div className="flex flex-col md:justify-center w-1/5 md:w-full lg:flex-row items-center gap-3">
              <GraduationCap
                strokeWidth={1}
                className="text-blue-500 w-10 h-10  "
              />
              <div className="text-center md:text-left items-center flex flex-col">
                <p className="text-blue-400">Mentor</p>
                <p className="text-sm"> College Prep </p>
              </div>
            </div>
            <div className="flex flex-col md:justify-center w-1/5 md:w-full lg:flex-row items-center gap-3">
              <Volleyball
                strokeWidth={1}
                className="text-orange-500 w-10 h-10  "
              />
              <div className="text-center md:text-left items-center flex flex-col">
                <p className="text-orange-400  md:flex md:gap-1">
                  <span className="hidden md:block"> Basketball</span>{" "}
                  <span className="md:hidden"> BBall</span>{" "}
                  <span className="block"> Legend</span>
                </p>
                <p className="text-sm"> Scored 47pts on JV </p>
              </div>
            </div>
            <div className="flex flex-col w-1/5 md:w-full lg:flex-row md:justify-center items-center gap-3">
              <Brain
                strokeWidth={1}

                className="text-green-500 w-10 h-10  "
              />
              <div className="text-center md:text-left items-center flex flex-col">
                <p className="text-green-400">Always Learning</p>
                <p className="text-sm"> PyTorch Next </p>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
