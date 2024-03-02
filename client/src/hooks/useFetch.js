import { useState } from "react";

export const useFetch = () => {
  const [error, setError] = useState(null);

  const fetchData = async (url, method, body) => {
    try {
      const res = await fetch(url, {
        method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      setError(null);

      if (res.status !== 200) {
        const json = await res.json();
        setError(json.message);
        return;
      }
    } catch (e) {
      setError(error.message);
    }
  };

  return { fetchData, error };
};
