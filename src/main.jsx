import { createRoot } from 'react-dom/client';
import GlobalStyle from './styles/global';
import Home from './pages/Home';

createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyle />
    <Home />
  </>
);
