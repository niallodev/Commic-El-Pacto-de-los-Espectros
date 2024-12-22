

export type {HeaderPropos, ComicViewerProps, ComicPageProps, PanelProps, TextBubbleProps, FooterProps};

//! Header
type HeaderPropos = {
  title: string;
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoToPage: (page: number) => void;
  activeModal: string | null | boolean;
  openModal: (modalName: string) => void; 
  closeModal:() => void;
};

//! Footer
type FooterProps = {
  author: string;
  year: number;
  onGoToPage: (page: number) => void;
  openModal: (modalName: string) => void;
};

//! ComicViewer | CommicPage | Panel | TextBubble
//! ComicViewer
type ComicViewerProps = {
  comicData:comicDataProps[];
  currentPage:number;
  setCurrentPage:(page: number) => void;
}

//! ComicPage
type ComicPageProps = {
  pageData:comicDataProps;
  currentPage:number;
}

//! Panel
type PanelProps = {
  panelData: panelsProps;
  isActive: boolean;
  onFocus: React.MouseEventHandler<HTMLDivElement>;
}

//! TextBubble
type TextBubbleProps = {
  bubbleData:bubblesProps;
}

type comicDataProps = {
  panels: panelsProps[];
  layout: string[][];
}

type panelsProps = {
  id:number;
  image: string;
  description: string;
  gridArea: string;
  bubbles: bubblesProps[]; // Cambiado para ser un array de objetos
  
};

type bubblesProps = {
  author: string;
  text: string;
  SFX: sfx;
  type: string;
  position: positionProps;
  buble: bubleProps;
};

type sfx = {
  text: string,
  top: string,
  left: string,
  color: string,
  borde: string,
  giro: string,
}

type positionProps = {
  top: string;
  left: string;
};

type bubleProps = {
  bgColor: string;
  bottomOffset: string;
  bottomTransformY: string;
  bottomTransformX: string;
  leftOffset: string;
  clipPath: string;
};