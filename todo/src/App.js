import React from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import Item from "./components/Item";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <Header />
      <Form />
      <List />
      <Stats />
    </>
  );
}

export default App;
