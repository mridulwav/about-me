import { Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import Intro from './Intro.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
