import IntervalStopwatch from "./IntervalStopwatch";
import SlowDownStopwatch from "./SlowDownStopwatch";

function App() {
  return (
    <div className="w-screen h-screen overflow-y-hidden overflow-x-hidden p-4">
      {/* Only render one of following components */}
      <IntervalStopwatch />
      {/* <SlowDownStopwatch /> */}
    </div>
  );
}

export default App;
