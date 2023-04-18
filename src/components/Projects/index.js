import { useState } from 'react';
import { Container } from './styles';
import { Modal } from '../Modal';

import paad from '../../assets/images/PAAD.png';
// import seLigaUpfi from '../../assets/images/seLigaUfpi.png';
import myContacts from '../../assets/images/myContacts.png';
import coffe from '../../assets/images/coffe.png';

export function Projects() {
  const [projectIsVisible, SetprojectIsVisible] = useState(false);
  const [project, SetProject] = useState({});

  const projectList = [
    {
      title: 'MyContacts',
      image: myContacts,
      date: 'Em andamento',
      text: 'Em andamento',
      info: {
        linkproject: 'https://github.com/WendelSantosNunes/SeLig-UFPI',
        linkWebSite: 'https://wendelnunes.pythonanywhere.com/',
        // linkPost: 'http',
      },
    },
    {
      title: 'Pesquisas Avançadas em Análise de Dados (PAAD)',
      image: paad,
      date: '29 de março de 2023',
      text: (
        <>
          O objetivo deste projeto é compartilhar informações sobre o laboratório de pesquisas avançadas em análise de dados (PAAD) da CSHNB/UFPI. Durante seu desenvolvimento, foram aplicados diversos conhecimentos adquiridos na faculdade e em estudos independentes, como HTML 5, JavaScript, CSS, Styled Components e React.
        </>
      ),
      info: {
        linkproject: 'https://github.com/WendelSantosNunes/PaadUfpi',
        linkWebSite: 'https://paad-ufpi-front.vercel.app/',
      },
    },
    // {
    //   title: 'Se Liga Ufpi',
    //   image: seLigaUpfi,
    //   date: '29 de março de 2023',
    //   text: (
    //     <>
    //       Em andamento!
    //       Este projeto foi desenvolvido durante a disciplina de Programação para Web II com meus colegas Eva e Josean.
    //       {' '}
    //       <br />
    //       Trata-se de um local de conexão para todos que fazem parte do Campus Senador Helvídio Nunes de Barros (CSHNB). Após a pandemia de COVID-19 e o retorno das aulas presenciais, havia uma certa distância entre a comunidade acadêmica do CSHNB . O Se Lig@ UFPI foi criado para quebrar o gelo e aproximar as pessoas.
    //     </>
    //   ),
    //   info: {
    //     linkproject: 'https://github.com/WendelSantosNunes/SeLig-UFPI',
    //     linkWebSite: 'https://wendelnunes.pythonanywhere.com/',
    //     // linkPost: 'http',
    //   },
    // },
    {
      title: 'Coffee Delivery',
      image: coffe,
      date: '18 de novembro de 2022',
      text: (
        <>
          Este foi um dos desafios do curso Ignite da Rocketseat. O objetivo deste desafio é criar um site que possibilite a revisão dos conteúdos aprendidos no segundo módulo, tais como React, TypeScript, Styled Components e localStorage.
        </>
      ),
      info: {
        linkproject: 'https://github.com/WendelSantosNunes/SeLig-UFPI',
        linkWebSite: 'https://ignite-react-desafio-2.vercel.app/',
      },
    },
    {
      title: 'Coffee Delivery',
      image: coffe,
      date: '23 de outubro de 2022',
      text: (
        <>
          Este foi um dos desafios do curso Ignite da Rocketseat. O objetivo deste desafio é criar um site de todo-list para revisar os conteúdos aprendidos no primeiro módulo, tais como React, TypeScript e CSS Modules.
        </>
      ),
      info: {
        linkproject: 'https://github.com/WendelSantosNunes/SeLig-UFPI',
        linkWebSite: 'https://ignite-react-desafio-2.vercel.app/',
      },
    },
  ];

  function projectActive(index) {
    SetProject(projectList[index]);
    SetprojectIsVisible(true);
  }

  return (
    <Container className="container project">
      <Modal
        courseIsVisible={projectIsVisible}
        SetCourseIsVisible={SetprojectIsVisible}
        course={project}
        projectModal
      />
      <h2 id="secao4">
        Projetos
      </h2>

      <div className="HigherCourses">
        <div>
          {
            projectList.map((item, index) => (
              <div key={item.title}>
                <div>
                  <img src={item.image} alt="Paad UFPI" />

                </div>
                <div className="description">
                  <p>{item.date}</p>
                  <button
                    type="button"
                    onClick={() => projectActive(index)}
                  >
                    Ver mais
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </Container>
  );
}
