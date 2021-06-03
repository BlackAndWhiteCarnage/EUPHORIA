import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import LoadingIcon from 'components/LoadingIcon/LoadingIcon';
import Button from 'components/Button/Button';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ReactComponent as ScrollIcon } from 'assets/icons/scroll-icon-white.svg';
import { ReactComponent as ScrollIconDark } from 'assets/icons/scroll-icon.svg';

const Wrapper = styled.div`
  position: relative;
  width: 80%;
  height: auto;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1250px) {
    width: 100%;
    height: 100vh;
    position: static;
  }
`;

const ProductWrapper = styled.div`
  position: relative;
  width: 1000px;
  height: 650px;
  margin: 30px auto auto auto;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 1250px) {
    height: 1000px;
    width: 100%;
    align-items: flex-end;
    justify-content: flex-end;
    overflow-y: scroll;
    margin: 0;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  @media screen and (max-width: 860px) {
    position: absolute;
    top: 0;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
  }
`;

const ImagesWrapper = styled.div`
  position: relative;
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
  @media screen and (max-width: 1250px) {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
    margin: 0;
  }
`;

const ProductImage = styled.img`
  position: absolute;
  width: 100%;
  height: 500px;
  object-fit: cover;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 1250px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: 80%;
  }
  @media screen and (max-width: 860px) {
    width: 100%;
  }
`;

const ProductInfoWrapper = styled.div`
  position: relative;
  width: 60%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 50px;
  @media screen and (max-width: 1250px) {
    width: 100%;
    height: 1000px;
    z-index: 3;
    background: ${({ theme }) => theme.colors.darkWhite};
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    justify-content: flex-start;
  }
`;

const ProductName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-transform: uppercase;
  letter-spacing: 5px;
  @media screen and (max-width: 1250px) {
    background: ${({ theme }) => theme.colors.crimsonRed};
    color: ${({ theme }) => theme.colors.darkWhite};
    padding: 10px;
    position: absolute;
    top: 0;
    width: 100%;
    left: 0;
    height: auto;
  }
`;

const ProductDescription = styled.p`
  line-height: 160%;
  font-size: ${({ theme }) => theme.fontSize.m};
  width: 100%;
  @media screen and (max-width: 1250px) {
    width: 90%;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
  }
`;

const PriceAndShippingInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 50px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bolder;
  span {
    color: ${({ theme }) => theme.colors.crimsonRed};
  }
  @media screen and (max-width: 1250px) {
    width: 90%;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -60%);
  }
`;

const ProductPrice = styled.p``;
const ProductShippingInfo = styled.p``;
const EmptyDiv = styled.div`
  display: none;
  @media screen and (max-width: 1250px) {
    display: block;
    width: 100%;
    height: 100vh;
    z-index: 3;
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: -55px;
  right: 0;
  padding: 10px;
  transition: 0.5s ease;
  @media screen and (max-width: 1250px) {
    bottom: 10px;
  }
`;

const Extras = styled(Button)`
  position: absolute;
  bottom: -55px;
  left: 0;
  padding: 10px;
  transition: 0.5s ease;
  background: ${({ theme }) => theme.colors.darkGrey};
  &:hover {
    &::before {
      background: ${({ theme }) => theme.colors.crimsonRed};
    }
  }
  @media screen and (max-width: 1250px) {
    bottom: 50px;
  }
`;

const SelectExtrasWrapper = styled.div`
  width: 0;
  height: 100%;
  transition: 0.3s ease;
  position: absolute;
  background: ${({ theme }) => theme.colors.darkGrey};
  pointer-events: none;
  opacity: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  overflow: hidden;
  &.toggle {
    pointer-events: all;
    width: 100%;
    transition: 0.5s ease;
    opacity: 1;
  }
`;

const ExtrasNumber = styled.div`
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.colors.crimsonRed};
  color: ${({ theme }) => theme.colors.darkWhite};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoAndNumberWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  letter-spacing: 5px;
`;

