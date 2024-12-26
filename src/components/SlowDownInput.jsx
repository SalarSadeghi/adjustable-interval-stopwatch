import React, { forwardRef } from "react";
import { LightTooltip } from "./LightTooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const SlowDownInput = forwardRef((props, ref) => {
  return (
    <div className="w-1/3 flex flex-col gap-2">
      <label
        className="flex gap-1 text-sm font-medium items-center"
        htmlFor="intervalInput"
      >
        Slow Down
        <LightTooltip
          title="input field with a default value of 1 second, allowing users to slow down the time."
          placement="top-end"
        >
          <InfoOutlinedIcon
            className="text-blue-300 cursor-pointer"
            fontSize="small"
          />
        </LightTooltip>
      </label>
      <input
        id="intervalInput"
        ref={ref}
        defaultValue={1}
        min={1}
        type="number"
        className="border border-gray-300 rounded-md p-2 w-full text-black"
      />
    </div>
  );
});

export default SlowDownInput;
