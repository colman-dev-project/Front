import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './constants/routerPaths';
import App from './App';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import OrderProcess from './pages/OrderProcess/OrderProcess.jsx';
import ProductPage from './pages/ProductPage.jsx';
import ProductListPage from './pages/ProductListPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: ROUTES.HOME, element: <Home /> },
      { path: ROUTES.ABOUT, element: <About /> },
      { path: ROUTES.ORDER_PROCESS, element: <OrderProcess /> },
      { path: ROUTES.PRODUCT_DETAILS, element: <ProductPage /> },
      { path: ROUTES.PRODUCTS, element: <ProductListPage /> },
    ],
  },
]);

export { router };
