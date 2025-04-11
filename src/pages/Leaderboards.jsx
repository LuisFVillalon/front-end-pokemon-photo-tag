import uniqid from 'uniqid';
import '../style.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { ArrowLeft, Display } from 'react-bootstrap-icons';
import levelData from '../LevelData/allLevelData';

function sortList(array) {
  return array.sort((a, b) => (a.time > b.time ? 1 : -1));
}

function Leaderboards({ topThirty }) {
  const [recordsPerLevelList, setRecordsPerLevelList] = useState();
  const navigate = useNavigate();
  const changeRouteToHome = () => {
    navigate('/');
  };

  const levelList = levelData.map((currentLevel) => (
    <IndividualLevel
      key={uniqid()}
      currentLevel={currentLevel}
      setRecordsPerLevelList={setRecordsPerLevelList}
    />
  ));

  sortList(topThirty);

  const list = topThirty.map((user) => (
    <UserTimeList
      key={uniqid()}
      user={user}
      recordsPerLevelList={recordsPerLevelList}
    />
  ));

  return (
    <>
      <div className="leaderboard-header-container">
        <div>
          <button type="button" onClick={changeRouteToHome} className="back-btn">
            <ArrowLeft />
            Back
          </button>
        </div>
          <header>Top 10 Best Times!</header>
      </div>
      <div className="levels-container">
        {levelList}
      </div>
      <div className="records-list">
        { recordsPerLevelList !== undefined ? (
          <ol>{list}</ol>
        ) : (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <></>
        )}
      </div>
    </>
  );
}

function IndividualLevel({ currentLevel, setRecordsPerLevelList }) {
  return (
    <div className="level-info-container">
      <h2>{currentLevel.name}</h2>
      <img alt="Level cover." className="level-select" src={currentLevel.cover} onClick={() => setRecordsPerLevelList(currentLevel.level)} />
    </div>
  );
}
function UserTimeList({ user, recordsPerLevelList }) {
  const divStyle = {
    style: 'none',
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      { user.level === recordsPerLevelList ? (
        <li>
          <div className="record-item">
            <div>{user.time}</div>
            <div>{user.username}</div>
          </div>
        </li>
      ) : (
        <div style={divStyle} />
      )}
    </>
  );
}

export default Leaderboards;
