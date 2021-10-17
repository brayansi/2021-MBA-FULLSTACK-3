import * as React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

import * as agendamentoService from "../../services/agendamentoService";

import {
  Fab,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import moment from "moment";

interface Props {
  data:any
}

export default class FormDialog extends React.Component<Props,{}> {
  state = {
    //dialog
    open: false,
    type: 'create',
    
    //list
    procedimentos : [],
    profissionais: [],

    //form
    procedimento: 0,
    profissional: 0,
    data: null
  };

  constructor(props: any) {
    super(props);

    this.onCreate = this.onCreate.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.onChangeProcedimento = this.onChangeProcedimento.bind(this);
    this.onChangeProfissional = this.onChangeProfissional.bind(this);
    this.onChangeData = this.onChangeData.bind(this); 
    this.onClick = this.onClick.bind(this); 
  }

  async componentDidMount() {
    
    const { treatment, professional, date, time } = this.props.data.data;
    this.setState({procedimento: (treatment.procedure) ? treatment.procedure.id : 0, 
        profissional: professional.id, 
        data: new Date(`${date} ${time}`)})

    await agendamentoService
      .getProcedimentos()
      .then((result: any) => {
        this.setState({ procedimentos: result.data });
      })
      .catch(() => {
        console.log("Erro ao listar procedimentos");
      });
    
    await agendamentoService
      .getProfissionais()
      .then((result: any) => {
        this.setState({ profissionais: result.data });
      })
      .catch(() => {
        console.log("Erro ao listar profissionais");
      });
  }
 

  onUpdate(){
    this.setState({open: true, type: 'update'});
  }

  onCreate(){
    this.setState({open: true, type: 'create'});
  }


  handleClose(): void {
    this.setState({open: false});
  }

  onChangeProcedimento(event: any){
    this.setState({procedimento: event.target.value});
  }

  onChangeProfissional(event: any){
    this.setState({profissional: event.target.value});
  }

  onChangeData(newValue: any){
    this.setState({data: newValue});
  }

  onClick(){
    const{ procedimento, profissional, data} = this.state;

    if (this.state.procedimento && this.state.profissional && this.state.data) {
      if (this.state.type === "create") {
        this.create();
      } else {
        this.update();
      }
    } else {
      console.log("formulário vazio");
    }
    
    this.handleClose();
  }

  create() {
    const data = {
      date: "30/10/2021",
      time: "09:30",
        professional: this.state.profissionais.filter((profissional: any) => profissional.id === this.state.profissional)[0],
        treatment: {
          procedure: this.state.procedimentos.filter((procedimentos: any) => procedimentos.id === this.state.procedimentos)[0],
          patient: { "id": 7 }
        }
    }
    
    agendamentoService
      .saveAgendamento(data)
      .then(() => {
        console.log("Agendamento cadastrato com sucesso");
      })
      .catch(() => {
        console.log("Erro ao cadastrar agendamento");
      });
  }

  update() {
    const data = this.props.data.data;
        
    data.date = moment(this.state.data).format('MM/DD/yyyy');
    data.time = moment(this.state.data).format('HH:mm');
    data.professional = this.state.profissionais.filter((profissional: any) => profissional.id === this.state.profissional)[0];
    data.treatment.procedure = this.state.procedimentos.filter((procedimento: any) => procedimento.id === this.state.procedimento)[0];

    agendamentoService
      .saveAgendamento(data)
      .then(() => {
        console.log("Agendamento atualizado com sucesso");
      })
      .catch(() => {
        console.log("Erro ao atualizar agendamento");
    });
  }

  listItem(item: any) {
    return (
      <MenuItem key={item.id} value={item.id}>{item.name} {item.lastname ? item.lastname : ''}</MenuItem>
    )
  }

  render(){
      return (
      <div>
        <Fab size="medium" color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
        <IconButton
          edge="end"
          aria-label="delete"
          sx={{ padding: "0px 15px" }}
          onClick={this.onUpdate}
        >
          <EditIcon />
        </IconButton>
        <Dialog open={this.state.open} onClose={this.handleClose} sx={{ width: "100%" }}>
          <DialogTitle>
            {this.state.type === "create"
              ? "Cadastrar Agendamento"
              : "Atualizar Agendamento"}
          </DialogTitle>
          <DialogContent>
            <FormControl fullWidth>
              <InputLabel id="procedimento">Procedimento</InputLabel>
              <Select
                labelId="procedimento"
                id="procedimento"
                value={this.state.procedimento}
                label="Procedimento"
                onChange={this.onChangeProcedimento}
              >
                { this.state.procedimentos?.map((item: any) => this.listItem(item))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="profissional">Profissional</InputLabel>
              <Select
                labelId="profissional"
                id="profissional"
                value={this.state.profissional}
                onChange={this.onChangeProfissional}
              >
                { this.state.profissionais?.map((item: any) => this.listItem(item))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props: any) => <TextField {...props} />}
                  label="Selecione uma data"
                  value={this.state.data}
                  onChange={this.onChangeData}
                  inputFormat="dd/MM/yyyy HH:mm"
                />
              </LocalizationProvider>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Fechar</Button>
            <Button onClick={this.onClick}>
              {this.state.type === "create" ? "Cadastrar" : "Atualizar"}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
