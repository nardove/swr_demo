/* eslint-disable no-unused-vars */
import RenderUsersStandard from './components/RenderUsersStandard';
import RenderUsersWithSWR from './components/RenderUsersWithSWR';
import Controls from './components/Controls';

import './App.css';

function App() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 auto-rows-min md:auto-rows-fr h-full items-start px-4">
      <div className="w-full md:w-10/12 mx-auto">
        <RenderUsersStandard />
      </div>
      <div className="w-full md:w-10/12 mx-auto">
        <RenderUsersWithSWR />
      </div>

      <div className="md:col-span-2 mx-auto w-full h-full content-center">
        <Controls />
      </div>
    </div>
  );
}

export default App;
