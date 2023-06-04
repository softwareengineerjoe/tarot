import React from "react";
import constants from "../constants";
import { UpSquareOutlined } from "@ant-design/icons";

const tarots = constants.tarots;
console.log(tarots);

export default function about() {
  return (
    <>
      <div className={mainBox} id="top">
        <h1 className="text-3xl">
          <span>A</span>
          <span>b</span>
          <span>o</span>
          <span>u</span>
          <span>t</span>
        </h1>
        {tarots.map((tarot) => (
          <div
            key={tarot.code}
            className="flex flex-col items-center justify-center gap-4"
          >
            <h3 className={title}>{tarot.title}</h3>
            <div className="w-1/2">

            <p className={description}>{tarot.description}</p>
            </div>
          </div>
        ))}
        {/* <a
          href="#top"
          className="fixed bottom-3 right-2 lg:bottom-8 lg:right-10"
        >
          <UpSquareOutlined
            style={{ fontSize: "30px", color: "#c3a38c" }}
            className="lg:hidden"
          />
          <UpSquareOutlined
            style={{ fontSize: "40px", color: "#c3a38c" }}
            className="hidden lg:block"
          />
        </a> */}
      </div>
    </>
  );
}

const title = "text-2xl text-[#c3a38c] text-center";
const subtitle = "text-lg text-[#c3a38c] text-center";
const description = "text-sm text-justify";
const mainBox =
  "flex flex-col justify-center items-center text-justify gap-6 py-8 px-12 lg:px-32 font-playfair text-gray-200 bg-[#2a3042] relative min-h-screen";
