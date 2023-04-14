import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(17, 18, 17, 0.95);
  background: linear-gradient(34deg, #23252B 0%, rgba(17,18,17,0.95) 95%);
  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);
  transition: .5s;

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: .7s;
  }

  nav{
    width: 100%;
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 2rem;
      transform: scale(0.7);
      transition: .7s;

      a{
        color: #fff;
        font-size: 20px;
        padding: 15px 20px;
        border-radius: 10px;
        transition: background-color 0.2s ease-in-out;

        &:hover{
          background-color: ${({ theme }) => theme.colors.background};
        }
      }
    }
  }

  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);

    > svg{
      transform: rotate(0deg);
    }

    nav ul{
      transform: scale(1);
    }
  `}

  @media (max-width: 48rem) {
    z-index: 10;
  }
`;
