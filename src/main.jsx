import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoaderProvider } from "./components/Context/LoaderContext.jsx";
import { DataProvider } from "./components/Context/DataContext.jsx";
import { AuthProvider } from "./components/Context/AuthContext.jsx";

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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <LoaderProvider>
        <DataProvider>
          <RouterProvider router={router} />
        </DataProvider>
      </LoaderProvider>
    </AuthProvider>
  </StrictMode>
);
