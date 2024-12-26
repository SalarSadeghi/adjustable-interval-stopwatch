import React, { useCallback, useEffect, useRef, useState } from "react";

// library to use
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import { LightTooltip } from "./components/LightTooltip";
import { formatTime } from "./utils";
import IntervalDescription from "./components/IntervalDescription";
import TimeInput from "./components/TimeInput";
import CustomButton from "./components/CustomButton";
import IntervalInput from "./components/IntervalInput";
import IntervalCircularTimer from "./components/IntervalCircularTimer";

//interval stopwatch component
function IntervalStopwatch() {
  const timeInputRef = useRef(null);
  const intervalInputRef = useRef(null);
  const time = useRef(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const timerId = useRef(null);
  const timeHolderRef = useRef(null);

  const handleStart = useCallback(() => {
    if (isRunning) return;
    setIsRunning(true);
  }, [isRunning]);

  const handleStop = useCallback(() => {
    clearInterval(timerId.current);
    setIsRunning(false);
  });

  const handleReset = () => {
    clearInterval(timerId.current);
    setIsRunning(false);
    time.current = 0;
    intervalInputRef.current.value = 1;
    timeInputRef.current.value = 0;
    timeHolderRef.current.textContent = formatTime(time.current);
    setLaps([]);
  };

  const handleLap = () => {
    setLaps((prevLaps) => [...prevLaps, time.current]);
  };

  const adjustTimeHandler = () => {
    const customTime = parseInt(timeInputRef.current.value, 10) || 0;
    time.current = customTime;
    timeHolderRef.current.textContent = formatTime(time.current);
  };

  useEffect(() => {
    if (isRunning) {
      const interval = parseInt(intervalInputRef.current.value, 10) || 1;
      timerId.current = setInterval(() => {
        time.current += interval;
        timeHolderRef.current.textContent = formatTime(time.current);
      }, interval * 1000);
    }
    return () => {
      clearInterval(timerId.current);
    };
  }, [isRunning]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-auto">
      <div className="bg-[#171717] w-2/3 md:w-1/2 lg:w-2/3 min-h-[80%] text-white shadow-lg rounded-lg p-6 flex flex-col gap-4 overflow-hidden">
        <IntervalDescription />
        <div className="flex justify-between">
          <TimeInput ref={timeInputRef} adjustTimeHandler={adjustTimeHandler} />
          <IntervalInput ref={intervalInputRef} />
        </div>

        <div className="text-2xl font-mono flex justify-center items-center">
          <IntervalCircularTimer
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
                  <li className="text-lg tracking-widest lg:tracking-normal xl:tracking-widest font-semibold leading-8 font-digital text-center border rounded-md p-1 bg-blue-100 hover:bg-blue-200 text-black w-1/2 md:w-1/3 lg:w-1/4">
                    {formatTime(lap)}
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

export default IntervalStopwatch;
