import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <div className="container">
        <h1>Wendel</h1>
        <nav>
          <ul>
            <li><a href="/">Sobre</a></li>
            <li><a href="/">Projetos</a></li>
            <li><a href="/">Eventos</a></li>
          </ul>
        </nav>
      </div>
    </Container>
  );
}
