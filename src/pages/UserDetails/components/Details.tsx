import { FC } from "react";
import { ContentCopy, OpenInNew, People } from "@mui/icons-material";
import { Grid, Tooltip, IconButton, useMediaQuery } from "@mui/material";
import { DetailsCard, DetailKey, DetailValue } from "../styles";
import { IApiUser } from "../../../utilities/types/user";
import { HeadSection, Heading } from "../../../utilities/styles/conmon";

type DetailsProps = {
  userDetails: IApiUser;
};

export const DetailsSection: FC<DetailsProps> = ({ userDetails }) => {
  const { name, username, email, phone, website } = userDetails;
  const isLargeDevice = useMediaQuery(`(min-width: 600px)`);

  return (
    <>
      <HeadSection>
        <Heading variant="h4">User Details</Heading>
      </HeadSection>
      <Grid container spacing={2} p={2}>
        <Grid item xs={12} md={6}>
          <DetailsCard>
            <div>
              <DetailKey>Name:&nbsp;</DetailKey>
              <DetailKey>Username:&nbsp;</DetailKey>
              <DetailKey>Email:&nbsp;</DetailKey>
              <DetailKey>Phone:&nbsp;</DetailKey>
              <DetailKey>Website:&nbsp;</DetailKey>
            </div>
            <div>
              <DetailValue>{name}</DetailValue>
              <DetailValue>{username}</DetailValue>
              <DetailValue>{email}</DetailValue>
              <div style={{ display: "flex", alignItems: "center" }}>
                <DetailValue>{phone}</DetailValue>
                <Tooltip title="Copy" placement="top">
                  <IconButton
                    sx={{ padding: 0, marginLeft: "4px" }}
                    onClick={() => {
                      navigator.clipboard.writeText(phone);
                    }}
                  >
                    <ContentCopy sx={{ color: "white", fontSize: "18px" }} />
                  </IconButton>
                </Tooltip>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <DetailValue>{website}</DetailValue>
                <Tooltip title="Visit" placement="top">
                  <a
                    href={`https://www.${website}`}
                    target="_blank"
                    style={{ display: "flex", alignItems: "center", marginLeft: "4px" }}
                  >
                    <OpenInNew sx={{ color: "white", fontSize: "18px" }} />
                  </a>
                </Tooltip>
              </div>
            </div>
            {isLargeDevice && (
              <div style={{ display: "flex", justifyContent: "flex-end", flexGrow: 1 }}>
                <People sx={{ color: "#FFF", fontSize: "148px" }} />
              </div>
            )}
          </DetailsCard>
        </Grid>
      </Grid>
    </>
  );
};
