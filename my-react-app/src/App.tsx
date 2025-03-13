import Toolbar from "./Toolbar"; // Top navigation bar
import Sidebar from "./Sidebar"; // Sidebar for navigation/input
import SlideView from "./SlideView"; // Grid layout for displaying cocktails
import { Cocktail, cocktails } from "./cocktailsData"; // Import static cocktail data
import { useEffect, useState } from "react";
import blankThumbnail from "./assets/whiskey-glass-solid.svg"

export default function App() {

  const [slides, setSlides] = useState(cocktails)
  const [selectedSlideId, setSelectedSlideId] = useState(0)

  useEffect(() => {
    document.title = `Cocktails: (${slides.length})`
  }, [slides.length])

  const selectedSlide = slides.find((s) => s.id === selectedSlideId) || slides[0];


  const addBlankSlide = () => {
    console.log("Before adding:", slides);
  
    const maxId = slides.length > 0 ? Math.max(...slides.map(slide => slide.id)) : 0; // Find highest existing ID
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

  const updateCocktail = (id: number, updatedData: Partial<Cocktail>) => {
    setSlides((prevSlides) =>
      prevSlides.map((slide) =>
        slide.id === id ? { ...slide, ...updatedData } : slide
      )
    );
  };
  
  

  const deleteSlide = (idToDelete: number) => {
    console.log("Before deleting:", slides);
  
    const updatedSlides = slides.filter(slide => slide.id !== idToDelete); 
    setSlides(updatedSlides);
  
    console.log("After deleting:", updatedSlides);
  };
  
  const updateNotes = (id: number, newNotes: string) => {
    setSlides(slides.map(slide =>
      slide.id === id ? { ...slide, notes: newNotes } : slide
    ));
  };
  

  return (
    <div className="d-flex bg-light flex-column vh-100">
        <Toolbar updateNotes={updateNotes} 
                 updateCocktail={updateCocktail} 
                 selectedSlide={selectedSlide} 
                 />
        <div className="d-flex">
        <Sidebar  slides={slides} 
                  deleteSlide={deleteSlide}
                  selectedSlideId={selectedSlideId} 
                  setSelectedSlideId={setSelectedSlideId} 
                  addBlankSlide={addBlankSlide} 
                />

        <SlideView slide={selectedSlide}
                   updateNotes={updateNotes}
                  />
      </div>
    </div>
  );
}
