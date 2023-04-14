import styled from 'styled-components';

export const Container = styled.section`
  .profile{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;


    div {
      p {
        font-size: 2.25rem;

        &:nth-child(1){
          margin-bottom: 1rem;
        }

        &:nth-child(3){
          margin-top: 1rem;
        }
      }

      strong {
        color: ${({ theme }) => theme.colors.text};
        font-size: 4.25rem;
        font-weight: 900;
      }
    }

    img {
      width: 100%;
      max-width: 34rem;
    }

    @media(max-width: 75rem) {
      div{
        p {
          font-size: 1.75rem;
        }

        strong {
          font-size: 3.375rem;
        }
      }

      img {
        max-width: 28.125rem;
      }
    }

    @media(max-width: 62rem) {
      flex-direction: column-reverse;
      justify-content: center;

      img{
        margin-bottom: 2rem;
      }
    }

    @media(max-width: 36rem) {
      div{
        p {
          font-size: 1.7rem;
        }

        strong {
          font-size: 2.5rem;
        }
      }

      img {
        max-width: 20rem;
      }
    }

    @media(max-width: 24.125rem) {
      div{
        p {
          font-size: 1.2rem;
        }

        strong {
          font-size: 2.0rem;
        }
      }

      img {
        max-width: 18rem;
      }
    }
  }
`;

export const AboutContainer = styled.div`
  text-align: center;
  margin-top: 7.5rem;
  margin-bottom: 7.5rem;


  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 3.5rem;

    &::after{
      content: "";
      display: block;
      border-bottom: 3px solid ${({ theme }) => theme.colors.text};
      margin: 0 auto;
      width: 120px;
    }
  }

  > div{
    width: 100%;
    display: flex;
    justify-content: space-between;

    div{
      max-width: 544px;

      font-size: 1.25rem;
      text-align: justify;
      color: #EEE;

      p + p{
        margin-top: 1.25rem;
      }

      .curriculum{
        margin-top: 3rem;

        text-align: center;

        a {
          color: #fff;
          border: 1px solid #fff;
          border-radius: 10px;
          padding: 20px 40px;
          transition: 0.3s ease-in;

          &:hover {
            background-color: ${({ theme }) => theme.colors.text};
            border-color: ${({ theme }) => theme.colors.text};
          }
        }
      }
    }

    .image img{
      max-width: 352px;
    }
  }

  @media(max-width: 62rem) {
    > div{
      gap: 20px;

      div {
        max-width: 500px;
      }
    }
  }

  @media(max-width: 48rem) {
    margin-top: 5rem;

    > div {
      flex-direction: column-reverse;

      div {
        max-width: 100%;
        font-size: 18px;
      }

      .image {
        display: flex;
        justify-content: center;

        img {
          width: 100%;
        }
      }
    }
  }

  @media(max-width: 36rem) {
    > div {

      div {
        font-size: 16px;
      }
    }
  }

  @media(max-width: 23.4375rem) {
    h2 {
      font-size: 32px;
    }
    > div {

      div {
        font-size: 14px;
      }
    }
  }
`;
