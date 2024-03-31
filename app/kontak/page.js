"use client";
import React, { useState } from "react";

export default function Kontak() {
  // State untuk menyimpan nilai input
  const [data, setData] = useState({
    nama: "",
    nohp: "",
    email: "",
    isipesan: "",
  });

  // Function untuk menangani perubahan nilai input
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function untuk menangani pengiriman form
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lakukan sesuatu dengan nilai input (misalnya, kirim ke server)
    console.log("Data 1:", data.nama);
    console.log("Data 2:", data.nohp);
    console.log("Data 3:", data.email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container py-4 md:w-[450px] mx-auto flex flex-col"
    >
      <div className="flex flex-col mb-4">
        <label htmlFor="nama" className="mb-1 font-bold">
          Nama
        </label>
        <input
          id="nama"
          className="h-9 px-2 text-sm border border-black rounded-md"
          type="text"
          name="nama"
          value={data.nama}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="nohp" className="mb-1 font-bold">
          No Hp
        </label>
        <input
          id="nohp"
          className="h-9 px-2 text-sm border border-black rounded-md"
          type="number"
          name="nohp"
          value={data.nohp}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="email" className="mb-1 font-bold">
          Email
        </label>
        <input
          id="email"
          className="h-9 px-2 text-sm border border-black rounded-md"
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="isipesan" className="mb-1 font-bold">
          Isi Pesan
        </label>
        <textarea
          id="isipesan"
          className="px-2 text-sm border border-black rounded-md"
          name="isipesan"
          value={data.isipesan}
          onChange={handleChange}
          rows={6}
          cols={50}
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg self-start"
      >
        Kirim
      </button>
    </form>
  );
}
