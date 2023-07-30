import { useCallback, useEffect, useState } from "react";
import { baseUrl } from "../baseurl";

export const UseProductData = (endpoint) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(baseUrl + endpoint);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { loading, data };
};
