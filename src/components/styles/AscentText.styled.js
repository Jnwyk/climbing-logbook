import styled from "styled-components";

export const RouteName = styled.h3`
  margin: 0;
  font-size: 32px;
`;

export const Area = styled.h4`
  margin: 0;
  margin-top: 0.4rem;
`;

export const Style = styled.h4`
  text-transform: capitalize;
`;

export const Grade = styled.h1`
  font-size: 64px;
  font-weight: 800;
`;

export const StyleMark = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ styletype }) => {
    if (styletype === "redpoint") return `#D2042D;`;
    else if (styletype === "flash") return `#00BBFF;`;
    else if (styletype === "onsight") return `#FFC300;`;
    else return `black;`;
  }};
`;
