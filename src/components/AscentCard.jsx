import {
  OuterAscentCard,
  FrontAscentCard,
  ReverseAscentCard,
} from "./styles/Card.styled";
import {
  Area,
  Grade,
  RouteName,
  Style,
  StyleMark,
} from "./styles/AscentText.styled";
import { TrashIcon } from "./styles/TrashIcon.styled";
import { useState } from "react";

const AscentCard = ({ id, routeName, area, grade, style, removeAscent }) => {
  const [isFront, setIsFront] = useState(true);

  const changeCardSide = (value) => {
    setIsFront(value);
  };

  const removeCard = () => {
    console.log("remove");
  };

  return (
    <OuterAscentCard className={!isFront && "flip"}>
      <FrontAscentCard onClick={() => changeCardSide(false)}>
        <TrashIcon onClick={() => removeAscent(id)} />
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
      </FrontAscentCard>
      <ReverseAscentCard onClick={() => changeCardSide(true)}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </ReverseAscentCard>
    </OuterAscentCard>
  );
};

export default AscentCard;
