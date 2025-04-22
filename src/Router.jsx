import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import ProductPage from './pages/ProductPage.jsx';
import ProductListPage from './pages/ProductListPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'products/:id', element: <ProductPage /> },
      { path: 'products', element: <ProductListPage /> },
    ],
  },
]);

export { router };
