import React from "react";
import lirikData from "../../../lirik.json";
import Link from "next/link";

export default function artist({ params }) {
  const lagu = lirikData;

  return (
    <div className="items-center flex justify-center py-4">
      <table className="w-[450px] border-separate border border-slate-500  bg-gray-700 text-white">
        <thead className="bg-gray-800 ">
          <tr className="border border-white ">
            <th className="border border-white">No</th>
            <th className="w-[150px] border border-white">Singer</th>
            <th className="w-[250px] border border-white">Title</th>
          </tr>
        </thead>

        <tbody>
          {Object.values(lirikData)
            .filter((item) =>
              item.penyanyi.includes(decodeURIComponent(params.artist))
            )
            .map((item, index) => (
              <tr key={index} className="text-center ">
                <td className="border border-white ">{index + 1}</td>
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
    </div>
  );
}
