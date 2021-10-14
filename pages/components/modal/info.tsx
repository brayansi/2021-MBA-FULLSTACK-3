import * as React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import InfoIcon from "@material-ui/icons/Info";

import { IconButton } from "@material-ui/core";

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
