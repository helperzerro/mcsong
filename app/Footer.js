import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="text-center text-white bg-gray-900 pb-5 pt-1">
      <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 mb-3 mt-1">
        <Link href="" className="transition hover:scale-125 ">
          Advertise
        </Link>
        <Link href="" className="transition  hover:scale-125 ">
          Disclaimer
        </Link>
        <Link href="" className="transition hover:scale-125 ">
          Privacy
        </Link>
        <Link href="" className="transition hover:scale-125 ">
          Policy
        </Link>
        <Link href="" className="transition hover:scale-125 ">
          About Us
        </Link>
        <Link href="" className="transition hover:scale-125 ">
          Youtube
        </Link>
        <Link href="" className="transition hover:scale-125 ">
          DCSLyrics
        </Link>
      </div>

      <span className="">Copyright &#169; 2023 mcsong.vercel.app</span>
    </div>
  );
}
