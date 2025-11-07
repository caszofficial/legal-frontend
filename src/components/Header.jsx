import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full flex justify-between content-center p-4 bg-blue-950 text-white z-50 border-b-4 border-amber-500">
      <div>
        <h1 className="text-2xl text-amber-500">Legal</h1>
      </div>

      <div className="md:grid grid-cols-3 gap-1 hidden text-center text-amber-500">
        <button
          onClick={() => {
            document.getElementById("aboutus").scrollIntoView();
            setOpen(!open);
          }}
        >
          Quienes Somos
        </button>
        <button
          onClick={() => {
            document.getElementById("services").scrollIntoView();
            setOpen(!open);
          }}
        >
          Servicios
        </button>
        <button
          onClick={() => {
            document.getElementById("aboutus").scrollIntoView();
            setOpen(!open);
          }}
        >
          Contacto
        </button>
      </div>
      <div className="md:hidden  text-amber-500 flex items-center">
        <button onClick={() => setOpen(!open)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden absolute top-full left-0 flex flex-col w-full bg-blue-950 p-4 text-amber-500 gap-4">
          <button
            onClick={() => {
              document.getElementById("aboutus").scrollIntoView();
              setOpen(!open);
            }}
          >
            Quienes Somos
          </button>
          <button
            onClick={() => {
              document.getElementById("services").scrollIntoView();
              setOpen(!open);
            }}
          >
            Servicios
          </button>
          <button
            onClick={() => {
              document.getElementById("aboutus").scrollIntoView();
              setOpen(!open);
            }}
          >
            Contacto
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
