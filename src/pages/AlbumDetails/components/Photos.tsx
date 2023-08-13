import { FC, ReactNode, useState } from "react";
import { IAlbumData } from "../../../utilities/types/albums";
import { HeadSection, Heading } from "../../../utilities/styles/conmon";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

type PhotosSectionProps = {
  albumData: IAlbumData;
};

export const PhotosSection: FC<PhotosSectionProps> = ({ albumData }) => {
  const [viewPhoto, setViewPhoto] = useState("");
  const [open, setOpen] = useState(false);

  const handleViewPhoto = (url: string) => {
    setViewPhoto(url);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setViewPhoto("");
    setOpen(false);
  };

  return (
    <>
      <HeadSection>
        <Heading variant="h4">Album Photos</Heading>
      </HeadSection>
      <Grid container spacing={2} p={2}>
        {albumData.photos.map((photo, index) => {
          return (
            <Grid item key={index} xs={6} md={2}>
              <img
                src={photo.thumbnailUrl}
                style={{ cursor: "pointer" }}
                onClick={() => handleViewPhoto(photo.url)}
              ></img>
            </Grid>
          );
        })}
      </Grid>
      <BasicModal open={open} onClose={handleCloseModal}>
        <img src={viewPhoto}></img>
      </BasicModal>
    </>
  );
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

interface BasicModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

function BasicModal(props: BasicModalProps) {
  const { open, onClose, children } = props;
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
}
