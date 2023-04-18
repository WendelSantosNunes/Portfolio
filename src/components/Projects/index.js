import { useState } from 'react';
import { Container } from './styles';
import { Modal } from '../Modal';

import paad from '../../assets/images/PAAD.png';
import seLigaUpfi from '../../assets/images/seLigaUfpi.png';
import myContacts from '../../assets/images/myContacts.png';

export function Projects() {
  const [projectIsVisible, SetprojectIsVisible] = useState(false);
  const [project, SetProject] = useState({});

  const projectList = [
    {
      title: 'MyContacts',
      image: myContacts,
      date: 'Em andamento',
      text: 'Andamento',
      info: {
        linkproject: 'https://github.com/WendelSantosNunes/SeLig-UFPI',
        linkWebSite: 'https://wendelnunes.pythonanywhere.com/',
        // linkPost: 'http',
      },
    },
    {
      title: 'PAAD',
      image: paad,
      date: '29 de março de 2023',
      text: 'Andamento',
      info: {
        linkproject: 'https://github.com/WendelSantosNunes/PaadUfpi',
        linkWebSite: 'https://paad-ufpi-front.vercel.app/',
      },
    },
    {
      title: 'Se Liga Ufpi',
      image: seLigaUpfi,
      date: '29 de março de 2023',
      text: 'Andamento',
      info: {
        linkproject: 'https://github.com/WendelSantosNunes/SeLig-UFPI',
        linkWebSite: 'https://wendelnunes.pythonanywhere.com/',
        // linkPost: 'http',
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
      <h2 id="secao4">Projetos</h2>

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
