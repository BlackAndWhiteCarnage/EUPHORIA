import React, { useEffect, useState } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import { Wrapper, ProductWrapper, ProductImage, ProductName, StyledDoneIcon } from './Shop.styles';
import LoadingIcon from 'components/LoadingIcon/LoadingIcon';
import Product from 'views/Product/Product';

const Shop = ({ cart }) => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const path = location.pathname.replace('/sklepik/', '');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://euphoria-backend-strapi.herokuapp.com/categories?name=${path}`);
      const data = await response.json();
      setData(data[0].products);
    };
    fetchData();
  }, [location.pathname]);

  const checkIDHandler = (itemID) => {
    if (cart !== undefined && cart !== false) {
      if (cart.find((item) => item.id === itemID)) {
        return 'added';
      }
    }
  };

  return (
    <Wrapper>
      {data.length > 0 ? (
        data
          .slice(0)
          .reverse()
          .map(({ name, id, images }) => (
            <>
              <ProductWrapper key={id} name={name} to={`/${id}`} className={checkIDHandler(id)}>
                {images.length > 0 && <ProductImage src={images[0].url} id='active'></ProductImage>}
                <ProductName>{name}</ProductName>
                {checkIDHandler(id) && <StyledDoneIcon />}
              </ProductWrapper>
              <Switch>
                <Product id={id} data={data} path={`/${id}`} />
              </Switch>
            </>
          ))
      ) : (
        <LoadingIcon />
      )}
    </Wrapper>
  );
};

export default Shop;
