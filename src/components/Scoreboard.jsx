import { React } from 'react';
import { useNavigate } from 'react-router-dom';

function ScoreBoard() {
  const navigate = useNavigate();
  const changeRouteToLeaderboard = () => {
    navigate('/leaderboards');
  };
  return (
    <div className="leaderboard-info-link">
      <div className="leaderboard-info">
        <h3>Are you a Pokemon Master?</h3>
        <h3>View the leaderboard</h3>
      </div>
      <button type="button" className="leaderboard-btn" onClick={changeRouteToLeaderboard}>View Leaderboard</button>
    </div>
  );
}

export default ScoreBoard;
