import React from "react";
import { FaFacebook, FaGlobeAmericas } from "react-icons/fa";
import logo from "../Resources/logo_rjf.png";

export default function FooterContainer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-3 col-md-12 mb-4 mb-md-0">
            <img
              src={logo}
              width={300}
              data-aos="zoom-in-left"
              className="p-3 img-fluid"
              alt="Responsive image"
            />
          </div>

          <div className="col-lg-6 col-md-12 mb-4 mb-md-0 ml-auto weight-300 ">
            <p>
              Somos una organización ciudadana juvenil sin fines de lucro que
              trabaja ideas alineadas a los Objetivos de Desarrollo Sostenible
              promulgados por la Organización de Naciones Unidas, con el fin de
              mejorar la calidad de vida de las personas a través de programas
              enfocados en ejes de acción como :educación, salud y
              medioambiente.
            </p>
          </div>

          <div className="d-flex justify-content-center align-items-center col-lg-2 col-md-12 mb-4 mb-md-0 ml-auto main-footer__social ">
            <a
              href="https://rdjfuturo.netlify.app"
              target="_blank"
              className="text-dark"
            >
              <FaGlobeAmericas size={30} color={"#FE3E00"} />
            </a>

            <a
              href="https://www.facebook.com/Red-de-J%C3%B3venes-del-Futuro-101271765014839"
              target="_blank"
              className="text-dark"
            >
              <FaFacebook size={30} color={"#FE3E00"} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center p-3">
        Red de jóvenes del futuro {new Date().getFullYear()} ©
      </div>
    </footer>
  );
}
