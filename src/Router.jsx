import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './constants/routerPaths';
import App from './App';
import Home from './pages/Home/Home.jsx';
import About from './pages/About.jsx';
import OrderProcess from './pages/OrderProcess/OrderProcess.jsx';
import ProductPage from './pages/ProductPage.jsx';
import ProductListPage from './pages/ProductListPage.jsx';
import Manager_bar from './pages/Manage/Manage.jsx';
import Customer_Bar from './pages/Customer/Customer.jsx';
import LoginForm from './components/Forms/LoginForm.jsx';

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
      { path: ROUTES.MANAGE_PAGE, element: <Manager_bar /> },
      { path: ROUTES.CUSTOMER_PAGE, element: <Customer_Bar /> },
      { path: ROUTES.LOGIN, element: <LoginForm /> },
    ],
  },
]);

export { router };
