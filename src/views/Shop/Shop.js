import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
// COMPONENTS
import LoadingIcon from 'components/LoadingIcon/LoadingIcon';
import Shadow from 'components/Shadow/Shadow';
// STYLES
import { Wrapper, ProductWrapper, ProductImage, ProductName, StyledDoneIcon, SeasonOfferInfo } from './Shop.styles';
import { Header } from 'components/HomeOffersSection/HomeOffersSection.styles';

const Shop = ({ cart }) => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const path = location.pathname.replace('/sklepik/', '');

  const handleSesonalOffer = () => {
    const date = new Date().getMonth();

    if (date < 6 || date >= 9) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://euphoria-backend-strapi.herokuapp.com/categories?name=${path}`);
      const data = await response.json();
      setData(data[0].products);
    };
    fetchData();
  }, [path]);

  const checkIDHandler = (itemID) => {
    if (cart.find((item) => item.id === itemID)) {
      return 'added';
    }
  };

  return (
    <Wrapper>
      <Header>Majtki noszone używane dla fetyszystów sprzedam rajstopy majteczki skarpetki</Header>
      {path === 'rajstopy' && !handleSesonalOffer() ? (
        <SeasonOfferInfo>PRZYKRO MI, RAJSTOPKI WRÓCĄ JUŻ WE WRZEŚNIU 😉</SeasonOfferInfo>
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
      <Shadow />
    </Wrapper>
  );
};

Shop.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Shop;
