import * as React from "react";

import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";

import FormDialog from "../modal/form"
import RemoveDialog from "../modal/remove"
import styles from './../../../styles/list.module.css'
import InfoDialog from "../modal/info";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function ListComponent() {
  return (
    <List sx={{ width: "100%", height: "100%" }}>
      {/* Item */}

      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <div className={styles.listAction}>
            <InfoDialog data={{date: '04/10/2021 - 21:26', type: 'Fisioterapia'}} />
            <FormDialog data={{ type: 'update', data: null}}/>
            <RemoveDialog />
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
            <RemoveDialog />
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
            <RemoveDialog />
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
            <RemoveDialog />
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
            <RemoveDialog />
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
