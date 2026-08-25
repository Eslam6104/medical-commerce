import { useState, useCallback } from "react";
import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import DesktopLink from "./DesktopLinks";
import MobileLinks from "./MobileLinks";

const Links = ({ item, onLinkClick, isMobile }) => {
  const [openDrop, setOpenDrop] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const hasSubLinks = item.subLinks?.length > 0;

  const baseTextStyle = {
    color: "black",
    fontWeight: "400",
    fontSize: "1rem",
    textTransform: "none",
    textDecoration: "none",
    fontFamily: "inherit",
    "&:hover": { color: "var(--main-color)" },
  };
  const handleOpen = useCallback(
    (event) => {
      if (isMobile) {
        setOpenDrop((prev) => !prev);
      } else {
        setAnchorEl(event.currentTarget);
      }
    },
    [isMobile]
  );

  const handleClose = useCallback(() => {
    setOpenDrop(false);
    setAnchorEl(null);
  }, []);

  if (!hasSubLinks) {
    return (
      <Button
        component={RouterLink}
        to={item.path}
        onClick={() => isMobile && onLinkClick?.()}
        sx={{
          ...baseTextStyle,
          padding: "6px 12px",
          ...(isMobile && { justifyContent: "flex-start", width: "100%" }),
        }}
      >
        {item.name}
      </Button>
    );
  }

  return isMobile ? (
    <MobileLinks
      item={item}
      openDrop={openDrop}
      handleOpen={handleOpen}
      onLinkClick={onLinkClick}
      baseTextStyle={baseTextStyle}
    />
  ) : (
    <DesktopLink
      item={item}
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      handleOpen={handleOpen}
      handleClose={handleClose}
      baseTextStyle={baseTextStyle}
      isMobile={isMobile}
    />
  );
};
export default Links;
