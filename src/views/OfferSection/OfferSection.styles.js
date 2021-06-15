import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 80%;
  height: 70vh;
  position: relative;
  display: flex;
  justify-content: center;
  margin: auto;
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 100%;
  }
`;

export const OffersWrapper = styled.div`
  width: 100%;
  height: 650px;
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
  @media screen and (max-width: 1200px) {
    height: 100%;
  }
`;

export const OnlyFansWrapper = styled.a`
  position: fixed;
  right: 0;
  top: 50vh;
  background: rgba(255, 255, 255, 100%);
  width: 50px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-shadow: ${({ theme }) => theme.colors.white};
  z-index: 2000;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 1200px) {
    width: 40px;
  }
  @media screen and (max-width: 680px) {
    width: 30px;
  }
`;

export const OnlyFans = styled.img`
  height: 130px;
  @media screen and (max-width: 680px) {
    height: 80px;
  }
`;
