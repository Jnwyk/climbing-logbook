import { Grid } from "./styles/Grid.styled";
import AscentCard from "./AscentCard";
import AddAscentCard from "./AddAscentCard";

const AscentList = ({ addAscent, ascentArray, removeAscent }) => {
  return (
    <Grid>
      {ascentArray &&
        ascentArray.map((ascent) => (
          <AscentCard
            key={ascent.id}
            id={ascent.id}
            routeName={ascent.routeName}
            area={ascent.area}
            grade={ascent.grade}
            style={ascent.style}
            removeAscent={(id) => removeAscent(id)}
          />
        ))}
      <AddAscentCard onClick={addAscent} />
    </Grid>
  );
};

export default AscentList;
