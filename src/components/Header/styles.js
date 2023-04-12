import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.backgroundHeader};

  padding: 28px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav ul {
      display: flex;

      li + li {
        margin-left: 10px;
      }

      a{
        color: #fff
      }
    }
  }
`;
