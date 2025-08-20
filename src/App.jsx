import { Outlet } from "react-router-dom";
import "./App.scss";

import { Header } from "./components/Route";
import { Footer } from "./components/Route";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
