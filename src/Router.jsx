import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './constants/routerPaths';
import App from './App';
import Home from './pages/Home/Home.jsx';
import About from './pages/About.jsx';
import OrderProcess from './pages/OrderProcess/OrderProcess.jsx';
import ProductPage from './pages/Product/ProductPage.jsx';
import ProductListPage from './pages/Products/ProductListPage.jsx';
import Manager_bar from './pages/Manager/Manager.jsx';
import Customer_Bar from './pages/Customer/Customer.jsx';
import CartPage from './pages/Cart/CartPage.jsx';
import LoginForm from './components/Forms/LoginForm.jsx';
import SignupForm from './components/Forms/SignUpForm.jsx';
import DashboardCards from './pages/DashboardCards/DashboardCards.jsx';
import NewProductForm from './components/Forms/NewProductForm.jsx';

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
      { path: ROUTES.MANAGER_PAGE, element: <Manager_bar /> },
      { path: ROUTES.CUSTOMER_PAGE, element: <Customer_Bar /> },
      { path: ROUTES.CART, element: <CartPage /> },
      { path: ROUTES.LOGIN, element: <LoginForm /> },
      { path: ROUTES.REGISTER, element: <SignupForm /> },
      { path: ROUTES.DASHBOARD_CARDS, element: <DashboardCards /> },
      { path: ROUTES.NEW_PRODUCT, element: <NewProductForm /> },

    ],
  },
]);

export { router };
