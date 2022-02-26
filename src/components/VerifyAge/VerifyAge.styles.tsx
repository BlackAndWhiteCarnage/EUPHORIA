import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999999;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: ${({ theme }) => theme.fontSize.l};
    width: 90%;
    max-width: 800px;
    text-align: center;
    margin-bottom: 50px;
    span {
      color: ${({ theme }) => theme.colors.main};
    }
  }
  div {
    width: 90%;
    height: 80px;
    max-width: 800px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 999999999999;
    @media screen and (max-width: 620px) {
      flex-direction: column;
      height: 100px;
    }
  }
  &.hide {
    display: none;
  }
`;
