import styled from 'styled-components';

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
  @media screen and (max-width: 1250px) {
    width: 40px;
  }
  @media screen and (max-width: 620px) {
    width: 30px;
  }
`;

export const OnlyFans = styled.img`
  height: 130px;
  @media screen and (max-width: 680px) {
    height: 80px;
  }
`;
