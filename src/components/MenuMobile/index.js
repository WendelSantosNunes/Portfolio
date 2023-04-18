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
          <li><a href="#secao2" onClick={() => setMenuIsVisible(false)}>Habilidades</a></li>
          <li><a href="#secao3" onClick={() => setMenuIsVisible(false)}>Cursos</a></li>
          <li><a href="#secao4" onClick={() => setMenuIsVisible(false)}>Projetos</a></li>
          <li><a href="#secao5" onClick={() => setMenuIsVisible(false)}>Contato</a></li>
        </ul>
      </nav>
    </Container>
  );
}

MenuMobile.propTypes = {
  menuIsVisible: PropTypes.bool.isRequired,
  setMenuIsVisible: PropTypes.func.isRequired,
};
