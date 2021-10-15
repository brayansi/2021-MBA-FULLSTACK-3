import * as React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";

import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

export default function FormDialog(props: any) {

  const { type, data } = props;
  const [open, setOpen] = React.useState(false);
  const [agendamento, setAgendamento] = React.useState(false);
  const [profissional, setProfficional] = React.useState(false);
  const [selectedDate, handleDateChange] = React.useState(new Date());


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChangeAgendamento = (event: any) => {
    setAgendamento(event.target.value);
  };

  const onChangeProfissional = (event: any) => {
    setProfficional(event.target.value);
  };

  const create = () => {
    if (type === "create") {
      console.log("cadastrar");
    } else {
      console.log("atualizar");
    }
    handleClose();
  };

  return (
    <div>
      <IconButton
        edge="end"
        aria-label="delete"
        sx={{ padding: "0px 15px" }}
        onClick={handleClickOpen}
      >
        <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} sx={{ width: "100%" }}>
        <DialogTitle>
          {type === "create"
            ? "Cadastrar Agendamento"
            : "Atualizar Agendamento"}
        </DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <InputLabel id="agendamento">Agendamento</InputLabel>
            <Select
              labelId="agendamento"
              id="agendamento"
              value={agendamento}
              label="Agendamento"
              onChange={onChangeAgendamento}
            >
              <MenuItem value={1}>Fisioterapia 1</MenuItem>
              <MenuItem value={2}>Fisioterapia 2</MenuItem>
              <MenuItem value={3}>Fisioterapia 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="profissional">Profissional</InputLabel>
            <Select
              labelId="profissional"
              id="profissional"
              value={profissional}
              label="Profissional"
              onChange={onChangeProfissional}
            >
              <MenuItem value={1}>Profissional 1</MenuItem>
              <MenuItem value={2}>Profissional 2</MenuItem>
              <MenuItem value={3}>Profissional 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>

          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
          <Button onClick={create}>
            {type === "create" ? "Cadastrar" : "Atualizar"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
