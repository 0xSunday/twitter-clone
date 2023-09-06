import { BiHomeCircle } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { GrNotification } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { RiFileList2Line } from "react-icons/ri";
import { BsBookmark } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";

export const sidebarElement = [
  {
    name: "Home",
    icon: BiHomeCircle,
  },
  {
    name: "Explore",
    icon: BsSearch,
  },
  {
    name: "Notifications",
    icon: GrNotification,
  },
  {
    name: "Messages",
    icon: AiOutlineMail,
  },
  {
    name: "Lists",
    icon: RiFileList2Line,
  },
  {
    name: "Bookmarks",
    icon: BsBookmark,
  },
  {
    name: "Communities",
    icon: BsPeople,
  },
  {
    name: "Varified",
    // icon: Varified,
  },

  {
    name: "Profile",
    icon: CgProfile,
  },
  {
    name: "More",
    icon: CiCircleMore,
  },
];
