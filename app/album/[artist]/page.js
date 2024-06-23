import React from "react";
import Link from "next/link";
import albumData from "../../../album.json";

const AlbumArtist = () => {
  return (
    <div className="items-center flex justify-center py-4 flex-col gap-5">
      <table className="w-[450px] border-separate border border-slate-500 bg-gray-700 text-white px-3">
        <thead className="bg-gray-800">
          <tr className="border border-white">
            <th className="border border-white">No</th>
            <th className="w-[150px] border border-white">Nama Album</th>
            <th className="w-[250px] border border-white">Tahun</th>
            <th className="w-[250px] border border-white">Daftar Lagu</th>
          </tr>
        </thead>

        <tbody>
          {Object.values(albumData).map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border border-white">{index + 1}</td>
              <td className="border border-white">{item.nama_album}</td>
              <td className="border border-white">{item.tahun}</td>
              <td className="border border-white">
                <div className="inner-table">
                  {item.daftar_lagu.map((lagu, laguIndex) => (
                    <div key={laguIndex} className="text-left">
                      {lagu}
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlbumArtist;
