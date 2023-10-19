import { StyledAscentCard } from "./styles/Card.styled";
import {
  Area,
  Grade,
  RouteName,
  Style,
  StyleMark,
} from "./styles/AscentText.styled";

const AscentCard = ({ routeName, area, grade, style }) => {
  return (
    <StyledAscentCard>
      <Area>{area}</Area>
      <RouteName>{routeName} </RouteName>
      <Grade>{grade}</Grade>
      <span
        style={{
          display: `flex`,
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <StyleMark styletype={style} />
        <Style>{style}</Style>
      </span>
    </StyledAscentCard>
  );
};

export default AscentCard;