const Option = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.darkWhite};
  text-transform: uppercase;
  border: 1px solid ${({ theme }) => theme.colors.white};
  padding: 10px;
  cursor: pointer;
  &.added {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const fakeOprionsData = [
  'piss w majteczkach',
  'scat w majteczkach',
  'spryskanie majteczek moimi ukochanymi perfumami',
  '5 prywatnych zdjęć (selfie, w przymieżalni itp.)',
  'Wielokrotny orgazm w majteczkach',
  'Noszenie majteczek 2 dni',
  'Noszenie majteczek 3 dni',
  'Krótkie sexy nagranie w tych majteczkach',
  'Naplucie na majteczki',
  'Włożenie majteczek (Zgadnij gdzie)',
  'Majteczki w okresie',
  'Uprawianie sportu w majteczkach',
  '3 zdjęcia z Twoim imieniem lub nickiem na moim tyłeczku',
];

const Product = () => {
  const [data, setData] = useState();
  const [toggleExtras, setToggleExtras] = useState(false);
  const [pickExtras, setPickExtras] = useState({
    price: 0,
    pickedExtras: [],
  });
  const location = useLocation();
  const path = location.pathname.replace('/', '');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://euphoria-backend-strapi.herokuapp.com/products/${path}`);
      const data = await response.json();
      setData(data);
    };
    fetchData();
    return () => {};
  }, [location.pathname]);

  const toggleExtrasHandler = () => {
    setToggleExtras(!toggleExtras);
  };

  const extrasToPickHandler = (extras) => {
    setPickExtras({
      ...pickExtras,
      price: pickExtras.pickedExtras.length > 1 && pickExtras.price + 10,
      pickedExtras: [...pickExtras.pickedExtras, extras],
    });

    if (pickExtras.pickedExtras.indexOf(extras) > -1) {
      setPickExtras({
        price: pickExtras.price - 10,
        pickedExtras: pickExtras.pickedExtras.filter((item) => item !== extras),
      });
    }
  };

  return (
    <>
      {/* {data !== undefined ? (
        <Wrapper>
          <GlobalStyle overflowChange />
          <ProductWrapper>
            <EmptyDiv />
            <ProductInfoWrapper>
              <ProductName>{data.name}</ProductName>
              <ProductDescription>{data.description}</ProductDescription>
              <PriceAndShippingInfoWrapper>
                <ProductPrice>
                  CENA <span>{data.price}</span> zł
                </ProductPrice>
                <ProductShippingInfo>DARMOWA PRZESYŁKA!</ProductShippingInfo>
              </PriceAndShippingInfoWrapper>
            </ProductInfoWrapper>
            <ImagesWrapper>
              <ProductImage src={data.images[0].url} />
              <ProductImage src={data.images[1].url} />
            </ImagesWrapper>
            <StyledButton text='DODAJ DO KOSZYKA' />
            <Extras text='WYBIERZ DODATKI' click={toggleExtrasHandler} />
            <SelectExtrasWrapper className={toggleExtras && 'toggle'}>
              <InfoAndNumberWrapper>
                <ExtrasNumber>WYBIERZ 2 DODATKI, KAŻDY KOLEJNY DODATKOWO PŁATNY +10zł</ExtrasNumber>
                {pickExtras.pickedExtras.length > 2 && <ExtrasNumber>DODATKOWO DO ZAPŁATY {pickExtras.price} zł</ExtrasNumber>}
              </InfoAndNumberWrapper>
              {fakeOprionsData.map((extras) => (
                <Option onClick={() => extrasToPickHandler(extras)} className={pickExtras.pickedExtras.includes(extras) && 'added'} key={extras}>
                  {extras}
                </Option>
              ))}
            </SelectExtrasWrapper>
          </ProductWrapper>
        </Wrapper>
      ) : (
        <LoadingIcon />
      )} */}
      {data !== undefined && (
        <PRODWRAPPER>
          <IMGWRAPPER>
            <IMG src={data.images[0].url} />
            <StyledScrollIcon />
            <StyledScrollIconDark />
          </IMGWRAPPER>
          <PRODUCTINFOWRAPPER>
            <REALINFOWRAPPER>
              <NAME>{data.name}</NAME>
              <DESC>{data.description}</DESC>
              <PRICEANDSHIPPINGINFOWRAPPER>
                <PRICE>
                  CENA <span>{data.price}</span> zł
                </PRICE>
                <PRICE>
                  <span>DARMOWA</span> WYSYŁKA
                </PRICE>
              </PRICEANDSHIPPINGINFOWRAPPER>
              <BUTTONSSS>
                <STYLEDButton text='WYBIERZ DODATKI' />
                <STYLEDButton text='DODAJ DO KOSZYKA' />
              </BUTTONSSS>
            </REALINFOWRAPPER>
            <IMGWRAPPERDESK>
              <IMG src={data.images[0].url} />
              {/* <IMG src={data.images[1].url} /> */}
            </IMGWRAPPERDESK>
          </PRODUCTINFOWRAPPER>
        </PRODWRAPPER>
      )}
    </>
  );
};

