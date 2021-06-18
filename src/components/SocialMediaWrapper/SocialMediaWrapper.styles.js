import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  margin-bottom: 5px;
  @media screen and (max-width: 1250px) {
    padding-top: 20px;
    flex-direction: column;
    position: absolute;
    height: 100%;
    justify-content: flex-start;
    top: 50%;
    transform: translate(0, -50%);
    right: 0;
    background: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const Icon = styled.img`
  width: 18px;
  max-height: 18px;
  transition: 0.3s ease;
  @media screen and (max-width: 1250px) {
    min-height: 25px;
    margin-bottom: 50px;
  }
  &:hover {
    transform: scale(1.6);
    transition: 0.5s ease;
  }
`;
