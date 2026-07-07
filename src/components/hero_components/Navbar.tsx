import logo1 from "../../assets/sc-navbar-comic-logo (1).svg";
import { Menu, Zap } from "lucide-react";

import { Link } from "react-router-dom";

export default function Navbar() {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/",
    },
    {
      name: "Projects",
      path: "/",
    },
    {
      name: "Skills",
      path: "/",
    },
    {
      name: "Education",
      path: "/",
    },
  ];

  return (
    <nav
      className="flex justify-between inset-0 z-50 absolute items-center  px-6 h-16 bg-black lg:bg-transparent md:bg-gradient-to-l
    from-black/90
    via-black/70
    to-transparent
    backdrop-blur-sm"
    >
      <img src={logo1} alt="" className=" h-12 lg:h-16" />
      <div className="hidden  gap-15 text-sm">
        {links.map((link) => (
          <Link
            className="group cursor-pointer relative text-white font-medium"
            key={link.name}
            to={link.path}
          >
            {link.name}{" "}
            <span
              className="
absolute
left-1/2
-bottom-1
h-0.5
w-0
bg-yellow-400
transition-all
duration-300
group-hover:w-full
group-hover:left-0
"
            />
          </Link>
        ))}
      </div>
      <a href="mailto:sherwyn@unityeventhall.com?subject=Let's%20Work%20Together&body=Hi%20Sherwyn,%0A%0AI'd%20like%20to%20discuss...">
        <button
          className="
    flex group
    items-center gap-2

    px-5 py-1

    bg-[#FFC928]

    text-black
    font-space
    font-bold
    tracking-wide

    border-[3px]
    border-black

    rounded-md

    shadow-[5px_5px_0px_#000]

    hover:-translate-x-[2px]
    hover:-translate-y-[2px]
    hover:shadow-[7px_7px_0px_#000]

    active:translate-x-[2px]
    active:translate-y-[2px]
    active:shadow-[2px_2px_0px_#000]

    transition-all
    duration-150
  "
        >
          Let's Connect
          <Zap
            size={16}
            className="
    transition-all
    duration-200
    group-hover:rotate-12
    group-hover:scale-110
"
            strokeWidth={2.5}
          />
        </button>
      </a>
      <Menu size={28} className="hidden lg:hidden" strokeWidth={2} />
    </nav>
  );
}
