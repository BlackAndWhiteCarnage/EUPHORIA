import styled from 'styled-components';
import Button from 'components/Button/Button';

export const ProductWrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-height: auto;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-width: 1250px) {
    position: relative;
    width: 80%;
    height: auto;
    min-height: 0;
    margin: 20px auto auto auto;
    align-items: center;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  bottom: 0;
  @media screen and (min-width: 860px) {
    margin: 40px 0;
  }
  @media screen and (min-width: 1250px) {
    margin: 0;
    min-width: 1000px;
    width: 80%;
    flex-direction: row;
    margin-top: 20px;
    max-width: 1300px;
  }
`;

export const StyledButton = styled(Button)`
  padding: 10px;
  margin: 15px 0;
  z-index: 15;
  @media screen and (min-width: 1250px) {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: 0;
    width: auto;
    white-space: nowrap;
  }
`;
