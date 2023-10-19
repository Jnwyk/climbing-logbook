import { Grid } from "./styles/Grid.styled";
import AscentCard from "./AscentCard";
import AddAscentCard from "./AddAscentCard";

const AscentList = ({ addAscent, ascentArray }) => {
  return (
    <Grid>
      {ascentArray &&
        ascentArray.map((ascent) => (
          <AscentCard
            key={ascent.id}
            routeName={ascent.routeName}
            area={ascent.area}
            grade={ascent.grade}
            style={ascent.style}
          />
        ))}
      <AddAscentCard onClick={addAscent} />
    </Grid>
  );
};

export default AscentList;