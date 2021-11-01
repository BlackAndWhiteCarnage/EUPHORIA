import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import LoadingIcon from 'components/LoadingIcon/LoadingIcon';
import Shadow from 'components/Shadow/Shadow';
import { handleSesonalOffer } from 'helpers/handleSesonalOffer';
import { isInCartHandler } from 'helpers/isInCartHandler';
import { Wrapper, ProductWrapper, Product, ProductImage, ProductName, SeasonOfferInfo, AddedIcon } from './Shop.styles';
import { Header } from 'views/Home/components/HomeOffersSection/HomeOffersSection.styles';
import { fade } from 'animations/animations';

const ShopItem = ({ name, id, images, cart }) => {
  const [element, inView] = useInView();

  return (
    <ProductWrapper variants={fade} animate={inView ? 'show' : 'hidden'} exit='exit' ref={element}>
      <Product key={id} name={name} to={`/${id}`} className={isInCartHandler(id, cart)}>
        {images.length > 0 && <ProductImage src={images[0].url} id='active' />}
        <ProductName>{name}</ProductName>
        {isInCartHandler(id, cart) && <AddedIcon />}
      </Product>
    </ProductWrapper>
  );
};

const Shop = ({ cart }) => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const path = location.pathname.replace('/sklepik/', '');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.REACT_APP_PRODUCTS_URL}${path}`);
      const data = await response.json();
      setData(data[0].products);
    };

    fetchData();
  }, [path]);

  return (
    <Wrapper>
      <Header>Majtki noszone używane dla fetyszystów sprzedam rajstopy majteczki skarpetki</Header>
      {path === 'rajstopy' && !handleSesonalOffer() && data.length > 0 ? (
        <SeasonOfferInfo>PRZYKRO MI, RAJSTOPKI WRÓCĄ JUŻ WE WRZEŚNIU 😉</SeasonOfferInfo>
      ) : data.length > 0 ? (
        data
          .slice(0)
          .reverse()
          .map(({ name, id, images }) => <ShopItem name={name} id={id} images={images} cart={cart} />)
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
