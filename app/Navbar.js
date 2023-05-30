"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaHamburger, FaSearch } from "react-icons/fa";
import { GiCrossedBones } from "react-icons/gi";

export default function Navbar() {
  const [showMenuItem, setMenuItem] = useState(false);
  return (
    <div className="w-full bg-gray-900 ">
      <nav class="mx-auto container sm:flex-row sm:flex sm:items-center sm:justify-between ">
        <div class="flex justify-between items-center max-w-screen-xl px-4 md:px-6 py-2.5 sm:w-3/4">
          {/* Icon */}
          <Link href="http://localhost:3000" class="flex items-center">
            <Image
              src={"https://flowbite.com/docs/images/logo.svg"}
              alt="Logo"
              width={40}
              height={20}
              className="mr-2"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap text-white">
              MCSONG
            </span>
          </Link>

          {/* Contoh Penulisan : <button className={`hamburger ${isOpen ? 'is-active' : ''}`} onClick={handleClick}> */}
          <div
            class={`${
              showMenuItem ? "items-center " : "items-center hidden sm:flex"
            }`}
          >
            <Link
              href="/judul/renshi"
              class="mr-6 text-lg font-medium text-gray-500 dark:text-white hover:scale-125 transition"
            >
              人是
            </Link>
            <Link
              href="/judul/zi"
              class="text-lg font-medium text-blue-600 dark:text-blue-500 hover:scale-125 transition"
            >
              紫
            </Link>
          </div>

          {showMenuItem ? (
            <>
              <div className="flex flex-row items-center sm:hidden">
                <button
                  className="sm:hidden"
                  onClick={() => {
                    setMenuItem(!showMenuItem);
                  }}
                >
                  <GiCrossedBones size={25} color="white" className="ml-3" />
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-row items-center sm:hidden">
                <button
                  className="sm:hidden"
                  onClick={() => {
                    setMenuItem(!showMenuItem);
                  }}
                >
                  <FaHamburger size={25} color="white" className="ml-3" />
                </button>
              </div>
            </>
          )}
        </div>

        <div className="sm:w-64 lg:w-80 py-3 px-4 ">
          <div className="flex flex-row items-center relative">
            <input
              className="h-9 pl-10 pr-2 text-sm text-white border-2 border-gray-300 rounded-lg bg-transparent absolute right-0 left-0"
              placeholder="Judul lagu..."
            />
            <button className="z-10">
              <FaSearch size={25} color="white" className="ml-2" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
