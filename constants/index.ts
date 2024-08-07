import { Heart } from "lucide-react";
import { FaGitlab, FaList } from "react-icons/fa";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { HiMiniCodeBracket } from "react-icons/hi2";

export const features = [
  {
    id: 1,
    name: "Customized UI Design",
    icon: FaList,
    description:
      "Tailor each component to fit your specific needs and style. Easily browse, search, and access your saved components whenever you need them",
  },
  {
    id: 2,
    name: "Reusable Components",
    icon: HiMiniCodeBracket,
    description:
      "Create and edit your React components directly within our intuitive editor. Write JSX code with syntax highlighting and instant previews.",
  },
  {
    id: 3,
    name: "Version Control & History",
    icon: FaGitlab,
    description:
      "Track changes and maintain different versions of your components. Revert to previous versions if needed and keep a history of modifications.",
  },
];

export const Links = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: FaList,
    isSelected: true,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: HiOutlineViewGridAdd,
    isSelected: false,
  },
  {
    name: "Favourites",
    path: "/favourites",
    icon: Heart,
    isSelected: false,
  },
];
