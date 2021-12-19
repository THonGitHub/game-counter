import React from "react";
import "./App.css";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.wrap}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
