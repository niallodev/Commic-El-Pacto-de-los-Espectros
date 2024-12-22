import ComicPage from "./ComicPage.tsx"
import { ComicViewerProps } from './variable.tsx'
import '../css/ComicViewer.css'


// type ComicViewer = {
//   comicData:comicData[];
//   currentPage:number;
//   setCurrentPage:(page: number) => void;
// }




// type comicData = {
//   panels: panels[];
//   layout: string[][];
// }

// type panels = {
//   id:number;
//   image: string;
//   description: string;
//   gridArea: string;
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
  
// }

const CommicViewer:React.FC<ComicViewerProps> = ({comicData, currentPage, setCurrentPage}) => {
  const handleNextPage = () => {
    if (currentPage < comicData.length) {
      setCurrentPage(currentPage + 1);
      console.log(currentPage);
      console.log(setCurrentPage);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      console.log(currentPage);
      console.log(setCurrentPage);
    }
  };
  return (
    <div className="comic-viewer">
      <ComicPage pageData={comicData[currentPage - 1]}  currentPage={currentPage}/>
      <div className="comic-navigation">
        <button onClick={handlePreviousPage} disabled={currentPage - 1 === 0}>
          ◀ Anterior
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage - 1 === comicData.length - 1}
        >
          Siguiente ▶
        </button>
      </div>
    </div>
  );
}

export default CommicViewer;
