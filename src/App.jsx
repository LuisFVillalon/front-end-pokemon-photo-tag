import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Leaderboards from './pages/Leaderboards';
import Game from './pages/Game';
import './style.css';
import env from "react-dotenv";

function App() {
  const [currentBoard, setCurrentBoard] = useState('');
  const [currentLevel, setCurrentLevel] = useState('');
  const [topThirty, setTopThirty] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${env.API_URL}`);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const result = await response.json();
        setTopThirty(result);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }

  return (
    <div className="body-container">
      <Routes>
        <Route
          path="/"
          element={(
            <Home
              currentBoard={currentBoard}
              setCurrentBoard={setCurrentBoard}
              currentLevel={currentLevel}
              setCurrentLevel={setCurrentLevel}
            />
          )}
        />
        <Route
          path="/game"
          element={(
            <Game
              currentBoard={currentBoard}
              currentLevel={currentLevel}
              topThirty={topThirty}
              setTopThirty={setTopThirty}
            />
          )}
        />
        <Route
          path="/leaderboards"
          element={(
            <Leaderboards
              topThirty={topThirty}
            />
          )}
        />
      </Routes>
    </div>
  );
}

export default App;
