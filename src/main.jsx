import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoaderProvider } from "./components/Context/LoaderContext.jsx";
import { DataProvider } from "./components/Context/DataContext.jsx";
import { AuthProvider } from "./components/Context/AuthContext.jsx";
import { LoaderFallback } from "./components/LoaderFallback/LoaderFallback.jsx";

const Home = React.lazy(() =>
  import("./components/Route.jsx").then((m) => ({ default: m.Home }))
);
const About = React.lazy(() =>
  import("./components/Route.jsx").then((m) => ({ default: m.About }))
);
const ContactUs = React.lazy(() =>
  import("./components/Route.jsx").then((m) => ({ default: m.ContactUs }))
);
const Blog = React.lazy(() =>
  import("./components/Route.jsx").then((m) => ({ default: m.Blog }))
);
const BrowseCategory = React.lazy(() =>
  import("./components/BrowseCategory/BrowseCategory.jsx")
);
const BonusProgram = React.lazy(() =>
  import("./components/Route.jsx").then((m) => ({ default: m.BonusProgram }))
);
const GiftCards = React.lazy(() =>
  import("./components/Route.jsx").then((m) => ({ default: m.GiftCards }))
);
const Credits = React.lazy(() =>
  import("./components/Route.jsx").then((m) => ({ default: m.Credits }))
);
const ServiceContracts = React.lazy(() =>
  import("./components/Route.jsx").then((m) => ({
    default: m.ServiceContracts,
  }))
);
const NonCashout = React.lazy(() =>
  import("./components/Route.jsx").then((m) => ({ default: m.NonCashout }))
);
const Payments = React.lazy(() =>
  import("./components/Route.jsx").then((m) => ({ default: m.Payments }))
);
const FindOrder = React.lazy(() =>
  import("./components/Route.jsx").then((m) => ({ default: m.FindOrder }))
);
const DeliveryTerms = React.lazy(() =>
  import("./components/Route.jsx").then((m) => ({ default: m.DeliveryTerms }))
);
const Exchange = React.lazy(() =>
  import("./components/Route.jsx").then((m) => ({ default: m.Exchange }))
);
const Guarantee = React.lazy(() =>
  import("./components/Route.jsx").then((m) => ({ default: m.Guarantee }))
);
const Questions = React.lazy(() =>
  import("./components/Route.jsx").then((m) => ({ default: m.Questions }))
);
const Terms = React.lazy(() =>
  import("./components/Route.jsx").then((m) => ({ default: m.Terms }))
);
const User = React.lazy(() =>
  import("./components/Route.jsx").then((m) => ({ default: m.User }))
);
const ProductDetails = React.lazy(() =>
  import("./components/Route.jsx").then((m) => ({ default: m.ProductDetails }))
);
const NotFound = React.lazy(() =>
  import("./components/Route.jsx").then((m) => ({ default: m.NotFound }))
);
const ShoppingCart = React.lazy(() =>
  import("./components/Route.jsx").then((m) => ({ default: m.ShoppingCart }))
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <ContactUs /> },
      { path: "blog", element: <Blog /> },
      { path: "category/:categoryName", element: <BrowseCategory /> },
      { path: "bonus_programs", element: <BonusProgram /> },
      { path: "gifts", element: <GiftCards /> },
      { path: "credits", element: <Credits /> },
      { path: "service_contracts", element: <ServiceContracts /> },
      { path: "non_cashout", element: <NonCashout /> },
      { path: "payments", element: <Payments /> },
      { path: "find_order", element: <FindOrder /> },
      { path: "delivery_terms", element: <DeliveryTerms /> },
      { path: "exchange", element: <Exchange /> },
      { path: "guarantee", element: <Guarantee /> },
      { path: "questions", element: <Questions /> },
      { path: "terms", element: <Terms /> },
      { path: "account", element: <User /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "error", element: <NotFound /> },
      { path: "shopping_cart", element: <ShoppingCart /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoaderProvider>
      <AuthProvider>
        <DataProvider>
          <Suspense fallback={<LoaderFallback />}>
            <RouterProvider router={router} />
          </Suspense>
        </DataProvider>
      </AuthProvider>
    </LoaderProvider>
  </StrictMode>
);
