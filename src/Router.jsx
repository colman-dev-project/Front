import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import OrderProcess from "./pages/OrderProcess.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "orderProcess", element: <OrderProcess /> },
    ],
  },
]);

export { router };
