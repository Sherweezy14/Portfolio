import logo1 from "../../assets/sc-navbar-comic-logo (1).svg";
import { Menu } from "lucide-react";

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
      <div className="hidden lg:flex gap-15 text-sm">
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
      <button className="hidden lg:block bg-yellow-500 shadow-2xl shadow-amber-200 cursor-pointer rounded-sm text-[.6rem]  text-black font-bold tracking-wide text-center px-2 py-1">
        Let's Connect
      </button>
      <Menu size={28} className="md:hidden" strokeWidth={2} />
      <div className="hidden lg:block"></div>
    </nav>
  );
}
