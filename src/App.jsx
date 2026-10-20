import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Intro from './pages/Intro.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
