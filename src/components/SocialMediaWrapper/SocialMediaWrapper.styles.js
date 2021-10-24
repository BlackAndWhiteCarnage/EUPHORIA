import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 205px;
  min-height: 65px;
  a {
    width: 40px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.darkGrey};
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1250px) {
      min-height: 35px;
      width: 30px;
      margin-bottom: 50px;
    }
    @media screen and (min-width: 1250px) {
      &:hover {
        img {
          transform: scale(1.5);
          transition: 0.5s ease;
        }
      }
    }
  }
  @media screen and (max-width: 1250px) {
    max-width: 80px;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    background: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const Icon = styled.img`
  width: 20px;
  max-height: 20px;
  transition: 0.3s ease;
  @media screen and (max-width: 1250px) {
    min-height: 35px;
    width: 30px;
  }
`;
