import { Container } from './styles';

import email from '../../assets/images/mail-outline (1).svg';
import linkedin from '../../assets/images/logo-linkedin.svg';
import instagram from '../../assets/images/logo-instagram.svg';
import github from '../../assets/images/logo-github.svg';

export function SocialMedia() {
  return (
    <Container className="container">
      <h2 id="secao5">Contatos</h2>

      <nav>
        <div>
          <a href="mailto:wendelnunes9999@gmail.com" target="_blank" rel="noreferrer"><img src={email} alt="Email" /></a>
          <a href="mailto:wendelnunes9999@gmail.com" target="_blank" rel="noreferrer"><p>E-mail</p></a>
          <a href="mailto:wendelnunes9999@gmail.com" target="_blank" rel="noreferrer" className="perfil"><p>wendelnunes9999@gmail.com</p></a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/wendel-nunes1/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" /></a>
          <a href="https://www.linkedin.com/in/wendel-nunes1/" target="_blank" rel="noreferrer"><p>Linkedin</p></a>
          <a href="https://www.linkedin.com/in/wendel-nunes1/" target="_blank" rel="noreferrer" className="perfil"><p>@wendel_nunes</p></a>
        </div>
        <div>
          <a href="https://www.instagram.com/wendelnunes1/" target="_blank" rel="noreferrer"><img src={instagram} alt="Instagram" /></a>
          <a href="https://www.instagram.com/wendelnunes1/" target="_blank" rel="noreferrer"><p>Instagram</p></a>
          <a href="https://www.instagram.com/wendelnunes1/" target="_blank" rel="noreferrer" className="perfil"><p>wendelnunes1</p></a>
        </div>
        <div>
          <a href="https://github.com/WendelSantosNunes" target="_blank" rel="noreferrer"><img src={github} alt="Github" /></a>
          <a href="https://github.com/WendelSantosNunes" target="_blank" rel="noreferrer"><p>Github</p></a>
          <a href="https://github.com/WendelSantosNunes" target="_blank" rel="noreferrer" className="perfil"><p>WendelSantosNunes</p></a>
        </div>
      </nav>
    </Container>
  );
}
