import React from "react";
import { Slide } from "react-awesome-reveal";

const WhyUs = () => {
  return (
    <div className="grid grid-cols-1 text-center p-4 gap-4 mb-10">
      <Slide duration={300} direction="right" cascade>
        <h1 className="text-xl md:text-2xl text-blue-950 font-bold">
          ¿Por qué elegirnos?
        </h1>
        <p className="text-md md:text-lg">
          Atención personalizada y confidencial
        </p>
        <p className="text-md md:text-lg">
          Abogados especializados en diferentes áreas del derecho
        </p>
        <p className="text-md md:text-lg">
          Explicamos tu caso sin términos complicados
        </p>
        <p className="text-md md:text-lg">
          Tarifas accesibles y opciones de pago
        </p>
        <p className="text-md md:text-lg">Asesoría virtual en toda Colombia</p>
      </Slide>
    </div>
  );
};

export default WhyUs;
