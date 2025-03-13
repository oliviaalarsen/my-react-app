// Import ToolbarButton component to create buttons
import { Button, Modal } from "react-bootstrap";
import whiskeyIcon from "./assets/whiskey-glass-solid.svg"
import { useState } from "react";
import CocktailForm from "./CocktailForm";
import { Cocktail } from "./cocktailsData";

type ToolbarProps = {
  updateNotes: (id: number, newNotes: string) => void;
  updateCocktail: (id: number, updatedData: Partial<Cocktail>) => void;
  selectedSlide: Cocktail | null;
}

// Toolbar Component: Displays buttons for different actions
export default function Toolbar({ updateNotes, selectedSlide, updateCocktail }: ToolbarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Button to open the form */}
      <Button variant="info" onClick={handleOpenModal}>
        <img src={whiskeyIcon} alt="Add Cocktail" style={{ width: "25px", marginRight: "5px" }} />
        Edit Cocktail
      </Button>


      {/* Modal containing the form */}
      <Modal show={isModalOpen} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Cocktail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CocktailForm 
            updateNotes={updateNotes}
            updateCocktail={updateCocktail}
            selectedSlide={selectedSlide || undefined} 
            handleClose={handleCloseModal} 
          />
        </Modal.Body>
      </Modal>
    </>
  );
}