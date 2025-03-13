import { ChangeEvent, MouseEvent, useState } from "react";
import { Cocktail } from "./cocktailsData";

type Props = {
    updateNotes: (id: number, newNotes: string) => void;
    selectedSlide?: Cocktail;
    handleClose: () => void;
};

export default function CocktailForm({ 
    updateNotes, 
    selectedSlide, 
    handleClose, 
}: Props) {

    const [formValues, setFormValues] = useState({
        name: selectedSlide?.name || "",
        glass: selectedSlide?.glass || "",
        ingredients: selectedSlide?.ingredients || "",
        method: selectedSlide?.method || "",
        notes: selectedSlide?.notes || ""
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
        setFormValues({ 
            ...formValues, 
            [event.target.name]: event.target.value 
        });

        const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
            if (selectedSlide?.id !== undefined) {
                updateNotes(selectedSlide.id, formValues.notes);
                selectedSlide.name = formValues.name;
                selectedSlide.glass = formValues.glass;
                selectedSlide.ingredients = formValues.ingredients;
                selectedSlide.method = formValues.method;
            }            
            handleClose();
        };
        
    return (
        <form>
            <div className="mb-2">
                <label htmlFor="cocktail-name" className="form-label">Cocktail Name</label>
                <input id="cocktail-name" type="text" className="form-control" 
                    name="name"
                    onChange={handleChange}
                    value={formValues.name}
                />
            </div>
            <div className="mb-2">
                <label htmlFor="glass" className="form-label">Glass</label>
                <input id="glass" type="text" className="form-control" 
                    name="glass"
                    onChange={handleChange}
                    value={formValues.glass}
                />
            </div>
            <div className="mb-2">
                <label htmlFor="ingredients" className="form-label">Ingredients</label>
                <input id="ingredients" type="text" className="form-control" 
                    name="ingredients"
                    onChange={handleChange}
                    value={formValues.ingredients}
                />
            </div>
            <div className="mb-2">
                <label htmlFor="method" className="form-label">Method</label>
                <input id="method" type="text" className="form-control" 
                    name="method"
                    onChange={handleChange}
                    value={formValues.method}
                />
            </div>
            <div className="mb-2">
                <label htmlFor="notes" className="form-label">Notes</label>
                <textarea id="notes" className="form-control" 
                    name="notes"
                    onChange={handleChange}
                    value={formValues.notes}
                />
            </div>
            <div className="text-end">
                <button type="button" 
                        className="btn btn-danger me-2" 
                        onClick={handleClose}>Cancel</button>
                <button className="btn btn-primary" 
                        onClick={handleSubmit}>Save</button>
            </div>
        </form>
    );
}
