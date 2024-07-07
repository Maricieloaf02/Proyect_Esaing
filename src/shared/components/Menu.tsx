import React from "react";
import { Celular2ICon, RelojIcon } from "../icons";

export const Menu = () => {
  return (
    <div className="bg-secondary">
      <div className="container1 py-16">
        <div className="grid grid-cols-12">
          <div className="col col-span-3 bg-blanco">
            <p className="txt2 my-6 text-primary flex items-center justify-center">
              Esaing Sac
            </p>
          </div>
          <div className="col col-span-9">
            <div className="bg-[#63989B] flex text-blanco py-3 px-4 gap-4">
              <div className="flex items-center justify-center gap-x-3">
                <Celular2ICon />
                <strong>Llámanos</strong>: 970-739-351
              </div>
              <div className="flex items-center justify-center gap-x-3">
                <RelojIcon />
                <strong>Horarios</strong>: 8:00am - 5:00pm
              </div>
            </div>
            <div className="bg-[#F0DBB3] py-6">
              <nav className="flex justify-center">
                <ul className="flex gap-4">
                  <li>
                    <a href="#" className="text6 ">
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text6">
                      Nosotros
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text6">
                      Servicios
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text6">
                      Clientes
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text6">
                      Contacto
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
