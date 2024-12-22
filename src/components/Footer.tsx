import { FooterProps } from './variable.tsx'
import '../css/Footer.css'


// type FooterProps = {
//   author: string;
//   year: number;
//   onGoToPage: (page: number) => void;
//   openModal: (modalName: string) => void;
// };

const Footer:React.FC<FooterProps> = ({author, year, onGoToPage, openModal}) => {
  return (
    <footer className="footer-container">
      {/* Información básica */}
      <div className="footer-info">
        <p>&copy; {year} {author}. Todos los derechos reservados.</p>
      </div>

      {/* Enlaces rápidos */}
      <nav className="footer-links">
        <button className="footer-link" onClick={() => onGoToPage(1)}>
          Inicio
        </button>
        <button className="footer-link" onClick={() => openModal("Capítulos")}>
          Capítulos
        </button>
        <button className="footer-link" onClick={() => openModal("Información")}>
          Acerca de
        </button>
      </nav>

      {/* Redes sociales */}
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
//! 47