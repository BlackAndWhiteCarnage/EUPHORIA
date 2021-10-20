import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 205px;
  min-height: 65px;
  @media screen and (max-width: 1250px) {
    max-width: 60px;
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
    min-height: 25px;
    margin-bottom: 50px;
  }
  &:hover {
    transform: scale(1.6);
    transition: 0.5s ease;
  }
`;
