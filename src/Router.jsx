import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./constants/routerPaths";
import App from "./App";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import OrderProcess from "./pages/OrderProcess/OrderProcess.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: ROUTES.ORDER_PROCESS, element: <OrderProcess /> }

    ],
  },
]);

export { router };
