import { useState, useEffect, ChangeEvent } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import LoadingIcon from 'components/LoadingIcon/LoadingIcon';
import Shadow from 'components/Shadow/Shadow';
import { handleSesonalOffer } from 'helpers/handleSesonalOffer';
import { isInCartHandler } from 'helpers/isInCartHandler';
import {
  Wrapper,
  ProductWrapper,
  Product,
  ProductImage,
  ProductName,
  SeasonOfferInfo,
  AddedIcon,
  NewestItem,
  SearchBarWrapper,
  SearchBar,
  SearchFeedback,
} from './Shop.styles';
import { fade } from 'animations/animations';
import { useFetch } from 'helpers/useFetch';
import { isNewestItemHandler } from 'helpers/isNewestItemHandler';
import { CartType } from 'Root'
import { DataType } from 'helpers/useFetch'

interface ShopItemProps {
  name: string
  id: string
  images: {
    url: string
  }[]
  cart: CartType['cart']
  published_at: string
}

const ShopItem = ({ name, id, images, cart, published_at }: ShopItemProps) => {
  const [element, inView] = useInView();

  return (
    <ProductWrapper variants={fade} animate={inView ? 'show' : 'hidden'} exit='exit' ref={element}>
      <Product key={id} title={name} to={`/${id}`} className={isInCartHandler(id, cart)}>
        {images.length > 0 && <ProductImage src={images[0].url} id='active' />}
        <ProductName>{name}</ProductName>
        {isInCartHandler(id, cart) && <AddedIcon />}
        {isNewestItemHandler(published_at) && <NewestItem>Nowość 🔥</NewestItem>}
      </Product>
    </ProductWrapper>
  );
};

interface ShopProps {
  cart: CartType['cart']
}

const Shop = ({ cart }: ShopProps) => {
  const path = useLocation().pathname.replace('/sklepik/', '');
  const { data } = useFetch(process.env.REACT_APP_PRODUCTS_URL, path, true);
  const [clonedData, setClonedData] = useState<DataType['data']>();

  useEffect(() => {
    setClonedData(data);
  }, [data]);

  const searchBarHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value && data !== undefined) {
      setClonedData(data.filter((element: {name: string}) => element.name.includes(e.target.value.toUpperCase())));
    } else {
      setClonedData(data);
    }
  };

  return (
    <Wrapper>
      <SearchBarWrapper>
        <SearchBar onChange={searchBarHandler} placeholder='Szukaj' />
        {clonedData && <SearchFeedback className={`${!clonedData.length && 'show'}`}>Nic nie znalazłam 😢</SearchFeedback>}
      </SearchBarWrapper>
      {path === 'rajstopy' && !handleSesonalOffer() && clonedData !== undefined ? (
        <SeasonOfferInfo>PRZYKRO MI, RAJSTOPKI WRÓCĄ JUŻ WE WRZEŚNIU 😉</SeasonOfferInfo>
      ) : clonedData ? (
        clonedData
          .slice(0)
          .reverse()
          .map(({ name, id, images, published_at }) => <ShopItem name={name} id={id} images={images} cart={cart} published_at={published_at} />)
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
