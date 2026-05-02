import { IconType } from "react-icons";
import data from "./services.json";
import { FaShopify, FaWordpress, FaHtml5, FaMobileAlt } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { LocalizedString } from "./localization";

export type Services = {
  title: LocalizedString;
  items: ServicesItem[];
};

export type ServicesItem = {
  type: string;
  label: LocalizedString;
  icon: IconType;
  description: LocalizedString;
};

const iconMap: Record<string, IconType> = {
  FaShopify,
  FaWordpress,
  FaHtml5,
  FiMonitor,
  FaMobileAlt
};

const services: Services = {
  title: data.services.title,
  items: data.services.items.map((item) => ({
    ...item,
    icon: iconMap[item.icon] || FaHtml5
  }))
};

export default services;
