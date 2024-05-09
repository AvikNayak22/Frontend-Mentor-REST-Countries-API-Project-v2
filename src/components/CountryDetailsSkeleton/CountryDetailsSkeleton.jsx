import "./CountryDetailsSkeleton.css";

const CountryDetailsSkeleton = () => {
  return (
    <div className="country-details skeleton">
      <div className="flag"></div>
      <div className="details-text-container">
        <h1 className="title"></h1>
        <div className="">
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailsSkeleton;
