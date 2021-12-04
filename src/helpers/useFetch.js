import { useEffect, useState } from 'react';

export const useFetch = (URL, path, allProduscts) => {
  const [data, setData] = useState();

  useEffect(() => {
    console.log(URL);
    const fetchData = async () => {
      const response = await fetch(`${URL}${path}`);
      const data = await response.json();
      setData(allProduscts ? data[0].products : data);
    };

    fetchData();
  }, [path]);

  return { data };
};
