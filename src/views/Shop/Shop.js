import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
// COMPONENTS
import LoadingIcon from 'components/LoadingIcon/LoadingIcon';
import Shadow from 'components/Shadow/Shadow';
// STYLES
import { ShopWrapper, ProductWrapper, ProductImage, ProductName, StyledDoneIcon, SeasonOfferInfo } from './Shop.styles';
import { Header } from 'views/OfferSection/OfferSection.styles';

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
  }, [path]);

  const checkIDHandler = (itemID) => {
    if (cart !== undefined && cart !== false) {
      if (cart.find((item) => item.id === itemID)) {
        return 'added';
      }
    }
  };

  return (
    <>
      <ShopWrapper>
        <Header>Majtki noszone używane dla fetyszystów sprzedam rajstopy majteczki skarpetki</Header>
        {!data.length && path === 'rajstopy' ? (
          <SeasonOfferInfo>
            PRZEPRASZAM CIĘ NAJMOCNIEJ, RAJSTOPKI I POŃCZOSZKI U MNIE SĄ OFERTĄ SEZONOWĄ TERAZ JEST NA NIE TROSZECZKĘ ZA GORĄCO 😉
          </SeasonOfferInfo>
        ) : data.length > 0 ? (
          data
            .slice(0)
            .reverse()
            .map(({ name, id, images }) => (
              <ProductWrapper key={id} name={name} to={`/${id}`} className={checkIDHandler(id)}>
                {images.length > 0 && <ProductImage src={images[0].url} id='active'></ProductImage>}
                <ProductName>{name}</ProductName>
                {checkIDHandler(id) && <StyledDoneIcon />}
              </ProductWrapper>
            ))
        ) : (
          <LoadingIcon />
        )}
      </ShopWrapper>
      <Shadow />
    </>
  );
};

Shop.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Shop;
