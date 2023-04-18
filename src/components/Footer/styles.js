import styled from 'styled-components';

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.backgroundHeader};

  padding: 1.5rem 0;

  div {
    font-size: 1.125rem;
    font-weight: bold;
    text-align: center;

    @media(max-width: 36rem){
      font-size: 0.9375rem;
      justify-content: center;
    }
  }
`;
