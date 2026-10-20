import './Home.css';
import Paper from '../components/home/Paper.jsx';
import Nav from '../components/home/Navbar.jsx';

function Home() {
  return (
    <div className="home">
      <Paper />

      <div className="floating-nav">
        <Nav />
      </div>
    </div>
  );
}

export default Home;
