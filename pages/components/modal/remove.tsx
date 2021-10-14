import * as React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DeleteIcon from "@material-ui/icons/Delete";

import { IconButton } from "@material-ui/core";

export default function RemoveDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const remove = () => {
    console.log('remover');
    handleClose();
  }

  return (
    <div>
      <IconButton edge="end" aria-label="delete" sx={{ padding: "0px 15px" }} onClick={handleClickOpen}>
        <DeleteIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Remover Agendamento</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Deseja realmente remover este item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Não</Button>
          <Button onClick={remove}>Sim</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
