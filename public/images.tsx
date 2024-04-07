import { StaticImageData } from "next/image";
import first from "./slide-02-1894x777.jpg";
import second from "./slide-03-1894x777.jpg";
import third from "./slide-04-1894x777.jpg";
import fourth from "./slide-05-1894x777.jpg";
export const images: {
  src: StaticImageData;
  title: string;
}[] = [
  { src: third, title: "third" },
  { src: first, title: "first" },
  { src: second, title: "second" },
  { src: fourth, title: "fourth" },
];
