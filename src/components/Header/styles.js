import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.backgroundHeader};

  padding: 0.875rem;

  margin-bottom: 86px;

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

    .desktop ul {
      display: flex;

      li {
        padding: 15px 20px;
        border-radius: 10px;
        cursor: pointer;
        transition: background-color 0.3s ease-in;

        &:hover {
          background-color: ${({ theme }) => theme.colors.background};
        }
      }

      a{
        color: #fff
      }
    }
  }

  .mobile {
    display: none;
  }

  @media(max-width: 768px) {
    .mobile {
      display: initial;
    }

    .desktop {
      display: none;
    }
  }

  @media(max-width: 576px) {
    div {
      img {
        width: 100%;
        max-width: 2.7rem;
      }
    }
  }
`;
