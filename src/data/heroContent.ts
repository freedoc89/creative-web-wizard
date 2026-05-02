import data from "./heroContent.json";
import { GoLightBulb } from "react-icons/go";
import { IoPhonePortraitOutline, IoAnalytics } from "react-icons/io5";
import { IconType } from "react-icons";
import { LocalizedList, LocalizedString } from "./localization";

const iconMap: Record<string, IconType> = {
  GoLightBulb,
  IoPhonePortraitOutline,
  IoAnalytics
};

export type HeroContent = {
  title: LocalizedString;
  subtitle: LocalizedString;
  bullets: LocalizedList;
  cta: LocalizedString;
  bottomBar: {
    id: string;
    icon: IconType;
    text: LocalizedString;
  }[];
};

const heroContent: HeroContent = {
  title: data.hero.title,
  subtitle: data.hero.subtitle,
  bullets: data.hero.bullets,
  cta: data.hero.cta,
  bottomBar: data.hero.bottomBar.map((item) => ({
    ...item,
    id: item.id,
    icon: iconMap[item.icon],
    text: item.text
  }))
};

export default heroContent;
