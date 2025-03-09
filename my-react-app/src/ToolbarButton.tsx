// Define the props for ToolbarButton
type ToolBarButtonProps = {
    icon: string, 
    onClick: () => void 
}

// ToolbarButton Component: Renders a button with an icon
export default function ToolbarButton({ icon, onClick }: ToolBarButtonProps) {

    return (
        <button className="btn btn-info m-1" 
                onClick={onClick}>
               <img src={icon}
                    style={{ width: "1rem"}}/>
                    
        </button>
    )
}