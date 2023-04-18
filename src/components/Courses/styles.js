import styled from 'styled-components';

export const Container = styled.section`
  h2 {
    font-size: 2rem;
    margin-bottom: 5rem;
    text-align: right;

    &::after{
      content: "";
      display: block;
      border-bottom: 3px solid ${({ theme }) => theme.colors.text};
      width: 115px;
      margin-left: auto;
    }
  }

  H3 {
    font-size: 1.5rem;
    margin-bottom: 2.5rem;

    &::after{
      content: "";
      display: block;
      border-bottom: 3px solid ${({ theme }) => theme.colors.text};
      width: 17.5rem;
    }

    @media(max-width: 24.125rem) {
      font-size: 1.1rem;
      max-width: 250px;

      &::after{
        width: 13rem;
      }
    }
  }

  .HigherCourses,.onlineCourses {
    margin-bottom: 2.5rem;

    div{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(352px, 1fr));
      grid-gap: 15px;
      justify-content: center;

      > div {
        display: flex;
        justify-content: center;
        margin-bottom: 1.5rem;

        position: relative;
        cursor: pointer;

        img{
          width: 100%;
          max-width: 19.275625rem;
          /* height: 217px; */
        }

        .description {
          display: none;
          background-color: ${({ theme }) => theme.colors.backgroundHeader};
          width: 100%;
          max-width: 311px;
          border-radius: 0 0 1rem 1rem;
          bottom: -42px;
          padding: 0.7rem;
          position: absolute;

          p, button {
            font-size: 14px;
          }

          button {
            background-color: transparent;
            padding: 5px;
            border: 1px solid  ${({ theme }) => theme.colors.text};
            border-radius: 10px;
            color: #fff;

            &:hover {
              background-color: ${({ theme }) => theme.colors.text};
            }
          }
        }

        &:hover {
          .description {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          div{
            transform: scale(1.1);
            transition: transform 0.3s ease-in;
          }
        }
      }

      @media(max-width: 24.125rem) {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

        > div {
          .description {
            max-width: 250px;
          }

          &:hover {
            div{
              transform: scale(1.0);
              transition: transform 0.15s ease-in;
            }
          }

          img {
            max-width: 250px;
          }
        }
      }
    }
  }

  .onlineCourses{
    h3 {
      &::after {
        width: 10.5rem;
      }

      @media(max-width: 24.125rem) {
        font-size: 1.1rem;
        max-width: 250px;

        &::after{
          width: 7.6rem;
        }
      }
    }
  }
`;
