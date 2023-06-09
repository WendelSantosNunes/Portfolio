import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.backgroundHeader};

  padding: 0.875rem;

  margin-bottom: 5.375rem;

  position: sticky;
  top: 0;
  z-index: 100;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
      width: 100%;
      max-width: 3.4375rem;
    }

    svg {
      cursor: pointer;
    }


    .desktop ul {
      display: flex;


      li{
        list-style: none;
        a {
          padding: 0.9375rem 1.25rem;
          border-radius: 0.625rem;
          cursor: pointer;
          transition: background-color 0.3s ease-in;

          &:hover {
            background-color: ${({ theme }) => theme.colors.text};
          }
        }
      }

      a{
        color: #fff;
        font-size: 1rem;
      }
    }
  }

  .mobile {
    display: none;
  }

  @media(max-width: 48rem) {
    .mobile {
      display: initial;
    }

    .desktop {
      display: none;
    }
  }

  @media(max-width: 36rem) {
    div {
      img {
        width: 100%;
        max-width: 2.7rem;
      }
    }
  }
`;
