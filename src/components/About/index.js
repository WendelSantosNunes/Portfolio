import { Container, AboutContainer } from './styles';

import ImgSobre from '../../assets/images/undraw_programming_re_kg9v 1.svg';

export function About() {
  return (
    <Container className="container">
      <div className="profile">
        <div>
          <p>Olá, eu sou o</p>
          <strong>Wendel Santos</strong>
          <p>Front-End Developer</p>
        </div>
        <img src={ImgSobre} alt="Desenho" />
      </div>

      <AboutContainer>
        <h2 id="secao1">Sobre</h2>
        <div>
          <div>
            <p>
              Olá, meu nome é
              {' '}
              <strong>Wendel</strong>
              , tenho 23 anos e resido em Picos-PI. Atualmente, estou cursando o 7º período de
              {' '}
              <strong>Sistemas de Informação na Universidade Federal do Piauí</strong>
              {' '}
              e estou em busca de minha primeira oportunidade profissional, seja na forma de um
              {' '}
              <strong>estágio </strong>
              ou outra posição compatível com minha formação.
            </p>

            <p>
              Ao longo da minha trajetória acadêmica, desenvolvi um forte interesse na área da web e venho me aprimorando constantemente nesse campo, tanto por meio de estudos complementares quanto de projetos pessoais. Tenho grande afinidade com tecnologias como
              {' '}
              <strong>
                HTML, CSS, JavaScript, React, Django e outras ferramentas para desenvolvimento web
              </strong>
              .
            </p>

            <p>Acredito que minha dedicação, disciplina e persistência são características que contribuirão positivamente em qualquer ambiente de trabalho. Sou uma pessoa pontual e sempre comprometida em superar desafios e entregar resultados de qualidade.</p>

            <div className="curriculum">
              <a href="https://drive.google.com/file/d/1xAwYAQzy4oOWxfj1WpeQha8yEO5Ia1-r/view?usp=share_link" target="_blank" rel="noreferrer">Currículo</a>
            </div>
          </div>
          <div className="image">
            <img src="https://avatars.githubusercontent.com/u/63923854?v=4" alt="" />
          </div>
        </div>
      </AboutContainer>
    </Container>
  );
}
