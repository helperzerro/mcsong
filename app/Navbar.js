"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaHamburger, FaSearch } from "react-icons/fa";
import { GiCrossedBones } from "react-icons/gi";
{
  /* Contoh Penulisan : <button className={`hamburger ${isOpen ? 'is-active' : ''}`} onClick={handleClick}> */
}
import lirikData from "../lirik.json";

export default function Navbar() {
  const router = useRouter();
  const [showMenuItem, setMenuItem] = useState(false);
  const [isOpenDroplink1, setIsOpenDroplink1] = useState(false);
  const [isOpenDroplink2, setIsOpenDroplink2] = useState(false);
  const [isOpenDroplink3, setIsOpenDroplink3] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const lagu = lirikData;

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    // console.log(inputValue.toLocaleLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/judul/${inputValue.toLocaleLowerCase()}`);
  };

  // sorting artist
  const removeDuplicates = (arr, prop) => {
    // arr, berisi array data lirik keseluruhan
    // prop, berisi nama parameternya saja ("penyanyi")
    const semuaNama = [];

    arr.forEach((item) => {
      const splitNames = item.penyanyi
        .split(/[\/&]/)
        .map((name) => name.trim()); // Memisahkan nama berdasarkan '/' atau '&' dan kemudian menghapus spasi dari setiap bagian nama
      semuaNama.push(...splitNames); // Menambahkan hasil pemisahan ke dalam array semuaNama
    });

    const namaArtist = semuaNama.filter(
      (nama, index, arr) => arr.findIndex((item) => item === nama) === index
    );

    return namaArtist;
  };

  return (
    <div className="w-full bg-gray-900 ">
      {/* Navbar Mobile Site*/}
      <div class="mx-auto flex justify-between items-center sm:px-10 px-4 py-2.5 lg:hidden ">
        {/* Sign Up Button */}
        <div>
          <button className="text-sm border px-2 py-1 rounded-md text-white">
            Sign up
          </button>
        </div>
        {/* Close Sign Up Button */}

        {/* Icon App */}
        <div>
          {/* http://mcsong.vercel.app */}
          <Link href="http://mcsong.vercel.app" class="flex items-center">
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

      {/* Navbar Website Site */}
      <div class="mx-auto justify-between items-center lg:px-4 py-2.5 hidden lg:flex bg-gray-800">
        <div className="flex">
          {/* Icon App */}
          <div>
            <Link href="http://localhost:3000/" class="flex items-center">
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
          <div className="relative">
            <button
              onMouseEnter={() => {
                setIsOpenDroplink1(true);
              }}
              onMouseLeave={() => {
                setIsOpenDroplink1(false);
              }}
              className="pl-5 py-2 flex flex-row items-center
             text-white rounded hover:opacity-80"
            >
              Artist
              <svg
                className={`w-2.5 h-2.5 ml-2 ${
                  isOpenDroplink1
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

            {isOpenDroplink1 && (
              <div
                onMouseEnter={() => {
                  setIsOpenDroplink1(true);
                }}
                onMouseLeave={() => {
                  setIsOpenDroplink1(false);
                }}
                className="absolute top-8 -right-14 mt-2 w-48 bg-white rounded-lg shadow-lg"
              >
                {removeDuplicates(Object.values(lirikData), "penyanyi").map(
                  (item, index) => (
                    <Link
                      key={index}
                      href={`${item}`}
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                    >
                      {item}
                    </Link>
                  )
                )}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onMouseEnter={() => {
                setIsOpenDroplink2(true);
              }}
              onMouseLeave={() => {
                setIsOpenDroplink2(false);
              }}
              className="pl-5 py-2 flex flex-row items-center
             text-white rounded hover:opacity-80"
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
                  className="block px-4 py-2 text-gray-800  hover:text-white"
                >
                  Option 1
                </a>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="pl-5 py-2 flex flex-row items-center
             text-white rounded hover:opacity-80"
            >
              Pricing
            </button>
          </div>
          {/* Close Dropdown Link */}
        </div>

        <div className="flex items-center justify-between ">
          {/* Searching */}
          <div className="sm:w-64 lg:w-80 py-3 pr-4 ">
            <form
              className="flex flex-row items-center relative"
              onSubmit={handleSubmit}
            >
              <input
                className="h-9 pl-10 pr-2 text-sm text-white border-2 border-gray-300 rounded-md bg-transparent absolute right-0 left-0"
                placeholder="Judul lagu..."
                onChange={handleInputChange}
                value={inputValue}
                type="text"
              />
              <button className="z-10" type="submit">
                <FaSearch size={16} color="white" className="ml-2" />
              </button>
            </form>
          </div>
          {/* Close Searching */}

          {/* Sign Up Button */}
          <div className="pr-4">
            <button className="px-2 py-1 rounded-md text-white hover:opacity-80">
              Sign in
            </button>
          </div>
          {/* Close Sign Up Button */}

          {/* Sign Up Button */}
          <div>
            <button className="border px-2 py-1 rounded-md text-white hover:opacity-80">
              Sign up
            </button>
          </div>
          {/* Close Sign Up Button */}
        </div>
      </div>
      {/* Close Navbar Website Site */}
    </div>
  );
}
