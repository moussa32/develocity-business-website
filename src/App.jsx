import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./modules/Home";
import Layout from "./modules/Layout/Layout";
import PricingPage from "./modules/Pricing/PricingPage";
import { Helmet } from "react-helmet";

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
  return (
    <>
      <Helmet>
        <title>Develocity Solutions | Blockchain, NFT, Gaming, Mobile Apps & SaaS Solutions</title>
        <meta
          name="descrption"
          content="Explore Develocity.solutions for cutting-edge blockchain, NFT, NFT gaming, mobile app, and SaaS development services. Elevate your business with our innovative, secure, and user-friendly digital solutions."
        />
        <meta
          name="keywords"
          content="blockchain development, NFT marketplace, NFT gaming, mobile app development, SaaS development, digital transformation, Develocity Ssolutions, decentralized technology, non-fungible tokens, innovative solutions"
        />
      </Helmet>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
