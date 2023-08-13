import { useParams } from "react-router-dom";
import { useAlbumDetails } from "../../hooks/useAlbumDetails";
import { HeadSection, Heading } from "../../utilities/styles/conmon";
import { DetailsSection } from "./components/Details";
import { Divider } from "@mui/material";
import { PhotosSection } from "./components/Photos";

type AlbumDetailsParams = {
  albumId: string;
};

export default function AlbumDetails() {
  const { albumId } = useParams<AlbumDetailsParams>();
  const { albumData, isLoading } = useAlbumDetails(albumId || "");

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
  if (!albumData) {
    return (
      <div>
        <HeadSection>
          <Heading variant="h4">Oops!!! Album details not found</Heading>
        </HeadSection>
      </div>
    );
  }

  return (
    <div>
      <DetailsSection albumData={albumData} />
      <Divider sx={{ mt: 6 }} />
      <PhotosSection albumData={albumData} />
    </div>
  );
}
