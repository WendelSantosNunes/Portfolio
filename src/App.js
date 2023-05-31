import { ThemeProvider } from 'styled-components';
import { inject } from '@vercel/analytics';

// Estilos
import GlobalStyles from './assets/styles/global';
import DefaultTheme from './assets/styles/themes/default';
import Header from './components/Header';

// Componentes
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Courses } from './components/Courses';
import { Projects } from './components/Projects';
import { SocialMedia } from './components/SocialMedia';
import { Footer } from './components/Footer';

function App() {
  inject();

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Header />
      <About />
      <Skills />
      <Courses />
      <Projects />
      <SocialMedia />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
