// import React, { useEffect, useState } from "react";
import TextBubble from "./TextBubble.tsx";
import "../css/Panel.css";
import React from "react";
import { PanelProps } from './variable.tsx'

// type Panel = {
//   panelData: panelData;
//   isActive: boolean;
//   onFocus: React.MouseEventHandler<HTMLDivElement>;
// }

// type panelData = {
//   image: string;
//   description: string;
//   bubbles: bubbles[];
//   gridArea: string;
// }

// type bubbles = {
//   author: string;
//   text: string;
//   type: string;
//   position: {
//     top: string;
//     left: string;
//   };
//   buble: {
//     bgColor: string;
//     bottomOffset: string;
//     bottomTransformY: string;
//     bottomTransformX: string;
//     leftOffset: string;
//     clipPath: string;
//   };
// };



const Panel:React.FC<PanelProps> = ({ panelData, isActive, onFocus }) => {

  const { image, description, bubbles, gridArea } = panelData;

  return (
    <div className={`comic-panel ${isActive ? "active": ""}`} style={{ gridArea }}
    onMouseEnter={onFocus} // Activa el foco cuando el mouse entra
    >
      <img
        src={image}
        alt={description || "Panel del cómic"}
        className="panel-image"
      />
      <div className="description"><span>{description}</span></div>
      {bubbles.map((bubble, index) => (
        <TextBubble key={index} bubbleData={bubble} />
      ))}
    </div>
  );
}

export default Panel;
//! 41