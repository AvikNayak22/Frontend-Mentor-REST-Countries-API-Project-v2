import "./CountriesListSkeleton.css";

const CountriesListSkeleton = () => {
  return (
    <div className="countries-container">
      {Array.from({ length: 10 }).map((el, index) => {
        return (
          <div key={index} className="country-card skeleton-card">
            <div className="flag-container"></div>
            <div className="card-text">
              <h3 className="card-title"></h3>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesListSkeleton;
