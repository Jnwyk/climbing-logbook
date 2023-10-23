import styled from "styled-components";
import { Block } from "./Block.styled";

export const Card = styled.div`
  position: relative;
  width: 300px;
  height: 350px;
  padding: 1rem;
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  border-style: solid;
  cursor: pointer;
  transition: 0.6s;
`;

export const StyledAddAscentCard = styled(Card)`
  border-style: dashed;

  &:hover {
    border-color: #fca311;
    ${Block} {
      background-color: #fca311;
    }
  }
`;

export const OuterAscentCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
  color: #14213d;
  transform-style: preserve-3d;
  &:hover {
    transform: translateY(-1%);
  }

  &.flip {
    transform: rotateY(-180deg);
  }
`;

export const FrontAscentCard = styled(Card)`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backface-visibility: hidden;
  box-shadow: none;
`;

export const ReverseAscentCard = styled(FrontAscentCard)`
  background-color: #fca311;
  border: 4px solid #fca311;
  color: #e5e5e5;
  transform: rotateY(180deg);

  &:hover {
    border-color: #fca311;
  }
`;
