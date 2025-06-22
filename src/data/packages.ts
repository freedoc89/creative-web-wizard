import data from "./packages.json";

export type PackageItem = {
  name: string;
  price: number;
  features: string[];
};

export type PackageGroup = {
  type: string;
  label: string;
  icon: string;
  packages: PackageItem[];
};

const packages: PackageGroup[] = data;

export default packages;
