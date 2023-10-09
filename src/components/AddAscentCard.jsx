import { Card } from "./styles/Card.styled";

const AddAscentCard = () => {
  const addAscent = () => console.log("open add ascent modal");

  return <Card onClick={addAscent}></Card>;
};

export default AddAscentCard;
