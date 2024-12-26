import React, { forwardRef } from "react";
import { LightTooltip } from "./LightTooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const TimeInput = forwardRef((props, ref) => {
  return (
    <div className="w-1/3 flex flex-col gap-2">
      <label className="text-sm font-medium flex gap-1" htmlFor="timeInput">
        Set Time
        <LightTooltip
          placement="top-start"
          title="Input field with a default value of 0 seconds, enabling users to adjust the stopwatch time in seconds."
        >
          <InfoOutlinedIcon
            className="text-blue-300 cursor-pointer"
            fontSize="small"
          />
        </LightTooltip>
      </label>
      <input
        id="timeInput"
        ref={ref}
        defaultValue={0}
        min={0}
        type="number"
        className="border border-gray-300 rounded-md p-2 w-full text-black"
        onBlur={props.adjustTimeHandler}
      />
    </div>
  );
});

export default TimeInput;
