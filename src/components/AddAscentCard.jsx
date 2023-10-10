import { Card } from "./styles/Card.styled";
import Sign from "./Sign";

const AddAscentCard = () => {
  const addAscent = () => console.log("open add ascent modal");

  return (
    <Card onClick={addAscent}>
      <Sign />
    </Card>
  );
};

export default AddAscentCard;
