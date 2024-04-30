/* eslint-disable no-unused-vars */
import RenderUsersStandard from './components/RenderUsersStandard';
import RenderUsersWithSWR from './components/RenderUsersWithSWR';
import Controls from './components/Controls';

function App() {
  return (
    <div className="box-wrapper">
      <div className="box-container">
        <RenderUsersStandard />
      </div>
      <div className="box-container">
        <RenderUsersWithSWR />
      </div>

      <div className="controls-container">
        <Controls />
      </div>
    </div>
  );
}

export default App;
