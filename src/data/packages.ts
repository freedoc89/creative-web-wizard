import { IconType } from "react-icons";
import {
  FaEdit,
  FaHtml5,
  FaMobileAlt,
  FaShopify,
  FaWordpress
} from "react-icons/fa";
import data from "./packages.json";
import { FiMonitor } from "react-icons/fi";
import { PiMonitorBold } from "react-icons/pi";
import { LocalizedList, LocalizedString } from "./localization";

export type Packages = {
  title: LocalizedString;
  groups: PackageGroup[];
};

export type Plan = {
  name: LocalizedString;
  price: number;
  features: LocalizedList;
};

export type PackageGroup = {
  type: string;
  label: LocalizedString;
  description: LocalizedString | null;
  icon: IconType;
  plans: Plan[] | null;
  buttonContent: LocalizedString;
};

export const iconMap: Record<string, IconType> = {
  FaShopify,
  FaWordpress,
  FaHtml5,
  FiMonitor,
  FaMobileAlt,
  PiMonitorBold,
  FaEdit
};

const packages: Packages = {
  title: data.packages.title,
  groups: data.packages.items.map((item) => ({
    ...item,
    icon: iconMap[item.icon] || FaHtml5,
    description: item.description as LocalizedString | null,
    plans: item.plans,
    buttonContent: item.buttonContent as LocalizedString
  }))
};

export default packages;
