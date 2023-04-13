import { XCircle } from 'phosphor-react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (
    <Container isVisible={menuIsVisible}>
      <XCircle
        size={32}
        weight="fill"
        onClick={() => setMenuIsVisible(false)}
      />
      <nav>
        <ul>
          <li><a href="#secao1" onClick={() => setMenuIsVisible(false)}>Sobre</a></li>
          <li><a href="/">Habilidades</a></li>
          <li><a href="/">Cursos</a></li>
          <li><a href="/">Projetos</a></li>
          <li><a href="/">Contato</a></li>
        </ul>
      </nav>
    </Container>
  );
}

MenuMobile.propTypes = {
  menuIsVisible: PropTypes.bool.isRequired,
  setMenuIsVisible: PropTypes.func.isRequired,
};
