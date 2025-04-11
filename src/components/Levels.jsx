import { useNavigate } from 'react-router-dom';
import uniqid from 'uniqid';
import levelData from '../LevelData/allLevelData';
import '../style.css';

function Levels(props) {
  const levelList = levelData.map((currentLevel) => (
    <IndividualLevel
      key={uniqid()}
      currentLevel={currentLevel}
      props={props}
    />
  ));
  return (
    <div className="levels-container">
      {levelList}
    </div>
  );
}

function IndividualLevel(props) {
  const navigate = useNavigate();
  const changeRouteToGame = () => {
    // eslint-disable-next-line react/destructuring-assignment
    props.props.props.setCurrentBoard((props.currentLevel.board));
    // eslint-disable-next-line react/destructuring-assignment
    props.props.props.setCurrentLevel((props.currentLevel.level));
    navigate('/game');
  };
  const { currentLevel } = props;
  return (
    <div className="level-info-container">
      <h2>{currentLevel.name}</h2>
      <img alt="Level." onClick={changeRouteToGame} className="level-select" src={currentLevel.cover} />
    </div>
  );
}

export function IndividualCharacter(props) {
  return (
    <div>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      <img alt="Pokemon." className="character-image" src={props.currentCharacter.profile} />
    </div>
  );
}

export default Levels;
