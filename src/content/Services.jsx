import React from "react";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <section
      id="services"
      className="grid grid-cols-1 place-content-center text-center p-4 gap-4 w-full col-span-2 md:col-start-2 min-h-screen mb-10"
    >
      <h1 className="text-2xl text-blue-950 font-bold my-10">
        Nuestros Servicios
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
        <Slide direction="left" duration={500}>
          <div>
            <h3 className="text-xl md:text-2xl text-blue-950 font-bold">
              Asesoría en Derecho Civil
            </h3>
            <p className="text-md md:text-lg">
              Contratos, arrendamientos y compraventas.
            </p>
            <p className="text-md md:text-lg">
              Procesos de divorcio, sucesiones y liquidación de bienes.
            </p>
            <p className="text-md md:text-lg">
              Conflictos entre particulares y reclamaciones de deudas.
            </p>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl text-blue-950 font-bold">
              Asesoría en Derecho Laboral
            </h3>
            <p className="text-md md:text-lg">Acoso laboral o “mobbing”.</p>
            <p className="text-md md:text-lg">
              Despidos injustificados y liquidaciones.
            </p>
            <p className="text-md md:text-lg">
              Accidentes de trabajo e incapacidades.
            </p>
            <p className="text-md md:text-lg">
              Reclamación de derechos ante empleadores o empresas.
            </p>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl text-blue-950 font-bold">
              Asesoría en Derecho de Tránsito
            </h3>
            <p className="text-md md:text-lg">Comparendos y fotomultas. </p>
            <p className="text-md md:text-lg">Inmovilización de vehículos.</p>
            <p className="text-md md:text-lg">
              Accidentes de tránsito: conciliación, indemnizaciones y seguros.
            </p>
            <p className="text-md md:text-lg">
              Restitución de licencia o revisión de sanciones.
            </p>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl text-blue-950 font-bold">
              Asuntos Legales Personales
            </h3>
            <p className="text-md md:text-lg">
              Cuotas alimentarias, custodia y patria potestad.
            </p>
            <p className="text-md md:text-lg">
              Violencia intrafamiliar y protección legal.
            </p>
            <p className="text-md md:text-lg">
              Rectificación de documentos, permisos y trámites ante entidades
              públicas.
            </p>
            <p className="text-md md:text-lg">
              Elaboración de derechos de petición, tutelas y reclamaciones.
            </p>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default Services;
