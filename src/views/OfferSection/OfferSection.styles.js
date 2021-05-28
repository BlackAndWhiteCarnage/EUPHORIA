import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';

export const Wrapper = styled.section`
  width: 80%;
  height: 780px;
  position: relative;
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 100%;
  }
`;

export const CartAndLogoWrapper = styled.div`
  width: 100%;
  height: 90px;
  @media screen and (max-width: 1200px) {
    position: relative;
    width: 95%;
    margin: auto;
  }
  @media screen and (max-width: 620px) {
    position: relative;
    width: 95%;
    margin: 15px auto auto auto;
  }
`;

export const CartWrapper = styled.div`
  width: 75px;
  height: 30px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 620px) {
    position: fixed;
    z-index: 5;
    top: 25px;
    right: 15px;
    width: 85px;
    height: 40px;
  }
`;

export const StyledLogo = styled(Logo)`
  width: 270px;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  @media screen and (max-width: 620px) {
    width: 220px;
  }
  @media screen and (max-width: 340px) {
    width: 180px;
  }
`;

export const OffersWrapper = styled.div`
  width: 100%;
  height: calc(100% - 30px - 90px - 20px - 15px);
  display: grid;
  grid-template-areas:
    'SKARPETKI SKARPETKI MAJTKI MAJTKI MAJTKI INNE INNE SESJE SESJE'
    'SKARPETKI SKARPETKI MAJTKI MAJTKI MAJTKI INNE INNE SESJE SESJE'
    'SKARPETKI SKARPETKI PREMIUM PREMIUM RAJSTOPY RAJSTOPY RAJSTOPY SESJE SESJE'
    'SKARPETKI SKARPETKI PREMIUM PREMIUM RAJSTOPY RAJSTOPY RAJSTOPY SESJE SESJE';
  @media screen and (max-width: 1700px) {
    grid-template-areas: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const Icon = styled.img`
  min-width: 18px;
`;
