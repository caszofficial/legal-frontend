import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between content-center p-4 bg-blue-950 text-white">
      <div>Legal</div>

      <div className="grid grid-cols-3 gap-1">
        <button>Quienes Somos</button>
        <button>Servicios</button>
        <button>Contacto</button>
      </div>
    </div>
  );
};

export default Header;
