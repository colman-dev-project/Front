import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';

// 🔽 ייבוא כפתורים לבדיקה
import CartButton from "./components/shared/IconButtons/CartButton.jsx";
import LoginButton from "./components/shared/IconButtons/LoginButton.jsx";
import LogoutButton from "./components/shared/IconButtons/LogoutButton.jsx";


function App() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '2rem' }}>
        {/* 🔽 בדיקה זמנית של הכפתורים */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <CartButton onClick={() => console.log('Cart clicked')} />
          <LoginButton onClick={() => console.log('Login clicked')} />
          <LogoutButton onClick={() => console.log('Logout clicked')} />
        </div>

        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
