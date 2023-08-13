import { FC } from "react";
import { IAlbumWithPhotos } from "../../../utilities/types/albums";
import { HeadSection, Heading } from "../../../utilities/styles/conmon";
import { Box, Grid, Tooltip } from "@mui/material";
import { AlbumPhotosOverlay, DetailValue, ViewIcon } from "../styles";
import { Preview } from "@mui/icons-material";
import { Link } from "react-router-dom";

type AlbumsProps = {
  userAlbums: IAlbumWithPhotos[];
};

export const AlbumsSection: FC<AlbumsProps> = ({ userAlbums }) => {
  return (
    <>
      <HeadSection>
        <Heading variant="h4">User Albums</Heading>
      </HeadSection>

      <Grid container spacing={2} p={2}>
        {userAlbums.map((album, i) => {
          return (
            <Grid key={i} item xs={12} md={6}>
              <Box>
                <DetailValue sx={{ color: "#000", marginBottom: "12px" }}>
                  {album.title}
                </DetailValue>
                <AlbumPhotosOverlay>
                  <Tooltip title="View Album" placement="top">
                    <ViewIcon to={`/album/${album.id}`}>
                      <Preview sx={{ fontSize: "84px", color: "black" }} />
                    </ViewIcon>
                  </Tooltip>
                  {album.photos.slice(0, 4).map((photo, j) => {
                    return (
                      <img
                        key={`${i}-${j}`}
                        loading="lazy"
                        style={{ marginRight: "6px" }}
                        src={photo.thumbnailUrl}
                      />
                    );
                  })}
                </AlbumPhotosOverlay>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
