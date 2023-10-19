import { Card } from "./styles/Card.styled";
import Sign from "./Sign";

const AddAscentCard = ({ onClick }) => {
  return (
    <Card onClick={onClick} type="add">
      <Sign />
    </Card>
  );
};

export default AddAscentCard;
