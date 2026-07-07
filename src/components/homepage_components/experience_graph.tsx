import SectionCard from "../SectionCard";
import graph from "../../assets/uptrend-graph.svg";
export default function ExpGraph() {
  return (
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
  );
}
