// Import the Cocktail type to define props
import { Cocktail } from "./cocktailsData";

// Define the props for the SlideThumbnail component
interface SlideThumbnailProps {
  slide: Cocktail;
  isSelected: boolean;
  onSelected: (id: number) => void;
  deleteSlide: (id: number) => void;
}

// SlideThumbnail Component: Displays a small thumbnail for each cocktail
export default function SlideThumbnail({ 
  slide, 
  isSelected, 
  onSelected, 
  deleteSlide 
}: SlideThumbnailProps) {
  return (
    <>
    <div className="d-flex justify-content-between mt-2 align-items-center">
      <span>{ slide.id }</span>
        <button className="btn btn-outline-danger btn-sm"
                onClick={() => deleteSlide(slide.id)}>
              X
        </button>
    </div>
    <div className="text-center my-3">
      <img
        src={slide.image}
        alt={slide.name}
        onClick={() => onSelected(slide.id)}
        className={`border border-4 rounded-1 ${isSelected ? "border-info" : "border-light" }`}
        style={{ width: "80px", height: "80px", objectFit: "cover" }}
      />
      <p className="mt-2 text-white fw-bold">{slide.name}</p>
    </div>
    </>
  );
}
