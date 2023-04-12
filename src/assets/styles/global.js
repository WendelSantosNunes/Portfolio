import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body{
    background-color: ${({ theme }) => theme.colors.background};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.main};
  }

  button {
    cursor: pointer;
  }

  .container {
    max-width: 70rem;
    width: 100%;
    padding: 0rem 1rem;
    margin: 0 auto;
  }

  a{
    text-decoration: none;
    padding: 0;
    margin: 0;
  }

  ul,li {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
`;
