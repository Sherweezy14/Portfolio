import SectionCard from "../SectionCard";
import node from "../../assets/node-js-svgrepo-com.svg";
import react from "../../assets/react-svgrepo-com.svg";
import ts from "../../assets/typescript-official-svgrepo-com.svg";
import mongo from "../../assets/mongo-svgrepo-com.svg";
import tailwind from "../../assets/tailwind-svgrepo-com.svg";
import post from "../../assets/PostgresSQL.svg";
import { ArrowRight } from "lucide-react";

export default function MySkills() {
  return (
    <div className=" rounded-md col-span-1 md:col-span-3 lg:col-span-3">
      <SectionCard>
        <div className="p-4 ">
          <p className="font-bold pb-2"> MY SKILLS</p>
          <div className="grid font-inter text-sm grid-cols-3 md:grid-cols-6 lg:grid-cols-3 gap-2">
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
          <p className="hidden flex text-sm items-center justify-center pt-3 gap-1 text-amber-500">
            View All Skills <ArrowRight size={16} />
          </p>
        </div>
      </SectionCard>
    </div>
  );
}
