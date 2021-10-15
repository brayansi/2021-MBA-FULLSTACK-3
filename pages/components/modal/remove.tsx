import * as React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";

import { IconButton } from "@mui/material";

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