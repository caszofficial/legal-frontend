import React from "react";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <Fade duration={2000}>
      <div className="grid grid-cols-1 place-content-center text-center p-4 gap-4 min-h-screen">
        <h1 className="text-xl font-bold md:text-2xl text-blue-950">
          Asesoría Legal Profesional en Colombia
        </h1>
        <h3 className="text-md md:text-xl">
          Defendemos tus derechos y te acompañamos en cada paso legal que
          necesites.
        </h3>

        <h2 className="text-md md:text-xl">
          Soluciones jurídicas confiables en asuntos civiles, laborales, de
          tránsito y situaciones legales personales.
        </h2>
        <Fade duration={1500} cascade>
          <button className="bg-blue-950  text-amber-500 rounded-lg p-4 mt-10 font-semibold">
            Agenda tu Asesoria
          </button>
        </Fade>
      </div>
    </Fade>
  );
};

export default Hero;
