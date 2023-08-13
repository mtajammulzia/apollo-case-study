import { FC } from "react";
import { HeadSection, Heading } from "../../utilities/styles/conmon";
import { useParams } from "react-router-dom";
import { useUserData } from "../../hooks/useListUsers copy";
import { DetailsSection } from "./components/Details";
import { AlbumsSection } from "./components/Albums";
import { Divider } from "@mui/material";
import { PostsSection } from "./components/Posts";
import { TodosSection } from "./components/Todos";

type UserDetailsParams = {
  userId: string;
};

const UserDetails: FC = () => {
  const { userId } = useParams<UserDetailsParams>();
  const { userData, isLoading } = useUserData(userId || "");

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
  if (!userData) {
    return (
      <div>
        <HeadSection>
          <Heading variant="h4">Oops!!! User details not found</Heading>
        </HeadSection>
      </div>
    );
  }

  const { userDetails, userAlbums, userPosts, userTodos } = userData;

  return (
    <div>
      <DetailsSection userDetails={userDetails} />
      <Divider sx={{ mt: 6 }} />
      <AlbumsSection userAlbums={userAlbums} />
      <Divider sx={{ mt: 6 }} />
      <PostsSection userDetails={userDetails} userPosts={userPosts} />
      <Divider sx={{ mt: 6 }} />
      <TodosSection todos={userTodos} />
    </div>
  );
};

export default UserDetails;
