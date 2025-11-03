import { IconType } from "react-icons";
import data from "./services.json";
import { FaShopify, FaWordpress, FaHtml5, FaMobileAlt } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";

export type ServicesItem = {
  type: string;
  label: string;
  icon: IconType;
  description: string;
};

const iconMap: Record<string, IconType> = {
  FaShopify,
  FaWordpress,
  FaHtml5,
  FiMonitor,
  FaMobileAlt
};

const services: ServicesItem[] = data.map((item) => ({
  ...item,
  icon: iconMap[item.icon] || FaHtml5
}));

export default services;
