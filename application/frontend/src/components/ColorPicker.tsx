
import { useState, useEffect } from "react";

const SKIN_COLORS = ["#F8E4CB", "#F6D1B7", "#F7C89F", "#EFB98F", "#F0C4A9", "#E7A57A", "#DFB484", 
    "#C99A6C", "#AF8359", "#B07855", "#A96D4E", "#8B6140", "#78523F", "#664333", "#4A2C1F", "#3B1C0F"
];

const HAIR_COLORS = [
    "#F4E1C6", "#E6C19B", "#D2A77B", "#B88C66", "#A87150", "#8E5C3C", "#6D4529", "#55351D", 
    "#3E2414", "#2A160C", "#A87C6B", "#7B4B3A", "#5A3225", "#3F2118", "#28140F", "#130907"
];
    
const EYE_COLORS = [
    "#A1B3C4", "#677F9E", "#5F6C7C", "#3F596E","#454D41","#4F5B32","#79824D", "#9F9038", "#855D48", 
    "#564441", "#B39473", "#8C6F3E", "#744233", "#4F4339", "#543D30", "#3E2B24"
];
      

interface ColorPickerProps {
    mode: "skin" | "hair" | "eye";
    setColor: (color: string) => void;
}

function ColorPicker({ mode, setColor }: ColorPickerProps) {
    const [displayColors, setDisplayColors] = useState<string[]>([]);
    const [selectedColor, setSelectedColor] = useState("");

    useEffect(() => {
        console.log("ColorPicker rendered with mode:", mode);
    }, []);
    
    useEffect(() => {
        console.log("Current Skin Color:", selectedColor);
    }, [selectedColor]);

    
    useEffect(() => {
        const colors = mode === "skin" 
            ? SKIN_COLORS 
            : mode === "hair" 
            ? HAIR_COLORS 
            :EYE_COLORS;

        setDisplayColors(colors);
        setSelectedColor(colors[0]); // Default to the first color
        setColor(colors[0]); // Immediately set the color when mode changes
    }, [mode]);

    const handleColorSelect = (color : string) => {
        console.log("Clicked color:", color);
        setSelectedColor(color)
        setColor(color)
        console.log("changing skin color to ", color);
    }

  return (
    <div className="w-full h-full flex justify-center items-center relative z-10 overflow-y-scroll">
        <div className="grid grid-cols-4 gap-2 w-full">
            {displayColors.map((color, index) => (
                <div key = {index} className = "aspect-square w-full rounded-xl" style = {{background: color}} onClick = {() => handleColorSelect(color)}></div>
            )) }
        </div>
    </div>
  );
}

export default ColorPicker;

