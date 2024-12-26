import React, { useCallback, useEffect, useRef, useState } from "react";

// library to use
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import { LightTooltip } from "./components/LightTooltip";
import { formatTimeMS } from "./utils";
import SlowDownDescription from "./components/SlowDownDescription";
import TimeInput from "./components/TimeInput";
import SlowDownInput from "./components/SlowDownInput";
import CustomButton from "./components/CustomButton";
import SlowDownCircularTimer from "./components/SlowDownCircularTimer";

//slow down stopwatch component
function SlowDownStopwatch() {
  const timeInputRef = useRef(null);
  const intervalInputRef = useRef(null);
  const time = useRef(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const timerId = useRef(null);
  const timeHolderRef = useRef(null);

  const handleStart = () => {
    if (isRunning) return;
    setIsRunning(true);
  };


  const handleStop = () => {
    clearInterval(timerId.current);
    setIsRunning(false);
  };



  const handleReset = () => {
    clearInterval(timerId.current);
    setIsRunning(false);
    timeInputRef.current.value = 0;
    intervalInputRef.current.value = 1;
    time.current = 0;
    timeHolderRef.current.textContent = formatTimeMS(time.current);
    setLaps([]);
  };



  const handleLap = () => {
    setLaps((prevLaps) => [...prevLaps, time.current]);
  };

  const adjustTimeHandler = () => {
    const customTime = parseInt(timeInputRef.current.value, 10) || 0;
    time.current = customTime * 100;
    timeHolderRef.current.textContent = formatTimeMS(time.current);
  };

  useEffect(() => {
    if (isRunning) {
      const interval = parseInt(intervalInputRef.current.value, 10) || 1;
      timerId.current = setInterval(() => {
        // setTime((prevTime) => prevTime + 1);
        time.current += 1;
        timeHolderRef.current.textContent = formatTimeMS(time.current);
      }, 10 * interval);
    }
    return () => {
      clearInterval(timerId.current);
    };
  }, [isRunning]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-auto">
      <div className="bg-[#171717] w-2/3 md:w-1/2 lg:w-2/3 min-h-[80%] text-white shadow-lg rounded-lg p-6 flex flex-col gap-4 overflow-hidden">
        <SlowDownDescription />
        <div className="flex justify-between">
          <TimeInput ref={timeInputRef} adjustTimeHandler={adjustTimeHandler} />
          <SlowDownInput ref={intervalInputRef} />
        </div>

        <div className="text-2xl font-mono flex justify-center items-center">
          <SlowDownCircularTimer
            ref={timeHolderRef}
            isRunning={isRunning}
            time={time.current}
            handleStop={handleStop}
            handleStart={handleStart}
          />
        </div>
        <div className="flex justify-center gap-4">
          <CustomButton
            title={"Reset"}
            onClick={handleReset}
            icon={
              <RestartAltOutlinedIcon
                className="hover:text-blue-300"
                sx={{ fontSize: 40, color: "white" }}
              />
            }
          />

          <CustomButton
            title="Record"
            onClick={handleLap}
            icon={
              <FlagOutlinedIcon
                className="hover:text-blue-300"
                sx={{ fontSize: 40, color: "white" }}
              />
            }
          />
        </div>
        {/* Lap times */}
        {laps.length > 0 && (
          <div className="w-full overflow-auto">
            <ul className="flex justify-center gap-4 flex-wrap">
              {laps.map((lap, index) => (
                <LightTooltip key={index} title={`Lap number ${index + 1}`}>
                  <li className="text-lg tracking-widest lg:tracking-normal xl:tracking-widest font-semibold leading-8 font-digital text-center border rounded-md p-2 bg-blue-100 hover:bg-blue-200 text-black w-1/2 md:w-1/3 lg:w-1/4">
                    {formatTimeMS(lap)}
                  </li>
                </LightTooltip>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SlowDownStopwatch;

{
  /* <div className="w-1/3 flex flex-col gap-2">
            <label
              className="text-sm font-medium flex gap-1"
              htmlFor="timeInput"
            >
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
              ref={timeInputRef}
              defaultValue={0}
              min={0}
              type="number"
              className="border border-gray-300 rounded-md p-2 w-full text-black"
              onBlur={adjustTimeHandler}
            />
          </div> */
}

{
  /* <div className="w-1/3 flex flex-col gap-2">
            <label
              className="flex gap-1 text-sm font-medium items-center"
              htmlFor="intervalInput"
            >
              Set Delay
              <LightTooltip
                title="input field with a default delay value of 1 second, allowing users to slow the time."
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
              ref={intervalInputRef}
              defaultValue={1}
              min={1}
              type="number"
              className="border border-gray-300 rounded-md p-2 w-full text-black"
            />
          </div> */
}

{
  /* <IconButton
                onClick={isRunning ? handleStop : handleStart}
                sx={{ color: "white" }}
              >
                {isRunning ? (
                  <PauseCircleOutlineIcon
                    fontSize="large"
                    className="hover:text-blue-300"
                    sx={{ fontSize: 40 }}
                  />
                ) : (
                  <PlayCircleOutlineOutlinedIcon
                    fontSize="large"
                    className="hover:text-blue-300"
                    sx={{ fontSize: 40 }}
                  />
                )}
              </IconButton> */
}
{
  /* <IconButton onClick={handleReset}>
            <LightTooltip title="Reset">
              <RestartAltOutlinedIcon
                className="hover:text-blue-300"
                sx={{ fontSize: 40, color: "white" }}
              />
            </LightTooltip>
          </IconButton> */
}

{
  /* <IconButton onClick={handleLap}>
            <LightTooltip title="Record">
              <FlagOutlinedIcon
                className="hover:text-blue-300"
                sx={{ fontSize: 40, color: "white" }}
              />
            </LightTooltip>
          </IconButton> */
}

{
  /* <div
            className={`border-[3px] rounded-full w-[200px] h-[200px] flex justify-center items-center ${
              isRunning ? "border-green-400" : "border-red-500"
            } relative `}
          >
            <span className="text-blue-100" ref={timeHolderRef}>
              {formatTime(time.current)}
            </span>
            <div className="absolute bottom-4 flex justify-center">
              {isRunning ? (
                <CustomButton
                  onClick={handleStop}
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
                  onClick={handleStart}
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
          </div> */
}
