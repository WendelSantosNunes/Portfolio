import styled from 'styled-components';

export const Container = styled.section`

  h2{
    font-size: 2rem;
    margin-bottom: 5rem;

    &::after{
      content: "";
      display: block;
      border-bottom: 3px solid ${({ theme }) => theme.colors.text};
      width: 185px;
    }
  }

  > div{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    grid-gap: 20px;
    margin-bottom: 5rem;

    div {
      margin: 0 auto;
    }

    @media (max-width: 24.125rem) {
      grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    }
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundHeader};

  width: 100%;
  max-width: 160px;
  height: 160px;

  border-bottom: solid 2px ${({ theme }) => theme.colors.text};
  border-radius: 50px 0 0 0;
  text-align: center;

  h3 {
    padding-top: 22px;
    margin-bottom: 13px;
  }

  img {
    width: 100%;
    max-width: 90px;
  }

  @media(max-width: 36rem) {
    max-width: 140px;

  }

  @media (max-width: 24.125rem) {
    max-width: 120px;
    img {
      width: 100%;
      max-width: 80px;
    }
  }
`;
