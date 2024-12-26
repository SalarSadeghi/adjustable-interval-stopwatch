import React, { forwardRef } from "react";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import CustomButton from "./CustomButton";
import { formatTimeMS } from "../utils";

const SlowDownCircularTimer = forwardRef((props, ref) => {
  return (
    <div
      className={`border-[3px] rounded-full w-[200px] h-[200px] flex justify-center items-center ${
        props.isRunning ? "border-green-400" : "border-red-500"
      } relative `}
    >
      <span className="text-blue-100" ref={ref}>
        {formatTimeMS(props.time)}
      </span>
      <div className="absolute bottom-4 flex justify-center">
        {props.isRunning ? (
          <CustomButton
            onClick={props.handleStop}
            icon={
              <PauseCircleOutlineIcon
                fontSize="large"
                className="hover:text-blue-300"
                sx={{ fontSize: 40 }}
              />
            }
          />
        ) : (
          <CustomButton
            onClick={props.handleStart}
            icon={
              <PlayCircleOutlineOutlinedIcon
                fontSize="large"
                className="hover:text-blue-300"
                sx={{ fontSize: 40 }}
              />
            }
          />
        )}
      </div>
    </div>
  );
});

export default SlowDownCircularTimer;
