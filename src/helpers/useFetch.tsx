import { useEffect, useState } from 'react';

interface ProductStructure {
  description: string
  id: string
  images: {
    url: string
  }[]
  name: string
  price: number
  published_at: string
  category: {
    name: string
  }
}

export interface DataType {
  data: ProductStructure | ProductStructure[]
  setData: React.Dispatch<React.SetStateAction<DataType['data']>>
}

export const useFetch = (URL: string | undefined, path: string, allProduscts: boolean) => {
  const [data, setData] = useState<DataType['data']>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${URL}${path}`);
      const data = await response.json();

      setData(allProduscts ? data[0].products : data);
    };

    fetchData();
  }, [path, URL, allProduscts]);

  return { data };
};
