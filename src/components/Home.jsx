import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";

const Home = () => {
  const [query, setQuery] = useState("");
  const [isDark] = useContext(ThemeContext);

  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      <CountriesList query={query} />
    </main>
  );
};

export default Home;
