import './css/reset.css';
import './App.css';

import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './components/main/Main';
import Noticia from './components/noticia/Noticia';
import Deportes from './pages/Deportes/Deportes';
import Economia from './pages/Economia/Economia';
import ErrorPage from './pages/Error-404/ErrorPage';
import Home from './pages/Home/Home';
import Noticias from './pages/Noticias/Noticias';
import Teconologia from './pages/Tecnologia/Teconologia';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`color-${theme}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<Home />} />
            <Route path="/tecnologia" element={<Teconologia />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/economia" element={<Economia />} />
            <Route path="/deportes" element={<Deportes />} />
            <Route path="/noticias/:id" element={<Noticia />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
