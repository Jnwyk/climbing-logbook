import styled from "styled-components";

export const Block = styled.div`
  position: relative;
  top: ${({ orientation }) => (orientation === "vertical" ? `50%;` : `0%`)};
  left: 50%;
  transform: ${({ orientation }) =>
    orientation === "vertical"
      ? `translate(-50%, -50%)`
      : `translate(-50%, 50%)`};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: #e5e5e5;
  transition: 0.4s;
`;
