import * as React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from "@material-ui/icons/Edit";

import { IconButton } from '@material-ui/core';


export default function FormDialog(props: any) {
  const { type, data } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const create = () => {
    if(type === 'create') {
      console.log('cadastrar');
    } else {
      console.log('atualizar')
    }
    handleClose();
  }

  return (
    <div>
      <IconButton edge="end" aria-label="delete" sx={{ padding: '0px 15px' }}  onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{ type === 'create' ? 'Cadastrar Agendamento' : 'Atualizar Agendamento'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
          <Button onClick={create}>{ type === 'create' ? 'Cadastrar' : 'Atualizar'}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}