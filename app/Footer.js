import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="p-4 md:px-10 bg-black">
      <div className="flex flex-col lg:flex-row lg:pt-8 container">
        {/* Content 1 */}
        <div className="text-white my-14 lg:my-0 lg:w-[650px]  xl:w-8/12">
          <div>
            <h3 className="font-bold text-3xl mb-6">GitHub</h3>
          </div>
          <div className="flex flex-col mb-4">
            <span>Subscribe to our newsletter</span>
            <span className="text-gray-400 opacity-85">
              Get product updates, company news, and more.
            </span>
          </div>
          <div>
            <button className="border px-6 py-2.5 font-bold rounded-md border-gray-500">
              Subscribe
            </button>
          </div>
        </div>
        {/* Close Content 1 */}

        {/* Content 2 */}
        <div className="grid grid-cols-2 gap-10 mb-8 text-gray-400 sm:grid-cols-4 w-full">
          <div className="flex flex-col">
            <Link href="" className="mb-2">
              Product
            </Link>
            <Link href="" className="mb-2">
              Features
            </Link>
            <Link href="" className="mb-2">
              The ReadME Project
            </Link>
            <Link href="" className="mb-2">
              Product
            </Link>
            <Link href="" className="mb-2">
              Features
            </Link>
            <Link href="" className="mb-2">
              Security
            </Link>
            <Link href="" className="mb-2">
              Product
            </Link>
            <Link href="" className="mb-2">
              Features
            </Link>
            <Link href="" className="mb-2">
              Security
            </Link>
            <Link href="" className="mb-2">
              Product
            </Link>
            <Link href="" className="mb-2">
              Features
            </Link>
          </div>
          <div className="flex flex-col">
            <Link href="" className="mb-2">
              Advertise
            </Link>
            <Link href="" className="mb-2">
              Product
            </Link>
            <Link href="" className="mb-2">
              Features
            </Link>
            <Link href="" className="mb-2">
              Security
            </Link>
            <Link href="" className="mb-2">
              Product
            </Link>
          </div>
          <div className="flex flex-col">
            <Link href="" className="mb-2">
              Features
            </Link>
            <Link href="" className="mb-2">
              Security
            </Link>{" "}
            <Link href="" className="mb-2">
              Features
            </Link>
            <Link href="" className="mb-2">
              Security
            </Link>{" "}
            <Link href="" className="mb-2">
              Features
            </Link>
            <Link href="" className="mb-2">
              Security
            </Link>{" "}
            <Link href="" className="mb-2">
              Features
            </Link>
            <Link href="" className="mb-2">
              Security
            </Link>
          </div>
          <div className="flex flex-col">
            <Link href="" className="mb-2">
              Features
            </Link>
            <Link href="" className="mb-2">
              Security
            </Link>{" "}
            <Link href="" className="mb-2">
              Features
            </Link>
            <Link href="" className="mb-2">
              Security
            </Link>{" "}
            <Link href="" className="mb-2">
              Features
            </Link>
            <Link href="" className="mb-2">
              Security
            </Link>{" "}
            <Link href="" className="mb-2">
              Features
            </Link>
            <Link href="" className="mb-2">
              Security
            </Link>
          </div>
        </div>
        {/* Close Content 2 */}
      </div>

      {/* Content 3 */}
      <div className="text-gray-400">
        <div>
          <Link href="" className="">
            Advertise
          </Link>
        </div>
        <div>
          <Link href="" className="">
            Advertise
          </Link>
        </div>
      </div>
      {/* Close Content3 */}
    </div>
  );
}
