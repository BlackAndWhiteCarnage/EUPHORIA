import { useEffect, useState } from 'react';

export interface DataType {
  data: {
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
  } | {
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
  }[]
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
