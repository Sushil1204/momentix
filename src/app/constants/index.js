import { GoHomeFill, GoSearch } from "react-icons/go";
import { IoIosNotifications } from "react-icons/io";
import { FaPlusSquare, FaUsers } from "react-icons/fa";
import Link from "next/link";

const userAvatar = "https://ui-avatars.com/api/?name=Sushil+Pundkar";

export const Navlinks = [
  {
    title: "Home",
    icon: <GoHomeFill size={35} />,
    href: "/",
  },
  {
    title: "Search",
    icon: <GoSearch size={35} />,
    href: "/Search",
  },
  {
    title: "Notification",
    icon: <IoIosNotifications size={35} />,
    href: "/Notifications",
  },
  {
    title: "Friends",
    icon: <FaUsers size={35} />,
    href: "/Friends",
  },
  {
    title: "Create",
    href: "/Create",
    icon: <FaPlusSquare size={35} />,
  },
];

export const MobileNavlinks = [
  {
    icon: <GoHomeFill size={30} />,
    href: "/",
  },
  {
    icon: <GoSearch size={30} />,
    href: "/Search",
  },
  {
    icon: <FaPlusSquare size={30} />,
    href: "/Create",
  },
  {
    icon: <FaUsers size={30} />,
    href: "/Friends",
  },
  {
    icon: (
      <Link href="/profile">
        <img src={userAvatar} alt="logo" className="w-10 h-10 rounded-full" />
      </Link>
    ),
  },
];
