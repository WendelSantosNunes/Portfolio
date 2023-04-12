import { ThemeProvider } from 'styled-components';

// Estilos
import GlobalStyles from './assets/styles/global';
import DefaultTheme from './assets/styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <h1>Olá mundo!</h1>
    </ThemeProvider>
  );
}

export default App;
