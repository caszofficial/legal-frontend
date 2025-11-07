import React from "react";

const Footer = () => {
  return (
    <div className=" bg-blue-950 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white place-content-center place-items-center">
        <div className="grid grid-cols-1 text-center">
          <p>© 2025 | Andres y Santiago Legales</p>
          <p>Todos los derechos reservados</p>
        </div>
        <div className="grid grid-cols-1 text-center">
          <p>Colombia</p>
          <p>correo@email.com | 3001234567</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
