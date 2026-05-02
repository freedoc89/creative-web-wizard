import data from "./stacks.json";
import { IconType } from "react-icons";
import {
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaJs,
  FaShopify,
  FaWordpress,
  FaWix,
  FaApple,
  FaWindows
} from "react-icons/fa";
import {
  SiChakraui,
  SiDotnet,
  SiNextdotjs,
  SiTypescript
} from "react-icons/si";
import { TbBrandReactNative, TbBrandCSharp } from "react-icons/tb";
import { AiOutlineDotNet } from "react-icons/ai";
import { DiAndroid } from "react-icons/di";
import { LocalizedString } from "./localization";

const iconMap: Record<string, IconType> = {
  FaHtml5,
  SiChakraui,
  FaNodeJs,
  SiNextdotjs,
  FaReact,
  TbBrandReactNative,
  FaJs,
  SiTypescript,
  FaShopify,
  FaWordpress,
  FaWix,
  TbBrandCSharp,
  AiOutlineDotNet,
  DiAndroid,
  FaApple,
  FaWindows,
  SiDotnet
};

export type StackItem = {
  name: string;
  icon: IconType;
};

export type Stack = {
  title: LocalizedString;
  items: StackItem[];
};

const stacks: Stack = {
  title: data.title,
  items: data.items.map((item) => ({
    ...item,
    icon: iconMap[item.icon] || FaHtml5
  }))
};

export default stacks;
