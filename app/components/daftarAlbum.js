import React, { useState } from "react";
import Link from "next/link";

const AlbumDropdown = () => {
  const [isOpenDroplink1, setIsOpenDroplink1] = useState(false);

  return (
    <div className="relative mr-4">
      <button
        onClick={() => setIsOpenDroplink1(!isOpenDroplink1)}
        className="py-2 flex flex-row items-center text-white rounded hover:opacity-80"
      >
        Daftar Album
        <svg
          className={`w-2.5 h-2.5 ml-2 ${
            isOpenDroplink1 ? "translate-y-[2.5px]" : "translate-y-[0.5px]"
          } text-gray-400 transition-transform duration-300`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
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
          className="absolute mt-2 w-40 bg-white rounded-lg shadow-lg h-80 overflow-y-auto no-scrollbar z-10"
        >
          <Link key={""} href={"album/周深"}>
            <div className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">
              周深
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AlbumDropdown;
