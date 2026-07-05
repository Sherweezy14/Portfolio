import logo from "../../assets/logo_sc.png";
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
      className="flex justify-between inset-0 z-50 absolute items-center  px-6 h-16 bg-gradient-to-l
    from-black/90
    via-black/70
    to-transparent
    backdrop-blur-sm"
    >
      <img src={logo} alt="" className="h-32" />
      <div className="flex gap-15 text-sm">
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
      <button className="bg-yellow-500 shadow-2xl shadow-amber-200 cursor-pointer rounded-sm text-[.6rem]  text-black font-bold tracking-wide text-center px-2 py-1">
        {" "}
        Let's Connect{" "}
      </button>
    </nav>
  );
}
