import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <h1 className="error-page">
      {" "}
      {error.status} : {error.statusText}{" "}
    </h1>
  );
};

export default Error;
