import styled from "styled-components";
import Select from "react-select";

export const StyledSelect = styled(Select)`
  height: 24px;
  width: 100%;
  font-size: 16px;
  margin-top: 0.2rem;
  color: black;
  font-weight: 600;
  border-radius: 0.3rem;
  border: none;
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.5);
  transition: 0.5s;

  .Select__control {
    background-color: #e5e5e5;
    border: none;
    margin-left: -0.2rem;
    color: black;
  }

  .Select__single-value {
    color: black;
  }

  .Select__placeholder {
    color: black;
  }

  .Select__control--is-focused {
    border: none;
    outline: none;
  }

  .Select__menu {
    margin-left: -0.2rem;
    margin-top: 1.2rem;
  }
`;
