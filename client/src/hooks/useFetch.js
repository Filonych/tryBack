export const useFetch = () => {
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

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message);
      }

      return await res.json();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return { fetchData };
};
