import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import TestImgComponent from './components/shared/Image/TestImgComponent';  // Import the test component

function App() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '2rem' }}>
        <Outlet />
        <TestImgComponent />

      </main>
      <Footer />
    </>
  );
}

export default App;
