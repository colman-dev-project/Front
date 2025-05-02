import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './constants/routerPaths';
import App from './App';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import OrderProcess from './pages/OrderProcess/OrderProcess.jsx';
import Manager_bar from './pages/Manage/Manage.jsx';
import Customer_Bar from './pages/Customer/Customer.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: ROUTES.ORDER_PROCESS, element: <OrderProcess /> },
      { path: ROUTES.MANAGE_PAGE, element:<Manager_bar/> },
      { path: ROUTES.CUSTOMER_PAGE, element:<Customer_Bar/> },
      
    ],
  },
]);

export { router };
