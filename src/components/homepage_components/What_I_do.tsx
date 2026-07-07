import SectionCard from "../SectionCard";
import {
  Laptop,
  ChevronRight,
  PanelsTopLeft,
  CircleGauge,
  ArrowDownUp,
} from "lucide-react";
export default function WhatIDo() {
  return (
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
              <p>UI/UX Implementation</p>
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
  );
}
