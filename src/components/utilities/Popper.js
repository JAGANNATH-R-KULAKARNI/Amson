import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ListUI from "./List";

export default function PositionedPopper(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    // setOpen((prev) => placement !== newPlacement || !prev);
    setOpen(true);
    setPlacement(newPlacement);
  };

  const handleClickClose = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    // setOpen((prev) => placement !== newPlacement || !prev);
    setOpen(false);
    setPlacement(newPlacement);
  };

  return (
    <Box
      sx={{ width: 130 }}
      onMouseOver={props.arrow ? handleClick("bottom") : null}
      onMouseLeave={props.arrow ? handleClickClose("bottom") : null}
    >
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={0}>
            <Paper>
              {props.arrow ? (
                <ListUI list={props.list} list2={props.list2} two={props.two} />
              ) : null}
            </Paper>
          </Fade>
        )}
      </Popper>

      <Grid container justifyContent="center">
        <Grid item>
          <Button
            variant="text"
            endIcon={
              props.arrow ? (
                <ArrowDropDownIcon style={{ fontSize: "30px" }} />
              ) : (
                props.ic
              )
            }
            style={{ fontFamily: "inherit", color: "black" }}
          >
            {props.text}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
