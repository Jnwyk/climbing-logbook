import styled from "styled-components";

export const Input = styled.input`
  font-size: 16px;
  margin-top: 0.2rem;
  margin-left: -0.2rem;
  padding: 0.3rem;
  background-color: #e5e5e5;
  font-weight: 600;
  border-radius: 0.3rem;
  border: none;
  box-shadow: 6px 6px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  &:focus {
    outline: none;
    box-shadow: 6px 6px rgba(0, 0, 0, 0.3);
  }
`;
