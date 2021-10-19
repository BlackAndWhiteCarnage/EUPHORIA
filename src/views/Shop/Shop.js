import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
// COMPONENTS
import LoadingIcon from 'components/LoadingIcon/LoadingIcon';
import Shadow from 'components/Shadow/Shadow';
// HELPERS
import { handleSesonalOffer } from 'helpers/handleSesonalOffer';
import { isInCartHandler } from 'helpers/isInCartHandler';
// STYLES
import { Wrapper, Product, ProductImage, ProductName, SeasonOfferInfo, AddedIcon } from './Shop.styles';
import { Header } from 'components/HomeOffersSection/HomeOffersSection.styles';

const Shop = ({ cart }) => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const path = location.pathname.replace('/sklepik/', '');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(`https://euphoria-backend-strapi.herokuapp.com/categories?name=${path}`);
  //     const data = await response.json();
  //     setData(data[0].products);
  //   };
  //   fetchData();
  // }, [path]);

  return (
    <Wrapper>
      <Header>Majtki noszone używane dla fetyszystów sprzedam rajstopy majteczki skarpetki</Header>
      {path === 'rajstopy' && !handleSesonalOffer() && data.length > 0 ? (
        <SeasonOfferInfo>PRZYKRO MI, RAJSTOPKI WRÓCĄ JUŻ WE WRZEŚNIU 😉</SeasonOfferInfo>
      ) : data.length > 0 ? (
        data
          .slice(0)
          .reverse()
          .map(({ name, id, images }) => (
            <Product key={id} name={name} to={`/${id}`} className={isInCartHandler(id, cart)}>
              {images.length > 0 && <ProductImage src={images[0].url} id='active' />}
              <ProductName>{name}</ProductName>
              {isInCartHandler(id, cart) && <AddedIcon />}
            </Product>
          ))
      ) : (
        <LoadingIcon />
      )}
      <Shadow />
    </Wrapper>
  );
};

Shop.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Shop;
