export default function SectionCard({ children }) {
  return (
    <div
      className="
group
relative
rounded-md
p-[1px]
bg-gradient-to-br
from-violet-500/40
via-blue-500/20
to-cyan-400/40
shadow-[0_0_25px_rgba(124,58,237,0.15)]
h-full
transition-all
duration-300
hover:shadow-[0_0_40px_rgba(124,58,237,0.30)]
"
    >
      <div
        className="
  relative
  rounded-md
  bg-gradient-to-b
  from-[#0b0b14]
  to-[#000000]
  h-full
  overflow-hidden
"
      >
        {/* Top highlight */}

        {/* Light reflection */}
        <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-transparent pointer-events-none" />

        {/* Content */}
        {children}
        <div className="relative z-10"></div>
      </div>
    </div>
  );
}
