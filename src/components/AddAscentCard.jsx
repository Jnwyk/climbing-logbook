import { StyledAddAscentCard } from "./styles/Card.styled";
import Sign from "./Sign";

const AddAscentCard = ({ onClick }) => {
  return (
    <StyledAddAscentCard onClick={onClick} type="add">
      <Sign />
    </StyledAddAscentCard>
  );
};

export default AddAscentCard;
