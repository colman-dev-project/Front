import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import ActionButton from './components/shared/Button/ActionButton.jsx';
import { BUTTON_VARIANTS } from './constants/buttonTypes.js';



function App() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}>
          <ActionButton styleType={BUTTON_VARIANTS.FILLED}>Filled</ActionButton>
          <ActionButton styleType={BUTTON_VARIANTS.OUTLINED}>Outlined</ActionButton>
          <ActionButton styleType={BUTTON_VARIANTS.TEXT}>Text</ActionButton>
          <ActionButton styleType={BUTTON_VARIANTS.NAVBAR}>Navbar</ActionButton>
          <ActionButton styleType={BUTTON_VARIANTS.DEFAULT}>Default</ActionButton>
        </div>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;


