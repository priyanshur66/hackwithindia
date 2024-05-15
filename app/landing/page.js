"use client";
import Nabvar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image";
import React from "react";
import { WobbleCardDemo } from "../../components/Wobble";
import { HeroHighlightDemo } from "@/components/HeroHigh";
import { AnimatedPinDemo } from "../../components/Pin";


export default function Landing() {
    return(
        <div className="w-full items-center justify-between">
            <Nabvar />

            <div className="text-center mt-20 ">
                 <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl mt-10">
                    Get Set<mark className="bg-emerald-500 ml-3 rounded-lg px-3">Harmony</mark> .
                 </h1>
                 <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight mx-52  mt-1">
                    Empower a Sustainable Future, One Credit at a Time. Fuel the
                    Change with Green Energy Credits.
                 </h1>
            </div>
           <AnimatedPinDemo />

            
            
            <h1 className=" text-5xl font-extrabold tracking-tight lg:text-6xl mt-10 text-center">
                    Generate Revenue With Harmony .
                 </h1>
          <h1 className=" text-3xl font-extrabold font-Anta tracking-tight  mt-1 text-center">
                    Leveraging the power of Lisk 🩵.
                 </h1>
            <div className="mt-8">
            <WobbleCardDemo />
            </div>
            <HeroHighlightDemo/>
            

            

          
            <Footer />
        </div>
    )
}