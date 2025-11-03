import { IconType } from "react-icons";
import { FaHtml5, FaMobileAlt, FaShopify, FaWordpress } from "react-icons/fa";
import data from "./packages.json";
import { FiMonitor } from "react-icons/fi";
import { PiMonitorBold } from "react-icons/pi";

export type PackageItem = {
  name: string;
  price: number;
  features: string[];
};

export type PackageGroup = {
  type: string;
  label: string;
  description: string | null;
  icon: IconType;
  packages: PackageItem[];
};

const iconMap: Record<string, IconType> = {
  FaShopify,
  FaWordpress,
  FaHtml5,
  FiMonitor,
  FaMobileAlt,
  PiMonitorBold
};

const packages: PackageGroup[] = data.map((item) => ({
  ...item,
  icon: iconMap[item.icon] || FaHtml5
}));

export default packages;
