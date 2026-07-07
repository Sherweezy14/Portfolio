import SectionCard from "../SectionCard";
export default function Education() {
  return (
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
  );
}
