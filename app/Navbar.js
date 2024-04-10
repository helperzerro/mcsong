"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaHamburger } from "react-icons/fa";
import { GiCrossedBones } from "react-icons/gi";
{
  /* Contoh Penulisan : <button className={`hamburger ${isOpen ? 'is-active' : ''}`} onClick={handleClick}> */
}
import lirikData from "../lirik.json";
import ArtistDropdown from "./components/dropArtist";
import Searching from "./components/searching";

export default function Navbar() {
  const [showMenuItem, setMenuItem] = useState(false);
  const [isOpenDroplink2, setIsOpenDroplink2] = useState(false);
  const [isOpenDroplink3, setIsOpenDroplink3] = useState(false);
  const lagu = lirikData;

  useEffect(() => {
    function handleScroll() {
      // Logika untuk menentukan apakah harus menampilkan atau menyembunyikan item menu
      if (window.scrollY > 0) {
        setMenuItem(false); // Menyembunyikan item menu saat halaman di-scroll
      }
    }

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-gray-900 ">
      {/* Navbar Mobile Site*/}
      <div class="mx-auto flex justify-between items-center sm:px-10 px-4 py-2.5 md:hidden sm:container sm:mx-auto">
        {/* Icon App */}
        <div>
          {/* http://mcsong.vercel.app */}
          <Link href="" class="flex items-center">
            <Image
              src={"https://flowbite.com/docs/images/logo.svg"}
              alt="Logo"
              width={40}
              height={40}
              className="mr-2"
            />
          </Link>
        </div>
        {/* Close Icon App */}

        {/* Humbeger Menu */}
        {showMenuItem ? (
          <>
            <div className="flex flex-row items-center lg:hidden">
              <button
                className="lg:hidden"
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
            <div className="flex flex-row items-center lg:hidden">
              <button
                className="lg:hidden"
                onClick={() => {
                  setMenuItem(!showMenuItem);
                }}
              >
                <FaHamburger size={25} color="white" className="ml-3" />
              </button>
            </div>
          </>
        )}
        {/* Close Humbeger Menu  */}
      </div>
      {/* Close Navbar Mobile Site */}

      {/* Humbeger icon onclick */}
      {showMenuItem && (
        <div className="fixed bg-gray-800 h-screen w-48 z-10 md:hidden right-0 flex flex-col gap-4 pl-4 pt-4">
          <Searching />

          <ArtistDropdown lirikData={lirikData} />
        </div>
      )}

      {/* Navbar Website Site */}
      <div class="mx-auto justify-between items-center lg:px-4 py-2.5 hidden md:flex  container">
        <div className="flex">
          {/* Icon App */}
          <div className="pr-5">
            <Link href="" class="flex items-center">
              <Image
                src={"https://flowbite.com/docs/images/logo.svg"}
                alt="Logo"
                width={40}
                height={40}
                className="mr-2"
              />
            </Link>
          </div>
          {/* Close Icon App */}

          {/* Dropdown Link */}
          <ArtistDropdown lirikData={lirikData} />

          <div className="relative">
            <button
              onMouseEnter={() => {
                setIsOpenDroplink2(true);
              }}
              onMouseLeave={() => {
                setIsOpenDroplink2(false);
              }}
              className="pl-5 py-2 flex flex-row items-center
             text-white rounded hover:opacity-80 line-through"
            >
              Solutions
              <svg
                className={`w-2.5 h-2.5 ml-2 ${
                  isOpenDroplink2
                    ? "translate-y-[2.5px]"
                    : "translate-y-[0.5px]"
                } text-gray-400 transition-transform duration-300`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {isOpenDroplink2 && (
              <div
                onMouseEnter={() => {
                  setIsOpenDroplink2(true);
                }}
                onMouseLeave={() => {
                  setIsOpenDroplink2(false);
                }}
                className="absolute top-8 -right-14 mt-2 w-48 bg-white rounded-lg shadow-lg"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 line-through hover:text-white"
                >
                  Option 1
                </a>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="pl-5 py-2 flex flex-row items-center
             text-white rounded hover:opacity-80 line-through"
            >
              Pricing
            </button>
          </div>
          {/* Close Dropdown Link */}
        </div>

        <Searching />
      </div>
      {/* Close Navbar Website Site */}
    </div>
  );
}
