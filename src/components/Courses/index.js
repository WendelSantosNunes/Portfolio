import { useState } from 'react';
import { Container } from './styles';
import { Modal } from '../Modal';

// imagens
import JStack from '../../assets/images/JStack.png';
import RocketseatEspecializar from '../../assets/images/Rocketseat-Especializar.png';
import RocketseatFundamentar from '../../assets/images/Rocketseat-Fundamentar.png';
import RocketseatConectar from '../../assets/images/Rocketseat-Conectar.png';
import OrigamidFlexbox from '../../assets/images/Origamid - CSS Flexbox.png';
import OrigamidWebDesign from '../../assets/images/Origamid-Web Design Completo.png';
import UFPI from '../../assets/images/UFPI.png';

export function Courses() {
  const [courseIsVisible, SetCourseIsVisible] = useState(false);
  const [course, SetCourse] = useState({});

  const higherCoursesArray = [
    {
      title: 'Universidade Federal do Piauí',
      image: UFPI,
      date: 'Em andamento',
      text: 'Estou atualmente no 7º período do curso de Sistemas de Informação da Universidade Federal do Piauí.',
    },
  ];

  const onlineCoursesArray = [
    {
      title: 'JStack',
      image: JStack,
      date: 'Em andamento',
      text: 'Estou fazendo atualmente este curso que ensina conceitos avançados de React e básicos de React Native.',
    },
    {
      title: 'Rocketseat - Especializar',
      image: RocketseatEspecializar,
      date: '07 de abril de 2024',
      text: 'Neste curso, aprendemos a construir APIs do zero no back-end, bem como a consumir APIs já existentes usando Fetch e Axios. Além disso, aprofundamos conceitos importantes do JavaScript, como async/await, promises e callbacks, e o básico do TypeScript. Por fim, aprendemos a utilizar algumas ferramentas e técnicas do GitHub para trabalhar em equipe.',
    },
    {
      title: 'Rocketseat - Fundamentar',
      image: RocketseatFundamentar,
      date: '15 de abril de 2023',
      text: 'No curso Fundamentos da Rocketseat, aprendemos a construir nossos primeiros websites. Durante o curso, foram aprofundados conceitos fundamentais da web(HTML, CSS, JS, Git, Node e SQL) e aplicados desafios práticos para fixação do conteúdo. Além disso, foram apresentados conceitos importantes para o gerenciamento de dados, como arrays, matrizes, stack e queue, e para a programação orientada a objetos, incluindo classes, encapsulamento, herança, polimorfismo e abstração.',
    },
    {
      title: 'Rocketseat -Conectar',
      image: RocketseatConectar,
      date: '07 de abril de 2023',
      text: 'Esse é o curso básico da Rocketseat, onde aprendemos o conhecimento básico sobre programação e tecnologia, desde a diferenciação entre hardware e software, a internet e seu papel no desenvolvimento, até o pensamento computacional e lógico, passando pelos tipos de aplicações web e linguagens de programação. ',
    },
    {
      title: 'Origamid - Curso de Flexbox',
      image: OrigamidFlexbox,
      date: '29 de agosto de 2021',
      text: 'Durante esse curso, foram ensinados todos os fundamentos e propriedades do CSS Flexbox através de um projeto prático. Além disso, aprendemos a utilizar essa técnica para criar designs responsivos.',
    },
    {
      title: 'Origamid - Curso de Web Design Completo',
      image: OrigamidWebDesign,
      date: '18 de fevereiro de 2021',
      text: 'Esse curso é ideal para quem deseja adquirir o conhecimento básico sobre criação de websites. O curso tem foco na teoria e prática, e a metodologia utilizada possibilita que você aprenda os fundamentos por trás de cada decisão de design ou código (HTML, CSS e JS). Além disso, o curso conta com um projeto prático, o bikcraft.com, onde podemos colocar em prática todo o conhecimento adquirido.',
    },
  ];

  function detailsCourseOnline(index) {
    SetCourse(onlineCoursesArray[index]);
    SetCourseIsVisible(true);
  }

  function detailsCourseHigher(index) {
    SetCourse(higherCoursesArray[index]);
    SetCourseIsVisible(true);
  }

  return (
    <Container className="container">
      <Modal
        courseIsVisible={courseIsVisible}
        SetCourseIsVisible={SetCourseIsVisible}
        course={course}
        projectModal={false}
      />
      <h2 id="secao3">Cursos</h2>

      <div className="HigherCourses">
        <h3>Faculdade(Andamento)</h3>

        <div>
          {
            higherCoursesArray.map((item, index) => (
              <div key={item.title}>
                <div>
                  <img src={item.image} alt="Paad UFPI" />
                </div>
                <div className="description">
                  <p>{item.date}</p>
                  <button
                    type="button"
                    onClick={() => detailsCourseHigher(index)}
                  >
                    Ver mais
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="onlineCourses">
        <h3>Cursos Online</h3>

        <div>
          {
            onlineCoursesArray.map((item, index) => (
              <div key={item.title}>
                <div>
                  <img src={item.image} alt="Paad UFPI" />
                </div>
                <div className="description">
                  <p>{item.date}</p>
                  <button
                    type="button"
                    onClick={() => detailsCourseOnline(index)}
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
