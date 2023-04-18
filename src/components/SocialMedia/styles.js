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
      width: 150px;
      margin-left: auto;
    }
  }

  nav {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 250px));
    grid-gap: 15px;
    justify-content: space-between;
    margin-bottom: 150px;

    div {
      img{
        width: 100%;
        max-width: 120px;
      }

      a {
        color: #fff;
      }

      .perfil {
        color: #82807F;
      }

      text-align: center;
    }

    @media(max-width: 48rem){
      justify-content: center;
      gap: 40px;
    }
  }
`;
