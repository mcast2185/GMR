import { NextPage } from "next";
import { useRouter } from "next/router";


interface SearchResult {
  id: number;
  title: string;
  description: string;
  // add any other fields you want to display in search results
}

interface SearchResultsProps {
  searchQuery: string;
  searchResults: SearchResult[];
}

const SearchResults: NextPage<SearchResultsProps> = ({
  searchQuery,
  searchResults,
}) => {
  const router = useRouter();

  if (!searchQuery) {
    // if search query is empty, show error message
    return (

        <div className="text-center">
          <p className="text-lg font-medium">Please enter a search query.</p>
        </div>

    );
  }

  if (!searchResults.length) {
    // if no search results, show message
    return (

        <div className="text-center">
          <p className="text-lg font-medium">No search results found.</p>
        </div>

    );
  }

  return (

      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-medium mb-6">
          Search results for "{searchQuery}"
        </h1>
        <ul className="divide-y divide-gray-300">
          {searchResults.map((result) => (
            <li key={result.id} className="py-4">
              <h2 className="text-lg font-medium">{result.title}</h2>
              <p className="mt-2 text-gray-600">{result.description}</p>
              {/* add any other fields you want to display in search results */}
            </li>
          ))}
        </ul>
      </div>

  );
};

export default SearchResults;
