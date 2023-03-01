import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./modules/Home";
import Layout from "./modules/Layout/Layout";
import PricingPage from "./modules/Pricing/PricingPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pricing",
        element: <PricingPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
