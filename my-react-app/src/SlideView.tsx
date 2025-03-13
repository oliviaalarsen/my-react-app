// Define the expected props for SlideView
interface SlideViewProps {
  slide?: {
    id: number;
    name: string;
    glass: string;
    ingredients: string;
    method: string;
    notes: string;
  };
  selectedCocktail?: {
    id: number;
    name: string;
    glass: string;
    ingredients: string;
    method: string;
    notes: string;
  };
  updateNotes: (id: number, newNotes: string) => void;
}


// SlideView Component: Displays detailed information about the selected cocktail
export default function SlideView({ slide, updateNotes }: SlideViewProps) {
  let slideHeight = 400
  return (
    <div className="flex-grow-1 p-3">
      <div className="d-flex flex-grow-1 justify-content-center">
        <div className="shadow m-3 w-75 h-85 px-3 py-2 border bg-light"
             style={{
              height: slideHeight + "px",
              color: slide?.glass
             }}>
      <h2>{slide?.name || "No selection"}</h2>
      <p><strong>Glass:</strong> {slide?.glass}</p>
      <p><strong>Ingredients:</strong> {slide?.ingredients}</p>
      <p><strong>Method:</strong> {slide?.method}</p>
      <p><strong>Notes:</strong> {slide?.notes}</p>
    </div>
    </div>
    <div>
          <textarea
              className="form-control"
              value={slide?.notes || ""}
              onChange={(e) => slide && updateNotes(slide.id, e.target.value)}
            />
        </div>
    </div>
  );
}


