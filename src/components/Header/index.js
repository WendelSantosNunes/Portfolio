import { useState } from 'react';

// Imagens e estilos
import { List } from 'phosphor-react';
import logo from '../../assets/images/logo.svg';
import { Container } from './styles';

// Componentes
import { MenuMobile } from '../MenuMobile';

export default function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <Container>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <div className="container">
        <img src={logo} alt="Logo" />

        <nav className="desktop">
          <ul>
            <li><a href="#secao1">Sobre</a></li>
            <li><a href="#secao2">Habilidades</a></li>
            <li><a href="#secao3">Cursos</a></li>
            <li><a href="#secao4">Projetos</a></li>
            <li><a href="/">Contato</a></li>
          </ul>
        </nav>

        <List size={32} weight="fill" onClick={() => setMenuIsVisible(true)} className="mobile">teste</List>
      </div>
    </Container>
  );
}
