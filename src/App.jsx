import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Intro from './pages/Intro.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