export default Product;

const PRODWRAPPER = styled.div`
  width: 100%;
  height: 100%;
  max-height: auto;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-width: 1250px) {
    position: static;
    width: 80%;
    height: auto;
    min-height: 0;
    margin: 40px auto;
    align-items: center;
  }
`;

const IMGWRAPPER = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  @media screen and (min-width: 1250px) {
    min-height: 0;
    display: none;
  }
`;

const IMGWRAPPERDESK = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 1250px) {
    display: none;
  }
`;

const IMG = styled.img`
  position: fixed;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  @media screen and (min-width: 1250px) {
    position: absolute;
    height: 80%;
    width: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    max-width: 550px;
  }
`;

const PRODUCTINFOWRAPPER = styled.div`
  width: 100%;
  /* min-height: 100vh;
  max-height: auto; */
  z-index: 5;
  background-color: ${({ theme }) => theme.colors.darkWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px 30px 0 0;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  @media screen and (min-width: 1250px) {
    min-width: 1000px;
    width: 80%;
    max-width: 1300px;
    height: 650px;
    border-radius: 0;
  }
`;

const REALINFOWRAPPER = styled.div`
  width: 95%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  @media screen and (min-width: 860px) {
    margin: 40px 0;
  }
  @media screen and (min-width: 1250px) {
    min-height: 0;
    width: 50%;
    justify-content: center;
  }
`;

const NAME = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-transform: uppercase;
  letter-spacing: 5px;
  margin: 40px 0;
  @media screen and (min-width: 860px) {
    margin: 60px 0;
  }
  @media screen and (min-width: 1250px) {
    width: 80%;
    margin: 20px auto;
  }
`;

const DESC = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  text-transform: uppercase;
  margin: 40px 0;
  @media screen and (min-width: 860px) {
    margin: 60px 0;
  }
  @media screen and (min-width: 1250px) {
    width: 80%;
    font-size: ${({ theme }) => theme.fontSize.m};
    margin: 40px auto;
  }
`;

const PRICEANDSHIPPINGINFOWRAPPER = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  text-transform: uppercase;
  margin: 60px 0;
  @media screen and (min-width: 860px) {
    margin: 80px 0;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media screen and (min-width: 1250px) {
    width: 80%;
    font-size: ${({ theme }) => theme.fontSize.m};
    margin: 20px auto;
  }
`;

const PRICE = styled.div`
  text-transform: uppercase;
  font-weight: bolder;
  margin-bottom: 10px;
  span {
    color: ${({ theme }) => theme.colors.crimsonRed};
  }
`;

const BUTTONSSS = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 100px;
  @media screen and (min-width: 860px) {
    margin: 40px 0;
  }
  @media screen and (min-width: 1250px) {
    margin: 0;
    width: 80%;
    flex-direction: row;
    margin: 40px auto;
  }
`;

const STYLEDButton = styled(Button)`
  padding: 10px;
  margin: 15px 0;
  @media screen and (min-width: 1250px) {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: 0;
    width: auto;
    white-space: nowrap;
  }
`;

const showDirection = keyframes`
  0% {
      transform: translate(-50%, -50%);
  }
  50% {
      transform: translate(-50%, -50%);
      top: 80%;
  }
  70% {
      transform: translate(-50%, -50%) scale(1.1);
      top: 85%
  }
  100% {
      transform: translate(-50%, -50%) scale(1);
  }
`;

const StyledScrollIcon = styled(ScrollIcon)`
  position: fixed;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -80%);
  width: 25px;
  height: 25px;
  z-index: 3;
  transform-origin: center;
  animation: ${showDirection} 4s ease-in-out infinite;
  transition: 0.5s ease;
  @media screen and (min-width: 860px) {
    width: 40px;
    height: 40px;
  }
  @media screen and (min-width: 1250px) {
    display: none;
  }
`;

const StyledScrollIconDark = styled(ScrollIconDark)`
  position: fixed;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -70%);
  width: 25px;
  height: 25px;
  z-index: 3;
  transform-origin: center;
  animation: ${showDirection} 4s 0.2s ease-in-out infinite;
  transition: 0.5s ease;
  @media screen and (min-width: 860px) {
    width: 40px;
    height: 40px;
  }
  @media screen and (min-width: 1250px) {
    display: none;
  }
`;
