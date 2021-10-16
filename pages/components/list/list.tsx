import * as React from "react";

import {
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import FormDialog from "../modal/form";
import RemoveDialog from "../modal/remove";
import styles from "./../../../styles/list.module.css";
import InfoDialog from "../modal/info";

import * as agendamentoService from "../../services/agendamentoService";

export default class ListComponent extends React.Component {
  state = {
    lists: { 
      data: []
    },
  };

  componentDidMount() {
    agendamentoService
      .getAgendamento()
      .then((lists) => {
        this.setState({ lists });
        console.log(this.state.lists);
      })
      .catch(() => {
        console.log("error");
      });
  }

  secondaryAction(item: any) {
    return (
      <div className={styles.listAction}>
        <InfoDialog data={{ date: item.login, type: item.type }}/>
        <FormDialog data={{ type: "update", data: item }} />
        <RemoveDialog data={{ id: item.id }} />
      </div>
    )
  }

  listItem(item: any) {
    return (
      <div>
        <ListItem alignItems="flex-start" secondaryAction={this.secondaryAction(item)}>
          <ListItemText primary={item.login} secondary={item.type}/>
        </ListItem>
        <Divider variant="inset" component="li" />
      </div>
    )
  }

  render() {
    return (
      <List sx={{ width: "100%", height: "100%", marginTop: "200px" }}>
        { this.state.lists.data?.map((item: any) => this.listItem(item))}
      </List>
    );
  }
}
