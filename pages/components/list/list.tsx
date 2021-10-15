import * as React from "react";

import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import FormDialog from "../modal/form"
import RemoveDialog from "../modal/remove"
import styles from './../../../styles/list.module.css'
import InfoDialog from "../modal/info";

import * as agendamentoService from "../../services/agendamentoService";

export default function ListComponent() {
  
  React.useEffect(() => {
      agendamentoService.getAgendamento().then((list)=> {
        console.log(list);
      }).catch(()=> {
        console.log('error')
      });
  }, []);

  return (
    <List sx={{ width: "100%", height: "100%" }}>
      {/* Item */}

      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <div className={styles.listAction}>
            <InfoDialog data={{date: '04/10/2021 - 21:26', type: 'Fisioterapia'}} />
            <FormDialog data={{ type: 'update', data: null}}/>
            <RemoveDialog data={{id: '01'}} />

          </div>
        }
      >
        <ListItemText
          primary="04/10/2021 - 21:26"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Fisioterapia
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />

      {/* Item */}
      
      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <div className={styles.listAction}>
            <InfoDialog data={{date: '04/10/2021 - 21:26', type: 'Fisioterapia'}} />
            <FormDialog data={{ type: 'update', data: null}}/>
            <RemoveDialog data={{id: '01'}} />

          </div>
        }
      >
        <ListItemText
          primary="04/10/2021 - 21:26"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Fisioterapia
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />

      {/* Item */}
      
      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <div className={styles.listAction}>
            <InfoDialog data={{date: '04/10/2021 - 21:26', type: 'Fisioterapia'}} />
            <FormDialog data={{ type: 'update', data: null}}/>
            <RemoveDialog data={{id: '01'}} />
          </div>
        }
      >
        <ListItemText
          primary="04/10/2021 - 21:26"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Fisioterapia
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />

      {/* Item */}
      
      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <div className={styles.listAction}>
            <InfoDialog data={{date: '04/10/2021 - 21:26', type: 'Fisioterapia'}} />
            <FormDialog data={{ type: 'update', data: null}}/>
            <RemoveDialog data={{id: '01'}} />

          </div>
        }
      >
        <ListItemText
          primary="04/10/2021 - 21:26"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Fisioterapia
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />

      {/* Item */}
      
      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <div className={styles.listAction}>
            <InfoDialog data={{date: '04/10/2021 - 21:26', type: 'Fisioterapia'}} />
            <FormDialog data={{ type: 'update', data: null}}/>
            <RemoveDialog data={{id: '01'}} />

          </div>
        }
      >
        <ListItemText
          primary="04/10/2021 - 21:26"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Fisioterapia
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
