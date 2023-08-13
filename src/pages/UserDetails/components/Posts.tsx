import { FC, useState } from "react";
import { HeadSection, Heading } from "../../../utilities/styles/conmon";
import { Grid, Typography } from "@mui/material";
import { IPostWithComments } from "../../../utilities/types/posts";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IApiUser } from "../../../utilities/types/user";
import { capitalizeAll } from "../../../utilities/helpers/general";

type PostsProps = {
  userDetails: IApiUser;
  userPosts: IPostWithComments[];
};

export const PostsSection: FC<PostsProps> = ({ userDetails, userPosts }) => {
  return (
    <>
      <HeadSection>
        <Heading variant="h4">User Posts</Heading>
      </HeadSection>
      <Grid container spacing={2} p={2}>
        {userPosts.map((post, i) => {
          return (
            <Grid key={i} item xs={12} md={4}>
              <PostCard userDetails={userDetails} post={post} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface PostCardProps {
  userDetails: IApiUser;
  post: IPostWithComments;
}

function PostCard(props: PostCardProps) {
  const { userDetails, post } = props;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }}>{userDetails.name[0]}</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={capitalizeAll(post.title)}
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {post.comments.map((comment) => (
            <div style={{ display: "flex", marginBottom: "24px" }}>
              <Avatar
                sx={{ bgcolor: red[500] }}
                variant="rounded"
                sizes="small"
                aria-label="recipe"
              >
                {comment.email[0]}
              </Avatar>
              <div>
                <Typography paragraph sx={{ ml: 4 }}>
                  {comment.email}
                </Typography>
                <Typography paragraph sx={{ ml: 4 }}>
                  {comment.body}
                </Typography>
              </div>
            </div>
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}
