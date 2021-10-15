import * as React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InfoIcon from "@mui/icons-material/Info";

import { IconButton } from "@mui/material";

export default function InfoDialog(props: any) {
  const { data } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton edge="end" aria-label="delete" sx={{ padding: "0px 15px" }} onClick={handleClickOpen}>
        <InfoIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Detalhes do Agendamento</DialogTitle>
        <DialogContent>
          <div style={{ margin: "8px 0px" }}><strong>Data: </strong><span>{ data.date }</span></div>
          <div style={{ padding: "8px 0px" }}><strong>Tipo: </strong><span>{ data.type }</span></div>         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
