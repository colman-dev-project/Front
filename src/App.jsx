import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import { ExamplePage } from './components/shared/Select/TestSelect.jsx';

function App() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '2rem' }}>
        <Outlet />
        <ExamplePage />
      </main>
      <Footer />
    </>
  );
}

export default App;
