import React from "react";
import Header from "./components/Header";
import Hero from "./content/Hero";

const App = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr_auto] h-screen">
      <header>
        <Header />
      </header>
      <main>
        <Hero />
      </main>
      <footer>
        <div>hola footer</div>
      </footer>
    </div>
  );
};

export default App;
