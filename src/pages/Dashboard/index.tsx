import { FC } from "react";
import { Grid } from "@mui/material";
import { HeadSection, Heading } from "../../utilities/styles/conmon";
import { Card, CardTitle } from "./styles";
import { DynamicFeedOutlined, ListAltOutlined, PieChart } from "@mui/icons-material";

const Dashboard: FC = () => {
  return (
    <div>
      <HeadSection>
        <Heading variant="h4">Dashboard</Heading>
      </HeadSection>
      <Grid container spacing={2} p={2}>
        <Grid item xs={12} md={4}>
          <Card>
            <PieChart sx={{ color: "white", fontSize: "92px" }} />
            <div>
              <CardTitle variant="h3">Users</CardTitle>
              <CardTitle variant="h5">10</CardTitle>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <ListAltOutlined sx={{ color: "white", fontSize: "92px" }} />
            <div>
              <CardTitle variant="h3">Todos</CardTitle>
              <CardTitle variant="h5">10</CardTitle>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <DynamicFeedOutlined sx={{ color: "white", fontSize: "92px" }} />
            <div>
              <CardTitle variant="h3">Posts</CardTitle>
              <CardTitle variant="h5">10</CardTitle>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
