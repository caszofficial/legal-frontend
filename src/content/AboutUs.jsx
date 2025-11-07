import React from "react";
import { Slide } from "react-awesome-reveal";

const AboutUs = () => {
  return (
    <section
      id="aboutus"
      className="grid grid-cols-1 place-content-center text-center p-4 gap-4 bg-blue-950 text-white w-full md:w-1/2 col-span-2 min-h-screen"
    >
      <Slide duration={500} cascade direction="right">
        <h1 className="text-xl md:text-2xl font-bold text-amber-500">
          ¿Quiénes Somos?
        </h1>
        <p className="text-md md:text-xl">
          Somos un equipo de abogados especializados con experiencia en procesos
          civiles, laborales, de tránsito y asuntos legales personales.
          Brindamos asesoría clara, acompañamiento constante y soluciones reales
          para proteger tus derechos y los de tu familia.
        </p>
        <p className="text-md md:text-xl">
          Creemos que la justicia debe ser accesible para todos, por eso
          explicamos cada proceso en un lenguaje sencillo, sin términos
          complicados y con transparencia total.
        </p>
      </Slide>
    </section>
  );
};

export default AboutUs;
