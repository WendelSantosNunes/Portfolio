import styled, { css } from 'styled-components';

export const Overleay = styled.div`
  position: fixed;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(34deg, #23252B 0%, rgba(17,18,17,0.95) 95%);
  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);
  transition: .5s;

  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);
  `}
`;

export const Container = styled.div`
  background: linear-gradient(34deg, #130F1A 0%, #130F1A 95%);

  width: 100%;
  max-width: 1028px;
  margin: 0 10px 0 10px;
  height: 426px;

  ${({ project }) => project && css`
    height: 476px;
    background-color: red;
  `}

  border-radius: 10px;

  position: relative;

  > svg {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
  }

  > div {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    div{
      width: 100%;

      &.imagensAndLinks {
        margin: 42px 0 0 30px;
        text-align: center;
        max-width: 524px;

        img {
          max-width: 524px;
          height: 100%;
          max-height: 360px;
        }

        img.false{
          width: 100%;
        }

        .links{
          margin-top: 0.8rem;
          display: flex;
          align-items: center;
          text-align: center;

          a + a {
            margin-left: 1rem;
          }

          a {
            background-color: ${({ theme }) => theme.colors.text};
            color: #FFF;
            border-radius: 10px;

            width: 100%;
            max-width: 140px;
            padding: 10px 0;
          }
        }
      }

      &.detailsAndData {
        margin: 42px 30px 0 0px;
        max-width: 424px;
        color: #FFF;

        h2 {
          color: ${({ theme }) => theme.colors.text};
          font-size: 1.2rem;
          margin-bottom: 1rem;
          text-align: left;

          width: 100%;
          max-width: 390px ;
          &::after{
            display: none;
          }
        }

        .details{
          text-align: justify;
          height: 200px;

          font-size: 15px;

          ul {
            margin-top: 0.5rem;
            li {
              margin-left: 20px;
            }
          }
        }

        .date{
          margin-top: 1rem;
          color: ${({ theme }) => theme.colors.text};
        }
      }
    }
  }

  @media(max-width: 62rem) {
    max-width: 700px;
    height: 800px;

    ${({ project }) => project && css`
      height: 750px;
      background-color: red;
    `}

    div {
      flex-direction: column;
      align-items: center;

      div {
        &.imagensAndLinks,  &.detailsAndData {
          margin: 42px 0 0 0;
          max-width: 524px;
        }

        &.imagensAndLinks {

          img {
            padding: 0 30px
          }

          .links{
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
        }

        &.detailsAndData{
          margin-top: 1rem;
          .details{
            height: auto;
          }
        }
      }
    }
  }

  @media(max-width: 48rem){
    > svg {
      position: absolute;
      top: 20px;
      right: 10px;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.text};
    }

    div{
      padding-left: 10px;
      padding-right: 10px;

      div {
        &.imagensAndLinks,  &.detailsAndData{
          max-width: 440px;

          h2 {
            font-size: 1rem;
          }

          p,a {
            font-size: 0.875rem;
          }
        }
      }
    }
  }

  @media(max-width: 36rem) {
    height: 700px;
  }

  @media(max-width: 23.4375rem) {
    height: 620px;

    div{

      div {
        &.imagensAndLinks{
          img.active {
            max-width: 160px;
          }
        }
      }
    }
  }
`;
