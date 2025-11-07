import React from "react";
import Header from "./components/Header";
import Hero from "./content/Hero";
import AboutUs from "./content/AboutUs";
import Services from "./content/Services";
import WhyUs from "./content/WhyUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr_auto] h-screen place-items-center">
      <header className="col-span-3 w-full">
        <Header />
      </header>
      <main className="grid col-span-3 w-full">
        <Hero />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <AboutUs />
          <Services />
          <WhyUs />
        </div>
      </main>
      <footer className="col-span-3 w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
