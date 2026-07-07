import SectionCard from "../SectionCard";
import { BriefcaseBusiness, ArrowRight } from "lucide-react";
export default function WorkHighlight() {
  return (
    <div className="bg-red-500 rounded-md col-span-1 md:col-span-3 lg:col-span-5">
      <SectionCard>
        <div className="bg-red-500 opacity-30 p-6 right-4 absolute top-6 rounded-full p-3"></div>
        <BriefcaseBusiness
          size={60}
          strokeWidth={1}
          className="text-red-500 absolute right-[10px] p-3 top-[18px]"
        />

        <div className="p-4 flex flex-col text-sm gap-1">
          <p className="font-bold text-xl">EXPERIENCE HIGHLIGHTS</p>
          <p className="text-blue-700 text-xl">Unity Sports Club</p>
          <p className=" text-base"> Web Developer & Event Manager</p>
          <p className="mt-1">
            Built digital prescence, manage events, and drive
          </p>
          <p className="mb-1 -mt-1">revenue through technology and marketing</p>
          <p className=" hidden flex text-base items-center tracking-wide gap-1 text-blue-700">
            View Full Experience <ArrowRight size={16} />
          </p>
        </div>
      </SectionCard>
    </div>
  );
}
