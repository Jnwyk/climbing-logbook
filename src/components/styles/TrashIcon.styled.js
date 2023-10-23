import styled, { keyframes } from "styled-components";
import { Trash } from "@styled-icons/bootstrap/Trash";

const rotate = keyframes`
0%{
  transform: rotate(0deg);
}
33%{
  transform: rotate(30deg);
}
66%{
  transform: rotate(-30deg);
}
100%{
  transform: rotate(0deg);
}`;

export const TrashIcon = styled(Trash)`
  position: relative;
  right: -90%;
  background-color: #e5e5e5;
  color: #14213d;
  width: 25px;

  &:hover {
    animation: ${rotate} 2s ease-in-out;
  }
`;
