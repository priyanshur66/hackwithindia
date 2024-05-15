"use client";
import Link from "next/link";
import { ethers } from "ethers";

import { connectWithMetamask } from "../utils";
import { useState, useEffect } from "react";
export default function Nabvar() {
  const [userAddress, setUserAddress] = useState("Connect ");
  useEffect(() => {
    const fetchData = async () => {
      const address = await connectWithMetamask();
      const truncatedAddress = address.slice(0, 6);
      setUserAddress(truncatedAddress);
    };

    fetchData();
  }, []);
  return (
    <div className="">
      <nav className=" border-gray-200 bg-slate-500 m-3  rounded-lg backdrop-blur-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link legacyBehavior href="/landing">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
             
              <span className="self-center text-3xl font-bold whitespace-nowrap text-black">
                Harmony
              </span>
            </a>
          </Link>

          <div className="flex md:order-2 space-x-3 ">
            <button
              onClick={() => {
                connectWithMetamask();
              }}
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-800 focus:outline-none font-bold rounded-lg text-md px-8 py-2 text-center "
            >
              {userAddress ? "connected" : "connect wallet"}
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-sans font-semibold text-2xl md:p-1 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-slate-500  ">
              <Link legacyBehavior href="/sensor">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 mx-5 text-white hover:text-black rounded  "
                    aria-current="page"
                  >
                    <mark className="px-3 rounded-full tracking-tight bg-green-300 hover:bg-green-400">
                      Add Sensor
                    </mark>
                  </a>
                </li>
              </Link>

              <Link legacyBehavior href="/sale">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 mx-5 text-white hover:text-black rounded tracking-tight "
                  >
                    Sale
                  </a>
                </li>
              </Link>

              <Link legacyBehavior href="/buy">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 mx-5 text-white hover:text-black tracking-tight "
                  >
                    Buy
                  </a>
                </li>
              </Link>

              <Link legacyBehavior href="/promotions">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 mx-5 text-white hover:text-black tracking-tight "
                  >
                    My Rewards
                  </a>
                </li>
              </Link>
              
              <Link legacyBehavior href="/brand">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 mx-5 text-white hover:text-black tracking-tight "
                  >
                    Brand Demo
                  </a>
                </li>
              </Link>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
