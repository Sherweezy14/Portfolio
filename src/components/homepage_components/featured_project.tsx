import SectionCard from "../SectionCard";
import { ArrowRight } from "lucide-react";
import tourney_ss from "../../assets/allfours_ss.png";
export default function Featured() {
  return (
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
              scheduling, score tracking, team management, and live standings
              for competitive events.
            </p>
            <p className="text-center md:text-left text-sm md:text-xs tracking-widest font-bold text-red-500">
              React - TypeScript - Supabase - PostgresSQL
            </p>
            <a
              href="https://tournament-manager-chi-taupe.vercel.app/"
              target="new"
            >
              <p className=" hidden text-sm md:flex items-center gap-1 text-amber-500">
                View Site <ArrowRight size={16} />
              </p>
            </a>
          </div>
          <div className=" flex md:w-[400px] flex-col md:flex-row items-center rounded-md  md:pl-4">
            <a
              href="https://tournament-manager-chi-taupe.vercel.app/"
              target="new"
            >
              <img src={tourney_ss} className="my-2 rounded-md " alt="" />
              <p className=" text-sm flex md:hidden items-center gap-1 text-amber-500">
                View Site <ArrowRight size={16} />
              </p>
            </a>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
