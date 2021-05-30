import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Wrapper, ProductWrapper, ProductImage, ProductName } from './Shop.styles';

const Shop = () => {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace('/', '');

    const fetchData = async () => {
      const response = await fetch(`https://euphoria-backend-strapi.herokuapp.com/categories?name=${path}`);
      const data = await response.json();
      setData(data[0].products);
    };
    fetchData();
  }, [location.pathname]);

  return (
    <Wrapper>
      {data.map(({ name, id, images }) => (
        <ProductWrapper key={id} name={name} id='active'>
          <ProductImage src={images[0].url}></ProductImage>
          <ProductName>{name}</ProductName>
        </ProductWrapper>
      ))}
    </Wrapper>
  );
};

export default Shop;
