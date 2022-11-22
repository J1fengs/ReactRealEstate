import React from "react";
import Header from "./components/Header";
import Properties from "./components/Properties";
import Choose from "./components/Choose";
import Latest from "./components/Latest";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Properties />
      <Choose />
      <Latest />
      <Footer />
    </div>
  );
};

export default App;
