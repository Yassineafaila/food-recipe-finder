"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
interface InputSearchProps {
  onSearch: (searchTerm: string) => void;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
const InputSearch: React.FC<InputSearchProps> = ({ onSearch,search,setSearch }) => {
  const router = useRouter();
  const [error, setError] = useState<{ isError: boolean; message: string }>({
    isError: false,
    message: "",
  });
  const handleSubmit = () => {
    if (search === "") {
      setError({ isError: true, message: "The Input Cannot Be Empty" });
    } else {
      setError({ isError: false, message: "" });
      onSearch(search);
      router.push(`/recipes?search=${encodeURIComponent(search)}`);
      setSearch(search);
    }
  };
  return (
    <div className="container mx-auto max-w-[1400px] flex items-center justify-center px-4">
      <div className="px-4">
        <div className="">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search for recipes"
            className="border border-gray-400 px-4 py-1.5 rounded focus:outline-none md:w-96 lg:w-96 w-full"
          />
          <button
            type="button"
            onClick={() => handleSubmit()}
            className="bg-orange-500 text-white px-4 py-1.5 border-none rounded md:ms-2 lg:ms-2 mt-2 md:mt-0 lg:mt-0 hover:bg-orange-700"
          >
            Search
          </button>
        </div>
        <div className="">
          {error.isError && (
            <p className="text-orange-500 mt-2 font-medium text-sm ">
              {error.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputSearch;
