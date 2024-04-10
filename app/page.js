"use client";
import Link from "next/link";
import React, { useState } from "react";
import lirikData from "../lirik.json";
import Pagination from "./components/pagination";

export const metadata = {
  title: "Home",
};

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Jumlah item per halaman
  const totalItems = Object.keys(lirikData).length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Fungsi untuk menampilkan item yang sesuai dengan halaman saat ini
  const currentItems = Object.values(lirikData).slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="items-center flex justify-center py-4 flex-col gap-5">
      <table className="w-[450px] border-separate border border-slate-500  bg-gray-700 text-white">
        <thead className="bg-gray-800 ">
          <tr className="border border-white ">
            <th className="border border-white">No</th>
            <th className="w-[150px] border border-white">Singer</th>
            <th className="w-[250px] border border-white">Title</th>
          </tr>
        </thead>

        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index} className="text-center ">
              <td className="border border-white ">
                {(currentPage - 1) * itemsPerPage + index + 1}
              </td>
              <td className="border border-white">{item.penyanyi}</td>
              <td className="border border-white">
                <Link
                  className="transition hover:scale-50 hover:font-bold hover:text-shadow"
                  href={`/judul/${item.title.toLocaleLowerCase()}`}
                >
                  {item.judul}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
