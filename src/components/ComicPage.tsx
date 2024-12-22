import React, { useState, useEffect } from "react";
import Panel from "./Panel";
import "../css/ComicPage.css";
import { ComicPageProps } from "./variable.tsx"

// type ComicPage = {
//   pageData:pageData;
//   currentPage:number;
// }

// type pageData = {
//   panels: panels[];
//   layout: string[][];
// }

// type panels = {
//   image: string;
//   description: string;
//   bubbles: {
//     author: string;
//     text: string;
//     type: string;
//     position: {
//       top: string;
//       left: string;
//     };
//     buble: {
//       bgColor: string;
//       bottomOffset: string;
//       bottomTransformY: string;
//       bottomTransformX: string;
//       leftOffset: string;
//       clipPath: string;
//     };
//   }[]; // Cambiado para ser un array de objetos
//   gridArea: string;
// }


const ComicPage:React.FC<ComicPageProps> = ({pageData, currentPage}) => {
  const [activePanel, setActivePanel] = useState<number | null>(null);

  // Resetea el panel activo cuando se cambia de página
  useEffect(() => {
    setActivePanel(null);  // Reinicia el estado de activePanel al cambiar de página
  }, [currentPage]); // Depende del índice de la página

  const handlePanelFocus = (index:number) => {
    setActivePanel(index);
  };

  // para la creacion del grid
  const gridTemplateAreas = pageData.layout.map(row => `"${row.join(" ")}"`).join(" ");
  // Configura las columnas de acuerdo al contenido. Usamos auto para que las columnas se ajusten al contenido.
  const columns = `repeat(${pageData.layout[0].length}, auto)`; // Número de columnas dinámico, ajustado al contenido.
  // Configura las filas dinámicamente con auto, ajustándose a la altura del contenido.
  const rows = `repeat(${pageData.layout.length}, auto)`; 

  return (
    <div className="comic-page">
      <div className="comic-grid"
      style={{
        gridTemplateAreas: gridTemplateAreas, // Distribución dinámica
        gridTemplateColumns: columns, // Columnas dinámicas
        gridTemplateRows: rows, // Filas dinámicas
      }}
      >
        {/* {Object.values(pageData.panels).slice(0, 3).map((panel, index) => ( */}
        {pageData.panels.map((panel, index) => (
          <Panel key={index} panelData={panel} 
          isActive={activePanel === index} // Detecta el panel activo
          onFocus={() => handlePanelFocus(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ComicPage;
//! 70