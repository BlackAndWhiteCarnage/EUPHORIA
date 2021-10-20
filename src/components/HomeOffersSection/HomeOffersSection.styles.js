import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.section)`
  width: 100%;
  max-width: 1400px;
  min-height: 80vh;
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

export const Header = styled.header`
  pointer-events: none;
  position: absolute;
  opacity: 0;
`;
