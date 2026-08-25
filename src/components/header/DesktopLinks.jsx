import { Menu, MenuItem, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect } from "react";

const DesktopLinks = ({
  handleClose,
  baseTextStyle,
  item,
  handleOpen,
  anchorEl,
  setAnchorEl,
  isMobile,
}) => {
  useEffect(() => {
    if (!isMobile) {
      setAnchorEl(null);
    }
  }, [isMobile, setAnchorEl]);
  return (
    <div>
      <Button
        onClick={handleOpen}
        endIcon={<ExpandMoreIcon />}
        sx={{
          ...baseTextStyle,
          padding: "6px 12px",
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        <Typography sx={{ ...baseTextStyle }}>{item.name}</Typography>
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose, disablePadding: true }}
        PaperProps={{ sx: { mt: 1 } }}
      >
        {item.subLinks.map((sub) => (
          <MenuItem
            key={sub.name}
            component={Link}
            to={sub.path}
            onClick={handleClose}
            sx={{
              ...baseTextStyle,
              py: 1,
              px: 2,
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Typography sx={{ ...baseTextStyle }}>{sub.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
export default DesktopLinks;
