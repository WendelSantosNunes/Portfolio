import { ThemeProvider } from 'styled-components';

// Estilos
import GlobalStyles from './assets/styles/global';
import DefaultTheme from './assets/styles/themes/default';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}

export default App;
