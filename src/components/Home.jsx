import { useState } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";

const Home = () => {
  const [query, setQuery] = useState("");
  return (
    <main>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      <CountriesList query={query} />
    </main>
  );
};

export default Home;
