import { ThemeProvider } from 'styled-components';

// Estilos
import GlobalStyles from './assets/styles/global';
import DefaultTheme from './assets/styles/themes/default';
import Header from './components/Header';

// Componentes
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Courses } from './components/Courses';
import { Projects } from './components/Projects';

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Header />
      <About />
      <Skills />
      <Courses />
      <Projects />
    </ThemeProvider>
  );
}

export default App;
