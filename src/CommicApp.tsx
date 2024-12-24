import { useState } from 'react'
import Header from './components/Header';
import ComicViewer from './components/ComicViewer';
import Footer from './components/Footer';
import './css/CommicApp.css'

function CommicApp() {  
  const comicData = [
    { //Página 1
      panels: [
        {
          id: 1,
          image: "./img/pagina_1_cuadro_1.jpg",
          description: "Aula de clases vacía al atardecer. Hikaru está sentado en su pupitre mirando por la ventana, con una expresión pensativa.",
          gridArea: "a",
          bubbles: [
            { author:"Hikaru", 
              text: "Últimamente no puedo dormir... esas sombras me persiguen incluso en mis sueños...", 
              SFX: { text: "", top: "", left: "", color: "", borde: "", giro: ""},
              type: "rect", 
              position: { top: "50%", left: "65%" }, 
              buble: {bgColor: "rgb(0,0,0,0.7)", bottomOffset: "35%", bottomTransformY:"0%", bottomTransformX:"-100%", leftOffset: "0%", clipPath: "polygon(0% 0%, 100% 50%, 100% 15%)",}},
          ],
        },
        {
          id: 2,
          image: "./img/pagina_1_cuadro_2.jpg",
          description: "Primer plano de Hikaru con expresión de sorpresa al escuchar un ruido.",
          gridArea: "b",
          bubbles: [
            { author:"Hikaru", 
              text: "¿Qué fue eso...?", 
              SFX: {text: "Creak...", top: "50%", left: "5%", color: "red", borde: "black", giro: "-10deg"},
              type: "rect", 
              position: { top: "80%", left: "30%" }, 
              buble: {bgColor: "rgb(0,0,0,0.7)", bottomOffset: "100%", bottomTransformY:"0%", bottomTransformX:"0%", leftOffset: "25%", clipPath: "polygon(20% 100%, 75% 100%, 100% 0%)",}},
          ],
        },
        {
          id: 3,
          image: "./img/pagina_1_cuadro_3.jpg",
          description: "Pasillo oscuro de la escuela. Una sombra distorsionada aparece en la pared.",
          gridArea: "c",
          bubbles: [
            { author:"Hikaru", 
              text: "¡Otra vez esa cosa!", 
              SFX: { text: "", top: "", left: "", color: "", borde: "", giro: ""},
              type: "rect", 
              position: { top: "55%", left: "57%" }, 
              buble: {bgColor: "rgb(0,0,0,0.8)", bottomOffset: "100%", bottomTransformY:"0%", bottomTransformX:"0%", leftOffset: "5%", clipPath: "polygon(20% 100%, 75% 100%, 100% 0%)",}},
          ],
        },
      ],
      layout: [
        ["a", "b"], // Primera fila
        ["c", "c"], // Segunda fila
      ],
    },
    { //Página 2
      panels: [
        {
          id: 1,
          image: "./img/pagina_2_cuadro_1.jpg",
          description: "Hikaru corre por el pasillo, visiblemente asustado. La sombra lo persigue.",
          gridArea: "a",
          bubbles: [
            { author:"Hikaru",
              text: "¡Déjame en paz!", 
              SFX: { text: "Tap tap tap", top: "80%", left: "20px", color: "gray", borde: "white", giro: "20deg"},
              type: "rect", 
              position: { top: "50%", left: "60%" }, 
              buble: {bgColor: "rgb(0,0,0,0.7)", bottomOffset: "-25%", bottomTransformY:"0%", bottomTransformX:"-100%", leftOffset: "0%", clipPath: "polygon(0% 0%, 100% 50%, 100% 15%)",}},
          ],
        },
        {
          id: 2,
          image: "./img/pagina_2_cuadro_2.jpg",
          description: "La sombra se materializa como una figura monstruosa.",
          gridArea: "b",
          bubbles: [
            { author:"Sombra", 
              text: "Tu tiempo ha llegado, Hikaru Tanaka...", 
              SFX: { text: "Whoooosh", top: "40%", left: "20%", color: "purple", borde: "white", giro: "20deg"},
              type: "rect", 
              position: { top: "15%", left: "60%" }, 
              buble: {bgColor: "rgb(255, 255, 255, 0.7)", bottomOffset: "-25%", bottomTransformY:"0%", bottomTransformX:"-100%", leftOffset: "0%", clipPath: "polygon(0% 0%, 100% 50%, 100% 15%)",}},
          ],
        },
        {
          id: 3,
          image: "./img/pagina_2_cuadro_3.jpg",
          description: "Primer plano de Hikaru, paralizado y sudando frío.",
          gridArea: "c",
          bubbles: [
            { author:"Hikaru", 
              text: "¿Cómo sabes mi nombre?", 
              SFX: { text: "", top: "", left: "", color: "", borde: "", giro: ""},
              type: "rect", 
              position: { top: "65%", left: "25%" }, 
              buble: {bgColor: "rgb(0,0,0,0.7)", bottomOffset: "100%", bottomTransformY:"0%", bottomTransformX:"0%", leftOffset: "25%", clipPath: "polygon(20% 100%, 75% 100%, 100% 0%)",}},
          ],
        },
      
      ],
      layout: [
        ["a", "a"], // Primera fila
        ["b", "c"], // Segunda fila
      ],
    },
    { //Página 3
      panels: [
        {
          id: 1,
          image: "./img/pagina_3_cuadro_1.jpg",
          description: "La sombra se lanza hacia Hikaru.",
          gridArea: "a",
          bubbles: [
            { author:"Hikaru", 
              text:  "¡Nooo!",
              SFX: { text: "Whoosh!", top: "50%", left: "20%", color: "black", borde: "white", giro: "20deg"},
              type: "rect", 
              position: { top: "65%", left: "75%" }, 
              buble: {bgColor: "rgb(0,0,0,0.7)", bottomOffset: "-25%", bottomTransformY:"0%", bottomTransformX:"-100%", leftOffset: "0%", clipPath: "polygon(0% 0%, 100% 50%, 100% 15%)",}},
          ],
        },
        {
          id: 2,
          image: "./img/pagina_3_cuadro_2.jpg",
          description: "Un brillo oscuro surge de Hikaru. La figura de Oniryu (dragón de sombras) aparece.",
          gridArea: "b",
          bubbles: [
            { author:"Oniryu", 
              text:  "He esperado demasiado, Hikaru...",
              SFX: { text: "Roooar!", top: "20%", left: "10%", color: "white", borde: "purple", giro: "10deg"},
              type: "rect", 
              position: { top: "35%", left: "25%" }, 
              buble: {bgColor: "rgb(255,255,255,0.7)", bottomOffset: "100%", bottomTransformY:"0%", bottomTransformX:"0%", leftOffset: "25%", clipPath: "polygon(20% 100%, 75% 100%, 100% 0%)",}},
          ],
        },
        {
          id: 3,
          image: "./img/pagina_3_cuadro_3.jpg",
          description: "Primer plano de Oniryu, con sus ojos rojos brillando.",
          gridArea: "c",
          bubbles: [
            { author:"Oniryu", 
              text:  "Tu alma está marcada. Eres mío.",
              SFX: { text: "", top: "", left: "", color: "", borde: "", giro: ""},
              type: "rect", 
              position: { top: "70%", left: "65%" }, 
              buble: {bgColor: "rgb(255,255,255,0.7)", bottomOffset: "-25%", bottomTransformY:"0%", bottomTransformX:"-100%", leftOffset: "0%", clipPath: "polygon(0% 0%, 100% 50%, 100% 15%)",}},
          ],
        },
      ],
      layout: [
        ["a", "b"], // Primera fila
        ["c", "b"], // Segunda fila
      ],
    },
    { //Página 4
      panels: [
        {
          id: 1,
          image: "./img/pagina_4_cuadro_1.jpg",
          description: "Hikaru, confundido y asustado, enfrenta a Oniryu.",
          gridArea: "a",
          bubbles: [
            { author:"Hikaru", 
              text: "¿Qué... quién eres tú? ¿Por qué me sigues?", 
              SFX: { text: "", top: "", left: "", color: "", borde: "", giro: ""},
              type: "rect", 
              position: { top: "80%", left: "60%" }, 
              buble: {bgColor: "rgb(255,255,255,0.7)", bottomOffset: "100%", bottomTransformY:"0%", bottomTransformX:"0%", leftOffset: "25%", clipPath: "polygon(20% 100%, 75% 100%, 100% 0%)",}},
          ],
        },
        {
          id: 2,
          image: "./img/pagina_4_cuadro_2.jpg",
          description: "Oniryu sonríe sarcásticamente.",
          gridArea: "b",
          bubbles: [
            { author:"Oniryu", 
              text: "Soy Oniryu, el espíritu del vacío. Solo existo gracias a ti.", 
              SFX: { text: "", top: "", left: "", color: "", borde: "", giro: ""},
              type: "rect", 
              position: { top: "85%", left: "15%" }, 
              buble: {bgColor: "rgb(255,255,255,0.7)", bottomOffset: "100%", bottomTransformY:"0%", bottomTransformX:"0%", leftOffset: "25%", clipPath: "polygon(20% 100%, 75% 100%, 100% 0%)",}},
          ],
        },
        {
          id: 3,
          image: "./img/pagina_4_cuadro_3.jpg",
          description: "Primer plano de Hikaru gritando.",
          gridArea: "c",
          bubbles: [
            { author:"Hiraku", 
              text: "¡Vete! ¡No quiero nada contigo!", 
              SFX: { text: "", top: "", left: "", color: "", borde: "", giro: ""},
              type: "rect", 
              position: { top: "85%", left: "50%" }, 
              buble: {bgColor: "rgb(255,255,255,0.7)", bottomOffset: "100%", bottomTransformY:"0%", bottomTransformX:"0%", leftOffset: "25%", clipPath: "polygon(20% 100%, 75% 100%, 100% 0%)",}},
          ],
        },
      ],
      layout: [
        ["a", "b"], // Primera fila
        ["c", "c"], // Segunda fila
      ],
    },
    { //Página 5
      panels: [
        {
          id: 1,
          image: "./img/pagina_5_cuadro_1.jpg",
          description: "Mayu entra al pasillo, preocupada.",
          gridArea: "a",
          bubbles: [
            { author:"Mayu", 
              text: "¡Hikaru! ¿Qué está pasando aquí?", 
              SFX: { text: "", top: "", left: "", color: "", borde: "", giro: ""},
              type: "rect", 
              position: { top: "50%", left: "5%" }, 
              buble: {bgColor: "rgb(255,255,255,0.7)", bottomOffset: "100%", bottomTransformY:"0%", bottomTransformX:"0%", leftOffset: "25%", clipPath: "polygon(20% 100%, 75% 100%, 100% 0%)",}},
          ],
        },
        {
          id: 2,
          image: "./img/pagina_5_cuadro_2.jpg",
          description: "Oniryu observa a Mayu y sonríe de forma malévola.",
          gridArea: "b",
          bubbles: [
            { author:"Oniryu", 
              text: "Otra presa... interesante.", 
              SFX: { text: "", top: "", left: "", color: "", borde: "", giro: ""},
              type: "rect", 
              position: { top: "85%", left: "30%" }, 
              buble: {bgColor: "rgb(255,255,255,0.7)", bottomOffset: "100%", bottomTransformY:"0%", bottomTransformX:"0%", leftOffset: "25%", clipPath: "polygon(20% 100%, 75% 100%, 100% 0%)",}},
          ],
        },
        {
          id: 3,
          image: "./img/pagina_5_cuadro_3.jpg",
          description: "Hikaru empuja a Mayu lejos.",
          gridArea: "c",
          bubbles: [
            { author:"Hiraku", 
              text: "¡Corre, Mayu! No te metas en esto.", 
              SFX: { text: "", top: "", left: "", color: "", borde: "", giro: ""},
              type: "rect", 
              position: { top: "65%", left: "10%" }, 
              buble: {bgColor: "rgb(0,0,0,0.7)", bottomOffset: "100%", bottomTransformY:"0%", bottomTransformX:"0%", leftOffset: "25%", clipPath: "polygon(20% 100%, 75% 100%, 100% 0%)",}},
          ],
        },
      ],
      layout: [
        ["a", "a"], // Primera fila
        ["b", "c"], // Segunda fila
      ],
    },
    { //Página 6
      panels: [
        {
          id: 1,
          image: "./img/pagina_6_cuadro_1.jpg",
          description: "La historia continuara...",
          gridArea: "a",
          bubbles: [
            { author:"", 
              text: "", 
              SFX: { text: "Continuara....", top: "50%", left: "50%", color: "white", borde: "red", giro: ""},
              type: "rect", 
              position: { top: "50%", left: "5%" }, 
              buble: {bgColor: "rgb(255,255,255,0.7)", bottomOffset: "100%", bottomTransformY:"0%", bottomTransformX:"0%", leftOffset: "25%", clipPath: "polygon(20% 100%, 75% 100%, 100% 0%)",}},
          ],
        },
        
      ],
      layout: [
        ["a", "a"], // Primera fila
        ["a", "a"], // Segunda fila
      ],
    },
  ];

  //! Header
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [activeModal, setActiveModal] = useState<string | null | boolean> (null);

  const totalPages = comicData.length; // Número total de páginas del cómic
  
  // Función para ir a la página anterior
  const handlePrevious = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  // Función para ir a la página siguiente
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Función para cambiar a una página específica
  const onGoToPage = (page:number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page); // Cambia la página actual
    }
  };

  const openModal = (modalName:string | boolean) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };
  
  const comicTitle = "El Pacto de los Espectros" //Titulo del Comic

  return (
    <div className="App">
      <Header title={comicTitle}  currentPage={currentPage} totalPages={totalPages} onPrevious={handlePrevious} onNext={handleNext} onGoToPage={onGoToPage} activeModal={activeModal} openModal={openModal} closeModal={closeModal}/>
      <ComicViewer comicData={comicData} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <Footer author="Nicolás Loor" year={2024} onGoToPage={onGoToPage} openModal={openModal}/>
    </div>
  );
}

export default CommicApp
//! 619