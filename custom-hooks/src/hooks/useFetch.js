import { useEffect, useState } from "react";

const useFetch = (url = "" ) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  return { data, error };
};

export default useFetch;
