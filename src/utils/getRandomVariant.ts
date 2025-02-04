import { VARIANTS } from "@/constants";

const getRandomVariant = () => {
  return Object.values(VARIANTS)[
    Math.floor(Math.random() * Object.values(VARIANTS).length)
  ];
}

export default getRandomVariant;