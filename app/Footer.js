import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="p-4 md:px-10 bg-black ">
      <div className="flex flex-col lg:flex-row lg:pt-8 container mx-auto">
        {/* Content 1 */}
        <div className="text-white my-4 lg:my-0 lg:w-[650px]  xl:w-8/12  ">
          <div>
            <h3 className="font-bold text-3xl mb-6">McSong</h3>
          </div>
          <div className="flex flex-col mb-4">
            <span>Alunan Melodi Mengisi Hati</span>
            <span className="text-gray-400 opacity-85">
              Terus nikmati alunan lirik lagu yang memukau hanya di McSong
            </span>
          </div>
          <div>
            <button className="w-10 h-10 bg-white rounded-full">
              <Image
                src="/images/github.png"
                alt="Logo_Github"
                width={40}
                height={40}
                className="-translate-x-[0.4px]"
              />
            </button>
          </div>
        </div>
        {/* Close Content 1 */}

        {/* Content 2 */}
        <div className="grid grid-cols-2 gap-2 mb-8 text-gray-400 sm:grid-cols-4 w-full text-center">
          <div className="flex flex-col">
            <Link href="" className="line-through">
              Product
            </Link>
          </div>
          <div className="flex flex-col">
            <Link href="/disclaimer">Disclaimer</Link>
          </div>
          <div className="flex flex-col">
            <Link href="/tentang-kami">Tentang Kami</Link>
          </div>
          <div className="flex flex-col">
            <Link href="/kontak">Kontak</Link>
          </div>
        </div>
        {/* Close Content 2 */}
      </div>

      {/* Content 3 */}
      <div className="text-gray-400 container mb-4 text-center mx-auto">
        <div>
          <Link href="" className="">
            Copyright &copy; 2024 mcsong.vercel.app
          </Link>
        </div>
      </div>
      {/* Close Content3 */}
    </div>
  );
}
