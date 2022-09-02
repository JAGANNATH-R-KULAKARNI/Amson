import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList(props) {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid item xs={12} md={6}>
        <Demo style={{ display: "flex", justifyContent: "center" }}>
          <List dense={dense}>
            {props.list &&
              props.list.map((item) => {
                return (
                  <div
                    onMouseOver={(e) => {
                      e.target.style.cursor = "pointer";
                      e.target.style.textDecoration = "underline";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.textDecoration = "none";
                    }}
                  >
                    <ListItem>
                      <ListItemIcon style={{ color: "inherit" }}>
                        {item["icon"]}
                      </ListItemIcon>
                      <ListItemText
                        primary={item["text"]}
                        onMouseLeave={(e) => {
                          e.target.style.textDecoration = "none";
                        }}
                      />
                    </ListItem>
                  </div>
                );
              })}
          </List>
          {props.two ? (
            <List dense={dense} style={{ paddingRight: "20px" }}>
              {props.list2 &&
                props.list2.map((item) => {
                  return (
                    <div
                      onMouseOver={(e) => {
                        e.target.style.cursor = "pointer";
                        e.target.style.textDecoration = "underline";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.textDecoration = "none";
                      }}
                    >
                      <ListItem>
                        <ListItemIcon style={{ color: "inherit" }}>
                          {item["icon"]}
                        </ListItemIcon>
                        <ListItemText
                          primary={item["text"]}
                          onMouseLeave={(e) => {
                            e.target.style.textDecoration = "none";
                          }}
                        />
                      </ListItem>
                    </div>
                  );
                })}
            </List>
          ) : null}
        </Demo>
      </Grid>
    </Box>
  );
}
