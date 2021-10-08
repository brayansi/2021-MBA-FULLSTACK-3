import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import * as React from "react";

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
          <div>
            <IconButton edge="end" aria-label="delete" sx={{ padding: '0px 15px' }}>
              <InfoIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" sx={{ padding: '0px 15px' }}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" sx={{ padding: '0px 15px' }}>
              <DeleteIcon />
            </IconButton>
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
          <div>
            <IconButton edge="end" aria-label="delete" sx={{ padding: '0px 15px' }}>
              <InfoIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" sx={{ padding: '0px 15px' }}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" sx={{ padding: '0px 15px' }}>
              <DeleteIcon />
            </IconButton>
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
          <div>
            <IconButton edge="end" aria-label="delete" sx={{ padding: '0px 15px' }}>
              <InfoIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" sx={{ padding: '0px 15px' }}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" sx={{ padding: '0px 15px' }}>
              <DeleteIcon />
            </IconButton>
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
          <div>
            <IconButton edge="end" aria-label="delete" sx={{ padding: '0px 15px' }}>
              <InfoIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" sx={{ padding: '0px 15px' }}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" sx={{ padding: '0px 15px' }}>
              <DeleteIcon />
            </IconButton>
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
          <div>
            <IconButton edge="end" aria-label="delete" sx={{ padding: '0px 15px' }}>
              <InfoIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" sx={{ padding: '0px 15px' }}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" sx={{ padding: '0px 15px' }}>
              <DeleteIcon />
            </IconButton>
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
