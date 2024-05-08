import "./CountriesListSkeleton.css";

const CountriesListSkeleton = () => {
  return (
    <div className="countries-container">
      {Array.from({ length: 10 }).map((el, index) => {
        return <div key={index} className="country-card skeleton-card"></div>;
      })}
    </div>
  );
};

export default CountriesListSkeleton;
