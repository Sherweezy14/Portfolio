import SectionCard from "../SectionCard";
import { PartyPopper, Ticket, Ad, Users } from "lucide-react";
export default function QuickStats() {
  return (
    <div className="bg-gray-400 rounded-md col-span-1 md:col-span-6 lg:col-span-2">
      <SectionCard>
        <div className="px-1 md:px-4 py-2 flex flex-col gap-1 ">
          <p className="tracking-tighter mb-1">QUICK STATS</p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:flex lg:flex-col">
            <div className="flex  gap-2 justify-center lg:justify-start items-center">
              <PartyPopper className=" w-10 h-10  lg:w-6 lg:h-6 text-gray-500" />
              <div className="flex flex-col lg:flex-row lg:gap-2 ">
                <p> 1k+</p>
                <p> Events</p>
              </div>
            </div>
            <div className="flex  justify-center lg:justify-start gap-2 items-center">
              <Ticket className=" w-10 h-10  lg:w-6 lg:h-6 text-blue-500" />
              <div className="flex flex-col lg:flex-row lg:gap-2">
                <p> 40k+</p>
                <p> Sold</p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start gap-2 items-center">
              <Ad className=" w-10 h-10  lg:w-6 lg:h-6 text-purple-500" />
              <div className="flex flex-col lg:flex-row lg:gap-2">
                <p> 125+</p>
                <p> Made</p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start gap-2 items-center">
              <Users className=" w-10 h-10  lg:w-6 lg:h-6 text-green-500" />
              <div className="flex flex-col lg:flex-row lg:gap-2">
                <p> 100+</p>
                <p> Clients</p>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
