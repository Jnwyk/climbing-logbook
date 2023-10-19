import { StyledAscentCard } from "./styles/Card.styled";
import { Area, Grade, RouteName, Style } from "./styles/AscentText.styled";

const AscentCard = ({ routeName, area, grade, style }) => {
  return (
    <StyledAscentCard>
      <Area>{area}</Area>
      <RouteName>{routeName} </RouteName>
      <Grade>{grade}</Grade>
      <span>
        <Style>{style}</Style>
      </span>
    </StyledAscentCard>
  );
};

export default AscentCard;
