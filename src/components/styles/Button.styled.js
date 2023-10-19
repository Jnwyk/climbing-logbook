import styled from "styled-components";

export const Button = styled.button`
  background-color: #e5e5e5;
  font-weight: 600;
  font-size: 18px;
  padding: 1rem;
  transition: 0.4s;
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.5);
  border-radius: 0.3rem;
  border: none;
  margin: 1rem;
  &:hover {
    background-color: #fca311;
  }

  &:disabled:hover {
    background-color: #e5e5e5;
  }
`;
