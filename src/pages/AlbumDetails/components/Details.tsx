import { FC } from "react";
import { Album } from "@mui/icons-material";
import { Grid, capitalize, useMediaQuery } from "@mui/material";
import { DetailsCard, DetailKey, DetailValue } from "../styles";
import { HeadSection, Heading } from "../../../utilities/styles/conmon";
import { IAlbumData } from "../../../utilities/types/albums";

type DetailsProps = {
  albumData: IAlbumData;
};

export const DetailsSection: FC<DetailsProps> = ({ albumData }) => {
  const { title, userDetails, photos } = albumData;
  const { name, phone, website } = userDetails;
  const isLargeDevice = useMediaQuery(`(min-width: 600px)`);

  return (
    <>
      <HeadSection>
        <Heading variant="h4">Album Details</Heading>
      </HeadSection>
      <Grid container spacing={2} p={2}>
        <Grid item xs={12} md={6}>
          <DetailsCard>
            <div>
              <DetailKey>Album Name:&nbsp;</DetailKey>
              <DetailKey>Owner:&nbsp;</DetailKey>
              <DetailKey>Contact:&nbsp;</DetailKey>
              <DetailKey>Website:&nbsp;</DetailKey>
              <DetailKey>Total Photos:&nbsp;</DetailKey>
              <DetailKey>Updated At:&nbsp;</DetailKey>
            </div>
            <div>
              <DetailValue>{capitalize(title)}</DetailValue>
              <DetailValue>{name}</DetailValue>
              <DetailValue>{phone}</DetailValue>
              <DetailValue>{website}</DetailValue>
              <DetailValue>{photos.length}</DetailValue>
              <DetailValue>Mon 14, Aug, 2023</DetailValue>
            </div>
            {isLargeDevice && (
              <div style={{ display: "flex", justifyContent: "flex-end", flexGrow: 1 }}>
                <Album sx={{ color: "#FFF", fontSize: "148px" }} />
              </div>
            )}
          </DetailsCard>
        </Grid>
      </Grid>
    </>
  );
};
