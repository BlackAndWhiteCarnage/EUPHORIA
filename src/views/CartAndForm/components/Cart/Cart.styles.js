import styled from 'styled-components';

export const CartItems = styled.div`
  position: relative;
  width: 30%;
  min-width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
  background: ${({ theme }) => theme.colors.white};
  @media screen and (max-width: 1250px) {
    min-width: unset;
    width: 100%;
  }
`;

export const CartItem = styled.div`
  position: relative;
  width: 400px;
  background: ${({ theme }) => theme.colors.main};
  min-height: 180px;
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.m};
  @media screen and (max-width: 1250px) {
    width: 95%;
    min-height: 300px;
    &:last-child {
      margin-bottom: 140px;
    }
  }
  @media screen and (max-width: 780px) {
    width: 95%;
    justify-content: space-around;
    min-height: 300px;
    margin: 40px 0;
  }
  &.deleting {
    transition: 0.5s;
    transform: scale(0) translateY(-300px);
    opacity: 0;
  }
`;

export const ItemImage = styled.img`
  min-width: 120px;
  max-width: 120px;
  height: 90%;
  object-fit: cover;
  margin-left: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);
  backface-visibility: hidden;
  @media screen and (max-width: 1250px) {
    min-width: 200px;
    max-width: 200px;
  }
  @media screen and (max-width: 780px) {
    margin: 20px;
  }
  @media screen and (max-width: 460px) {
    margin: 0;
    height: 100%;
    min-width: 40%;
    box-shadow: none;
  }
`;
