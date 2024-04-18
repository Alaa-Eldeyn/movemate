import { StaticImageData } from "next/image";
import first from "./Furniture3.jpg";
import second from "./Moving3.jpg";
import third from "./Cleaning.jpg";
import fourth from "./Moving4.jpg";
export const images: {
  src: StaticImageData;
  title: string;
}[] = [
  { src: first, title: "first" },
  { src: second, title: "second" },
  { src: third, title: "third" },
  { src: fourth, title: "fourth" },
];
