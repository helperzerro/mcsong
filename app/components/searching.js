import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

export default function Searching() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    // console.log(inputValue.toLocaleLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/judul/${inputValue.toLocaleLowerCase()}`);
  };

  return (
    <div className="flex items-center justify-between mr-4">
      {/* Searching */}
      <div className="w-64 lg:w-80 py-3">
        <form
          className="flex flex-row items-center relative"
          onSubmit={handleSubmit}
        >
          <input
            className="h-9 pl-10 pr-2 text-sm text-white border-2 border-gray-300 rounded-md bg-transparent absolute right-0 left-0 outline-none"
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
    </div>
  );
}
