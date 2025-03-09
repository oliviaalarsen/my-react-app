// Import ToolbarButton component to create buttons
import { Button, Modal, Form } from "react-bootstrap";
import ToolbarButton from "./ToolbarButton";
// Import icons for the toolbar buttons
import colorIcon from "./assets/martini-glass-citrus-solid.svg";
import plusIcon from "./assets/square-plus-solid.svg"
import { useState } from "react";

type ToolbarProps = {
    addBlankSlide: () => void;
    updateGlassType: (newGlassType: string) => void;
}

// Toolbar Component: Displays buttons for different actions
export default function Toolbar({ addBlankSlide, updateGlassType }: ToolbarProps ) {

    const [isColorModalOpen, setIsColorModalOpen] = useState(false)
    const handleClose = () => setIsColorModalOpen(false)
    const [newGlass, setNewGlass] = useState("");

    return (
        <>
        <div className="bg-dark p-2 text-light">
            <ToolbarButton icon={plusIcon} onClick={addBlankSlide}/>
            <ToolbarButton icon={colorIcon} onClick={() => setIsColorModalOpen(true)}/>
        </div>
        <div className="bg-dark p-2 text-light">
      <button className="btn btn-outline-info"
              onClick={() => setIsColorModalOpen(true)}>🛠️ Edit Glass Type</button>

      <Modal show={isColorModalOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Glass Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select value={newGlass} onChange={(e) => setNewGlass(e.target.value)}>
            <option value="">Select Glass Type</option>
            <option value="Martini Glass">🍸 Martini Glass</option>
            <option value="Highball Glass">🥤 Highball Glass</option>
            <option value="Rocks Glass">🥃 Rocks Glass</option>
            <option value="Wine Glass">🍷 Wine Glass</option>
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsColorModalOpen(false)}>Cancel</Button>
          <Button variant="primary" onClick={() => { updateGlassType(newGlass); setIsColorModalOpen(false); }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
        </>
    );
}
