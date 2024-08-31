import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div className="wrapper">
      <nav>
        <div className="container">
          <Navbar />
        </div>
      </nav>
      <main>
        <div className="container">
          <Main />
        </div>
      </main>
      <footer>
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;
