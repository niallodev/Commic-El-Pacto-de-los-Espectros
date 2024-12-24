import React, { useState } from "react";
import '../css/Header.css'
import {HeaderPropos} from './variable.tsx'
// type HeaderPropos = {
//   title: string;
//   currentPage: number;
//   totalPages: number;
//   onPrevious: () => void;
//   onNext: () => void;
//   onGoToPage: (page: number) => void;
//   activeModal: string | null | boolean;
//   openModal: (modalName: string) => void; 
//   closeModal:() => void;
// };

const Header:React.FC<HeaderPropos> = ({title, currentPage, totalPages, onPrevious, onNext, onGoToPage, activeModal, openModal, closeModal}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenuOptionClick = (callback:Function) => {
    callback(); // Ejecuta la acción asociada a la opción (ir a página, abrir modal, etc.)
    setIsMenuOpen(false); // Cierra el menú
  };
  return (
    <header className="header-container">
      {/* Título del cómic */}
      <div className="header-title">
        <h1>{title}</h1>
      </div>

      {/* Navegación entre páginas */}
      <nav className="header-navigation">
        <button
          className="nav-button"
          onClick={onPrevious}
          disabled={currentPage === 1}
        >
          ◀ Anterior
        </button>
        <span className="page-info">
          Página 
          <div>{currentPage} / {totalPages}</div>
        </span>
        <button
          className="nav-button"
          onClick={onNext}
          disabled={currentPage === totalPages}
        >
          Siguiente ▶
        </button>
      </nav>

      {/* Menú lateral */}
      <div className="header-menu">
        <button className="menu-button" onClick={toggleMenu}>☰</button>
        {isMenuOpen && (
          <div className="menu-options">
            <ul>
              {/* <li onClick={() => onGoToPage(1)}>Inicio</li> */}
              <li onClick={() => handleMenuOptionClick(() => onGoToPage(1))}>Inicio</li>
              <li onClick={() => handleMenuOptionClick(() => openModal("Capítulos"))}>Capítulos</li>
              <li onClick={() => handleMenuOptionClick(() => openModal("Información"))}>Información</li>
              <li onClick={() => handleMenuOptionClick(() => openModal("Configuración"))}>Configuración</li>
            </ul>
          </div>
        )}
      </div>
      {/* Modales */}
      {activeModal === "Capítulos" && (
        <div className="modal">
          <div className="modal-content">
            <h2>Capítulos Disponibles</h2>
            <div className="chapters-list">
             
              <div className="chapter-card" onClick={() => { onGoToPage(1); closeModal(); }}>
                <img
                  src="./img/pagina_1_cuadro_1.jpg"
                  alt="Portada Capítulo 1"
                  className="chapter-image"
                />
                <h3 className="chapter-title">Capítulo 1: Sombras en el Pasillo</h3>
              </div>
              <div className="chapter-card" onClick={() => { onGoToPage(0); closeModal(); }}>
                <h2>Proximamente</h2>
                <img
                  src="./img/pagina_6_cuadro_1.jpg"
                  alt="Portada Capítulo 1"
                  className="chapter-image"
                />
                <h3 className="chapter-title">Capítulo 2: El Espíritu del Vacío</h3>
              </div>
              {/* Agrega más capítulos aquí */}
            </div>
            <button className="close-button" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}

      {activeModal === "Información" && (
        <div className="modal">
          <div className="modal-content">
            <h2>Información</h2>
            <div className="chapters-list">
              <p className="sub-Informacion"><strong>Desarrollador:</strong></p>
              <p className="content-Informacion">Nicolás Alexander Loor Bazurto, Ingeniero en Software, con experiencia en desarrollo web y diseño de sistemas interactivos.</p>
              <p className="sub-Informacion"><strong>Propósito del Proyecto:</strong></p>
              <p className="content-Informacion">Este cómic interactivo ha sido creado como una demostración de habilidades técnicas en diseño, programación y narración visual. Es también un proyecto personal destinado a explorar la fusión entre tecnología y creatividad.</p>
              <p className="sub-Informacion"><strong>Estado Actual:</strong></p>
              <p className="content-Informacion">El proyecto se encuentra en fase de desarrollo, con enfoque en mejorar la narrativa visual y la experiencia del usuario, asegurando altos estándares de calidad tanto en diseño como en implementación técnica.</p>
              <p className="sub-Informacion"><strong>Tecnologías Utilizadas:</strong></p>
              <p className="content-Informacion">
              <ul>
                <li><strong>Frontend:</strong> HTML, CSS, TypeScript</li>
                <li><strong>Biblioteca:</strong> React</li>
                <li><strong>Generación de Ilustraciones:</strong> Leonardo.ai</li>
                <li><strong>Herramientas de Colaboración:</strong> Git, GitHub</li>
              </ul>
              </p>
              <p className="sub-Informacion"><strong>Objetivos Clave:</strong></p>
              <p className="content-Informacion">
                Mostrar capacidades técnicas avanzadas en desarrollo y diseño interactivo.
                Innovar en la combinación de herramientas digitales y narrativas visuales.
                Crear una experiencia visual atractiva que transmita emoción y profesionalismo.</p>
              <p className="sub-Informacion"><strong>Contacto:</strong></p>
              <p className="content-Informacion">Para consultas o comentarios relacionados con este proyecto, puedes contactar al desarrollador directamente.</p>
            <button className="close-button" onClick={closeModal}>
              Cerrar
            </button>
            </div>
          </div>
        </div>
      )}

      {activeModal === "Configuración" && (
        <div className="modal">
          <div className="modal-content">
            <h2>Configuraciones</h2>
            <p>Próximamente estarán disponibles nuevas configuraciones.</p>
            <button className="close-button" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
//! 129