import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  height: 350px;
  border-style: dashed;
  border-color: #e5e5e5;
  border-width: 4px;
  border-radius: 1rem;
  padding: 1rem;
  transition: 0.4s;
  &:hover {
    border-color: #fca311;
  }
`;
