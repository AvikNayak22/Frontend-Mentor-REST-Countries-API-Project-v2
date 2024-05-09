import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";

const Home = () => {
  const [query, setQuery] = useState("");
  const [isDark] = useTheme();

  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery} />
      </div>
      <CountriesList query={query} />
    </main>
  );
};

export default Home;
