import styled from "styled-components";
import { Block } from "./Block.styled";

export const Card = styled.div`
  position: relative;
  height: 350px;
  border-style: dashed;
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.5);
  border-color: #e5e5e5;
  border-width: 4px;
  border-radius: 1rem;
  padding: 1rem;
  transition: 0.4s;
  &:hover {
    border-color: #fca311;
    ${Block} {
      background-color: #fca311;
    }
  }
`;

export const StyledAscentCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-style: solid;
  background-color: #e5e5e5;
  color: #14213d;
  color: 6px 6px 16px rgba(0, 0, 0, 0.5);
  &:hover {
    border-color: #e5e5e5;
    transform: translateY(-1%);
  }
`;
