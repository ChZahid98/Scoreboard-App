import React, { useState } from "react";
import { InputForm } from './components/InputForm';
import { Output } from './components/Output';
function App() {
  const [leaderboard, setLeaderboard] = useState([]);
  const updateLeaderboardArray = eachEntry => {   setLeaderboard([...leaderboard, eachEntry]);
};

  return (
    <div className='container mt-4'>
      <InputForm updateLeaderboardArray={updateLeaderboardArray}  />
      <Output leaderboard={leaderboard} />
    </div>
  );
}

export default App;
