import { BiHomeCircle } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { RiFileList2Line } from "react-icons/ri";
import { BsBookmark } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";

export const sidebarElement = [
  {
    name: "Home",
    route: "/",
    icon: BiHomeCircle,
  },
  {
    name: "Explore",
    route: "/explore",
    icon: BsSearch,
  },
  {
    name: "Notifications",
    route: "/notifications",
    icon: IoNotificationsOutline,
  },
  {
    name: "Messages",
    route: "/messages",
    icon: AiOutlineMail,
  },
  {
    name: "Lists",
    route: "/lists",
    icon: RiFileList2Line,
  },
  {
    name: "Bookmarks",
    route: "/bookmarks",
    icon: BsBookmark,
  },
  {
    name: "Communities",
    route: "/communities",
    icon: BsPeople,
  },
  {
    name: "Varified",
    route: "/varified",
    // icon: CgProfile,
  },

  {
    name: "Profile",
    route: "/profile",
    icon: CgProfile,
  },
  {
    name: "More",
    route: "/more",
    icon: CiCircleMore,
  },
];
