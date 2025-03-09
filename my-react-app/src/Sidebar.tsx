// Import SlideThumbnail component (used for each cocktail preview)
import { useState } from "react";
import SlideThumbnail from "./SlideThumbnail";

// Define the props that Sidebar expects
interface SidebarProps {
  slides: { 
    id: number;
    name: string;
    glass: string;
    image: string;
    ingredients: string;
    method: string;
    notes: string;
  }[];
  selectedSlideId: number;
  setSelectedSlideId: (id: number) => void;
  addBlankSlide: () => void;
  deleteSlide: (id: number) => void;
}


// Sidebar Component: Displays a list of cocktails as thumbnails
export default function Sidebar({ 
    slides, 
    setSelectedSlideId, 
    selectedSlideId, 
    addBlankSlide,
    deleteSlide 
}: SidebarProps )  {

  const [isExpanded, setIsExpanded] = useState(true)
  const handleButtonClick = () => {
    setIsExpanded(!isExpanded)
  }
  const handleSlideClick = (id: number) => {
    setSelectedSlideId(id);
  };
  
      {/* Loop through the cocktails array and render a SlideThumbnail for each */}

  return (
    <>
    {isExpanded ? (
    <div className="border-end bg-dark p-3 d-flex flex-column">

    <button className="btn btn-outline-info"
            onClick={addBlankSlide}>➕ Add New Cocktail</button>

      {slides.map((cocktail) => (
        <SlideThumbnail 
          key={cocktail.id} 
          slide={cocktail} 
          isSelected={cocktail.id === selectedSlideId} 
          onSelected={() => handleSlideClick(cocktail.id)}
          deleteSlide={deleteSlide}
        />
      ))}
    </div>
    ) : null}
      <button className="btn btn-info p-1 border" 
              onClick={handleButtonClick}
      >
            { isExpanded ? "<" : ">" }
      </button>
    </>
  );
}
