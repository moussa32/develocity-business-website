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
        <meta property="og:image" content="/apple-icon-114x114.png" />
        <meta property="og:image:width" content="114" />
        <meta property="og:image:height" content="114" />
        <link rel="icon" type="image/x-icon" href="favicon.png"></link>
        <link rel="apple-touch-icon" href="favicon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
      </Helmet>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
