import "./css/reset.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Deportes from "./pages/Deportes/Deportes";
import Economia from "./pages/Economia/Economia";
import Teconologia from "./pages/Tecnologia/Teconologia";
import Noticias from "./pages/Noticias/Noticias";
import Main from "./components/main/Main";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/Error-404/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/tecnologia" element={<Teconologia />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/economia" element={<Economia />} />
          <Route path="/deportes" element={<Deportes />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
