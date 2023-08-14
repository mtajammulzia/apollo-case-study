import { FC } from "react";
import { Grid } from "@mui/material";
import { HeadSection, Heading } from "../../utilities/styles/conmon";
import { Card, CardTitle } from "./styles";
import { DynamicFeedOutlined, ListAltOutlined, PieChart } from "@mui/icons-material";
import { useAnalytics } from "../../hooks/useAnalytics";

const Dashboard: FC = () => {
  const { analytics, isLoading, errors } = useAnalytics();

  // Display loading state when api call is being processed.
  if (isLoading) {
    return (
      <div>
        <HeadSection>
          <Heading variant="h4">Loading...</Heading>
        </HeadSection>
      </div>
    );
  }

  // Display error state when api call fails to return data.
  if (!analytics) {
    return (
      <div>
        <HeadSection>
          <Heading variant="h4">{errors.error}</Heading>
        </HeadSection>
      </div>
    );
  }

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
              <div style={{ display: "flex" }}>
                <CardTitle variant="h5">{analytics.users.count}</CardTitle>
                <CardTitle
                  variant="h5"
                  style={{ color: analytics.users.change >= 0 ? "#03d22c" : "red" }}
                >
                  {analytics.users.change >= 0
                    ? `+${analytics.users.change}%`
                    : `${analytics.users.change}%`}
                </CardTitle>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <DynamicFeedOutlined sx={{ color: "white", fontSize: "92px" }} />
            <div>
              <CardTitle variant="h3">Posts</CardTitle>
              <div style={{ display: "flex" }}>
                <CardTitle variant="h5">{analytics.posts.count}</CardTitle>
                <CardTitle
                  variant="h5"
                  style={{ color: analytics.posts.change >= 0 ? "#03d22c" : "red" }}
                >
                  {analytics.posts.change >= 0
                    ? `+${analytics.posts.change}%`
                    : `${analytics.posts.change}%`}
                </CardTitle>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <ListAltOutlined sx={{ color: "white", fontSize: "92px" }} />
            <div>
              <CardTitle variant="h3">Todos</CardTitle>
              <div style={{ display: "flex" }}>
                <CardTitle variant="h5">{analytics.todos.count}</CardTitle>
                <CardTitle
                  variant="h5"
                  style={{ color: analytics.todos.change >= 0 ? "#03d22c" : "red" }}
                >
                  {analytics.todos.change >= 0
                    ? `+${analytics.todos.change}%`
                    : `${analytics.todos.change}%`}
                </CardTitle>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
