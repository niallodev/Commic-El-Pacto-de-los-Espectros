import { TextBubbleProps } from './variable.tsx'
import "../css/TextBubble.css";

const TextBubble:React.FC<TextBubbleProps> = ({ bubbleData }) => {
  
  // Esto lo usa el rect
  let bubbleStyle: React.CSSProperties & { [key: string]: string } = {}; // Permitimos propiedades personalizadas
  let sfxStyle: React.CSSProperties & { [key: string]: string } = {}; // Permitimos propiedades personalizadas
  if(bubbleData.type === "rect"){ //Conversacion
    bubbleStyle = {
      "--bubble-bg-color": bubbleData.buble.bgColor,
      "--bubble-bottom-offset": bubbleData.buble.bottomOffset,
      "--bubble-bottom-transformY": bubbleData.buble.bottomTransformY,
      "--bubble-bottom-transformX": bubbleData.buble.bottomTransformX,
      "--bubble-left-offset": bubbleData.buble.leftOffset,
      "--clip-path": bubbleData.buble.clipPath,
      top: bubbleData.position.top, // Agregar posición como parte del estilo
      left: bubbleData.position.left,
    };
  }
  if(bubbleData.SFX.text !== ""){
    sfxStyle = {
      "--sfx-top":bubbleData.SFX.top ,
      "--sfx-left":bubbleData.SFX.left,
      "--sfx-color":bubbleData.SFX.color,
      "--sfx-borde":bubbleData.SFX.borde,
      "--sfx-giro":bubbleData.SFX.giro,
    }
  }

  return (
    <>
      {bubbleData.text && ( // Si hay texto en bubbleData.text, renderiza el div
        <div>
          <div 
          className={`bubble ${bubbleData.type}`} // Clase dinámica según el tipo
          style={bubbleStyle} // Estilos personalizados
          >
            <span style={{ color: "black", fontWeight: "bold" }}>{bubbleData.author}: </span>
            <span>{bubbleData.text}</span> {/* Solo muestra el texto si está presente */}
          </div>          
        </div>
   
      )}
      {bubbleData.SFX.text && (
            <div style={sfxStyle}>
              
              <div className='sfx'></div>
              <div className='sfx_span'>
                <span>{bubbleData.SFX.text}</span>
              </div>
            </div>
          )}
    </>
  );
}

export default TextBubble;
//! 70