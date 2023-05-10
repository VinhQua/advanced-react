import axios from "axios";

import { useEffect, useState } from "react";
const useFetchPerson = (URI) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setuser] = useState(null);
  const [isError, setIsError] = useState(true);
  const fetchUser = async (URI) => {
    try {
      axios;
      const res = await axios.get(URI);
      setuser(res.data);

      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser(URI);
  }, []);
  return { isLoading, isError, user };
};

export default useFetchPerson;
