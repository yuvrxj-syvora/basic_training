import { useState, useEffect } from "react";

const ErrorBoundary = ({ childern }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error, errorInfo) => {
      console.error("Error caugh by error bounday", error, errorInfo);
    };
    window.addEventListener("error", errorHandler);
    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (hasError)
    return (
      <>
        <p>Something went wrong</p>
      </>
    );

  return childern;
};

export default ErrorBoundary;
