import { useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?query=${searchTerm}`);
    }
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">
        <span className="sr-only">Search
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
      </label>
      <div className="flex items-center border border-gray-300 rounded-lg">
        <input
          type="text"
          id="search"
          placeholder="Search"
          className="flex-grow px-4 py-2 text-sm text-gray-700 focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="flex-shrink-0 px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
