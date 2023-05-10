import axios from "axios";

import { useEffect, useState } from "react";
const useFetch = (URI) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(true);
  const fetchData = async (URI) => {
    try {
      axios;
      const res = await axios.get(URI);
      setData(res.data);

      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(URI);
  }, []);
  return { isLoading, isError, data };
};

export default useFetch;
