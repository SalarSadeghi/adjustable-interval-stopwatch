import { IconButton } from "@mui/material";
import React, { memo } from "react";
import { LightTooltip } from "./LightTooltip";

const CustomButton = ({ onClick, title = "", icon }) => {
  return (
    <IconButton sx={{ color: "white" }} onClick={onClick}>
      <LightTooltip title={title}>{icon}</LightTooltip>
    </IconButton>
  );
};

export default memo(CustomButton);
