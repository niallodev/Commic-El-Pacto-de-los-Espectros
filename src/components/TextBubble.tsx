import { TextBubbleProps } from './variable.tsx'
import "../css/TextBubble.css";

// type TextBubble = {
//   bubbleData:bubbleData;
// }

// type bubbleData = {
//   author: string;
//   text: string;
//   type: string;
//   position: position;
//   buble: buble;
// }

// type position = {
//   top: string;
//   left: string;
// }

// type buble = {
//   bgColor: string;
//   bottomOffset: string;
//   bottomTransformY: string;
//   bottomTransformX: string;
//   leftOffset: string;
//   clipPath: string;
// }

const TextBubble:React.FC<TextBubbleProps> = ({ bubbleData }) => {
  console.log(bubbleData);
  const nombreColor = [
    ["Snoopy", "orange"],           // Divertido, amigable y cálido.
    ["Ryōmen Sukuna", "red"],       // Poderoso, peligroso y lleno de pasión.
    ["Asta", "green"],              // Determinado y lleno de vida, como el verde.
    ["Killua Zoldyck", "blue"],     // Calmado, calculador, y eléctrico.
    ["Gon Freecss", "goldenrod"],      // Aventurero, enérgico y brillante.
    ["Renjiro Saito", "goldenrod"],    // Relajado y positivo, como el sol.
    ["Takaru Hinomura", "orange"],  // Audaz, extrovertido y carismático.
    ["Sasuke Uchiha", "darkblue"],  // Misterioso, serio y fuerte.
    ["Naruto Uzumaki", "orange"],   // Optimista, lleno de energía y brillo.
    ["Yuji Itadori", "red"],        // Apasionado y lleno de vitalidad.
    ["Megumi Fushiguro", "darkgreen"], // Calmado y estratégico.
    ["Nobara Kugisaki", "palevioletred"],    // Fuerte, decidida, con estilo único.
    ["Shōyō Hinata", "orange"],     // Brillante, enérgico y lleno de vida.
    ["Tobio Kageyama", "blue"],     // Determinado, serio y enfocado.
    ["Mafuyu Sato", "lightskyblue"],   // Tranquilo, suave y lleno de sensibilidad.
    ["Akira Tendou", "red"],        // Rebelde y lleno de determinación.
    ["Kesshouban", " rgb(248, 201, 112)"],        // Inocente, puro y lleno de energía positiva.
    ["Neutrophil 1146", "gray"],    // Fuerte, protector y neutral.
    ["Tanjiro Kamado", "green"],    // Amable, resiliente y en equilibrio.
    ["Satoru Gojo", "white"],       // Poderoso, brillante y fuera de lo común.
    ["Monkey D. Luffy", "red"],     // Aventurero, apasionado y lleno de fuego.
    ["Izuku Midoriya", "green"],    // Determinado, humilde y lleno de esperanza.
    ["Emma", "goldenrod"]              // Líder, optimista y con espíritu protector.
  ]
  // Buscar el color correspondiente al autor
  const authorColor = nombreColor.find(
    (item) => item[0] === bubbleData.author
  )?.[1] || "black"; // Por defecto, negro si no se encuentra el autor
  
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
            <span style={{ color: authorColor, fontWeight: "bold" }}>{bubbleData.author}: </span>
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