"use client";
import React from "react";
import { ContainerScroll } from "../app/ui/tab";
import Image from "next/image";

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-3xl font-semibold text-black ">
              Unleash the features of Harmony with<br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none
              bg-gradient-to-r from-green-600 to-emerald-500 text-transparent bg-clip-text">
                Shopify Brand
              </span>
            </h1>
          </>
        }
      >
        <img
          src="https://www.igexsolutions.com/wp-content/uploads/2022/08/Shopify.png"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

