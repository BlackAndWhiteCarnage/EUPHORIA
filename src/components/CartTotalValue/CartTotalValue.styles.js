import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  width: auto;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  bottom: -80px;
  font-weight: bolder;
  span {
    color: ${({ theme }) => theme.colors.crimsonRed};
  }
  @media screen and (max-width: 1200px) {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    bottom: 0;
    width: 100%;
    background: ${({ theme }) => theme.colors.darkWhite};
    text-align: right;
    padding: 10px;
  }
`;
