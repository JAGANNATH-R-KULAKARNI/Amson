import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PopperUI from "./Popper";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import LocationCityIcon from "@mui/icons-material/LocationCity";

const shop = [
  {
    text: "Bio Matrix",
    icon: <FingerprintIcon />,
  },
  {
    text: "Security Alarm",
    icon: <NotificationsActiveIcon />,
  },
  {
    text: "CCTV & DVR Set",
    icon: <VideoCameraBackIcon />,
  },
  {
    text: "Security Cameras",
    icon: <PhotoCameraIcon />,
  },
];

const brands1 = [
  {
    text: "Advik",
    icon: <LocationCityIcon />,
  },
  {
    text: "Godrej",
    icon: <LocationCityIcon />,
  },
  {
    text: "Bosch",
    icon: <LocationCityIcon />,
  },
  {
    text: "HikVision",
    icon: <LocationCityIcon />,
  },
  {
    text: "CP-Plus",
    icon: <LocationCityIcon />,
  },
];

const brands2 = [
  {
    text: "Honeywell",
    icon: <LocationCityIcon />,
  },
  {
    text: "Dahua",
    icon: <LocationCityIcon />,
  },
  {
    text: "Panasonic",
    icon: <LocationCityIcon />,
  },
  {
    text: "ESSL",
    icon: <LocationCityIcon />,
  },
  {
    text: "Secure Eye",
    icon: <LocationCityIcon />,
  },
];

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper
      style={{
        paddingLeft: "30px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
      elevation={1}
    >
      <BottomNavigation
        sx={{ marginTop: "20px" }}
        value={value}
        onChange={handleChange}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3px",
          }}
        >
          <PopperUI
            text="Home"
            arrow={false}
            ic={<HomeIcon style={{ fontSize: "17px" }} />}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PopperUI
            text="Shop"
            arrow={true}
            list={shop}
            list2={[]}
            two={false}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PopperUI
            text="Brands"
            arrow={true}
            list={brands1}
            list2={brands2}
            two={true}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2px",
          }}
        >
          <PopperUI
            text="Contact"
            arrow={false}
            ic={<CallIcon style={{ fontSize: "17px" }} />}
          />
        </div>
      </BottomNavigation>
    </Paper>
  );
}
