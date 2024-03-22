"use client";
import { useState } from "react";
interface SideBarProp {
  dietLabels: string[];
  healthLabels: string[];
  onSearch: (
    searchTerm: string,
    selectedDietLabels: string[],
    selectedHealthLabels: string[]
  ) => void;
  search:string
}
const Sidebar: React.FC<SideBarProp> = ({
  dietLabels,
  healthLabels,
  onSearch,
  search
}) => {
  const [selectedDietLabels, setSelectedDietLabels] = useState<string[]>([]);
  const [selectedHealthLabels, setSelectedHealthLabels] = useState<string[]>(
    []
  );
  const handleDietLabelChange = (label: string) => {
    if (selectedDietLabels.includes(label)) {
      setSelectedDietLabels(
        selectedDietLabels.filter((item) => item !== label)
      );
    } else {
      setSelectedDietLabels([...selectedDietLabels, label]);
    }
  };

  const handleHealthLabelChange = (label: string) => {
    if (selectedHealthLabels.includes(label)) {
      setSelectedHealthLabels(
        selectedHealthLabels.filter((item) => item !== label)
      );
    } else {
      setSelectedHealthLabels([...selectedHealthLabels, label]);
    }
  };

  const applyFilters = () => {
    onSearch(search, selectedDietLabels, selectedHealthLabels);
    return null;
  };

  return (
    <aside className="sidebar w-64 px-4 bg-backgroundLightGray py-3 rounded h-fit">
      <h2 className="bg-orange-500 text-white rounded px-4 py-2">
        Filter Search By <span className="text-gray-900 font-bold">Diet</span>,
        <span className="text-gray-900 font-bold">Health</span>
      </h2>
      <div className="filter-section mt-2 mb-4">
        <h3 className="font-bold">Diet Labels:</h3>
        <ul>
          {dietLabels.map((label) => (
            <li
              key={label}
              className="hover:text-white hover:bg-orange-300 py-1.5 rounded px-1.5"
            >
              <label key={label} className="filter-label ">
                <input
                  type="checkbox"
                  checked={selectedDietLabels.includes(label)}
                  onChange={() => handleDietLabelChange(label)}
                />
                {label}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="filter-section">
        <h3 className="font-bold">Health Labels:</h3>
        <ul>
          {healthLabels.map((label) => (
            <li
              key={label}
              className="hover:text-white hover:bg-orange-300 py-1.5 rounded px-1.5"
            >
              <label key={label} className="filter-label">
                <input
                  type="checkbox"
                  checked={selectedHealthLabels.includes(label)}
                  onChange={() => handleHealthLabelChange(label)}
                />
                {label}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={applyFilters}
        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-800"
      >
        Apply Filters
      </button>
    </aside>
  );
};

export default Sidebar;
