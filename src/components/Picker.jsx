import { useState } from "react";
import { StyledPicker } from "./styles/Picker.styled";

const Picker = ({array, onChange}) => {

    const [currentPicked, setCurrentPicked] = useState(array[0]);

    const changePicked = (move) => {
        if(move === 'previous' && currentPicked === array[0]) return;
        if(move === 'next' && currentPicked === array[array.length-1]) return;
        const index = array.indexOf(currentPicked);
        if(move === 'previous'){
            setCurrentPicked(array[index-1])
            onChange(array[index-1])
        }
        if(move === 'next'){
            setCurrentPicked(array[index+1])
            onChange(array[index+1])
        }
    }

    return (<StyledPicker>
        <button onClick={() => changePicked("previous")}>&laquo;</button>
        <h1>{currentPicked}</h1>
        <button onClick={() => changePicked("next")}>&raquo;</button>
    </StyledPicker>)
}

export default Picker;