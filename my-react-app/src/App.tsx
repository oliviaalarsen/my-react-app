import Toolbar from "./Toolbar"; // Top navigation bar
import Sidebar from "./Sidebar"; // Sidebar for navigation/input
import SlideView from "./SlideView"; // Grid layout for displaying cocktails
import { cocktails } from "./cocktailsData"; // Import static cocktail data
import { useState } from "react";
import blankThumbnail from "./assets/whiskey-glass-solid.svg"

export default function App() {

  const [slides, setSlides] = useState(cocktails)

  const [selectedSlideId, setSelectedSlideId] = useState(0)

  const selectedSlide = cocktails.find((s) => s.id === selectedSlideId) || cocktails[0];

  const addBlankSlide = () => {
    console.log("Before adding:", slides);
  
    const maxId = slides.length > 0 ? Math.max(...slides.map(slide => slide.id)) : 0; // ✅ Find highest existing ID
    const blankSlide = {
      id: maxId + 1,
      name: "New Cocktail",
      glass: "TBD",
      image: blankThumbnail,
      ingredients: "TBD",
      method: "TBD",
      notes: "React Props",
    };
  
    const updatedSlides = [...slides, blankSlide];
    setSlides(updatedSlides);
  
    console.log("After adding:", updatedSlides);
  };
  

  const deleteSlide = (idToDelete: number) => {
    console.log("Before deleting:", slides);
  
    const updatedSlides = slides.filter(slide => slide.id !== idToDelete); 
    setSlides(updatedSlides);
  
    console.log("After deleting:", updatedSlides);
  };
  

  const updateGlassType = (newGlassType: string) => {
    setSlides(slides.map(slide =>
      slide.id === selectedSlideId ? { ...slide, glass: newGlassType } : slide
    ));
  };
  

  return (
    <div className="d-flex bg-light flex-column vh-100">
        <Toolbar addBlankSlide={addBlankSlide}
                 updateGlassType={updateGlassType}
                 />
        <div className="d-flex">
        <Sidebar  slides={slides} 
                  deleteSlide={deleteSlide}
                  selectedSlideId={selectedSlideId} 
                  setSelectedSlideId={setSelectedSlideId} 
                  addBlankSlide={addBlankSlide} 
                />

        <SlideView slide={selectedSlide} />
      </div>
    </div>
  );
}
