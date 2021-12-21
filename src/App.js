import React, { useContext } from "react";
import "./App.css";
import About from "./components/about/About";
import Intro from "./components/introduction/Intro";
import ProductList from "./components/productlist/ProductList";
import Toggle from "./components/toggle/Toggle";
import Contact from "./contact/Contact";
import { ThemeContext } from "./Context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkmode = theme.state.darkmode;
  return (
    <div
      style={{
        backgroundColor: darkmode ? "#222" : "white",
        color: darkmode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
