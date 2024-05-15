
"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../app/ui/wobblecard";




export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Tackles Carbon Footprint
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          Directly addresses climate change by motivating individuals and businesses to reduce carbon emissions through renewable energy adoption.
          </p>
        </div>
        <img
          src="https://st.depositphotos.com/1026550/4373/i/450/depositphotos_43735653-stock-photo-fighting.jpg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute  lg:-right-[20%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Green Energy Token Marketplace
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Enables the buying and selling of Tokens that represent renewable energy generation, fostering a transparent and active market.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Gensensor technology powers the entire process
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Tracks and converts renewable energy production into digital tokens, incentivizing green energy generation.
          </p>
        </div>
        <img
          src="https://news.mit.edu/sites/default/files/images/202401/MIT-Harvesting-Sensors-01-PRESS.jpg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[20%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
