import { Container, Card } from './styles';

import skilsImg1 from '../../assets/images/logo-html5.svg';
import skilsImg2 from '../../assets/images/logo-css3.svg';
import skilsImg3 from '../../assets/images/logo-javascript.svg';
import skilsImg4 from '../../assets/images/logo-react.svg';
import skilsImg5 from '../../assets/images/logo-nodejs.svg';
import skilsImg6 from '../../assets/images/logo-sass.svg';
import skilsImg7 from '../../assets/images/logo-python.svg';

export function Skills() {
  const skilsArray = [
    {
      title: 'HMTL 5',
      image: skilsImg1,
    },
    {
      title: 'CSS',
      image: skilsImg2,
    },
    {
      title: 'JavaScript',
      image: skilsImg3,
    },
    {
      title: 'React',
      image: skilsImg4,
    },
    {
      title: 'Node',
      image: skilsImg5,
    },
    {
      title: 'Sass',
      image: skilsImg6,
    },
    {
      title: 'Python',
      image: skilsImg7,
    },
  ];

  return (
    <Container className="container">
      <h2 id="secao2">Habilidades</h2>

      <div>
        {
          skilsArray.map((item) => (
            <Card key={item.title}>
              <h3>{item.title}</h3>
              <img src={item.image} alt="" />
            </Card>
          ))
        }
      </div>
    </Container>
  );
}
