import styled from "styled-components";

export const StyledPicker = styled.div`
position: relative;
height: 120px;
display: flex;
justify-content: space-evenly;

& h1{
    position: absolute;
    top: 50%;
    transform: translateY(-103%);
    font-size: 48px;
}

& button {
    position: relative;
    font-size: 36px;
    font-weight: 600;
    border: none;
    background-color: #14213D;
    color: #ffff;
    transition: 0.3s;
}

& button:first-child{
    left: -25%;
}

& button:first-child:hover {
    transform: translateX(-2px);
}

& button:last-child{
    left: 25%;   
}

& button:last-child:hover {
    transform: translateX(2px);
}
`