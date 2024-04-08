import { React } from 'react';
import uniqid from 'uniqid';
import '../style.css';
import { formatTime } from './Timer';
import Pokeball from '../assets/pokeball.png';

function OptionMenu(props) {
  let pokeList = [];
  const { pokemonToFind } = props;
  pokeList = pokemonToFind;
  const {
    xCoord, yCoord, setSelectionStatus, screen, setCharacterFound, setGameStatus, seconds,
  } = props;
  const optionsList = pokeList.map((currentOption) => (
    <IndividualOption
      key={uniqid()}
      currentOption={currentOption}
      xCoord={xCoord}
      yCoord={yCoord}
      setSelectionStatus={setSelectionStatus}
      screen={screen}
      setCharacterFound={setCharacterFound}
      setGameStatus={setGameStatus}
      pokeList={pokeList}
      seconds={seconds}
    />
  ));
  const { menuCoordinates } = props;
  return (
    <div
      className="option-menu"
      style={{ top: menuCoordinates.top, left: menuCoordinates.left }}
    >
      {optionsList}
    </div>
  );
}
function checkWinner(pokeList, setGameStatus, seconds) {
  const gameStat = pokeList.every((e) => e.found === true);
  setGameStatus({
    stat: gameStat,
    time: formatTime(seconds),
  });
}
function checkPosition(x, y, array, setSelectionStatus, screen, setCharacterFound, setGameStatus, pokeList, seconds) {
  // console.log({x}, array.xCoord[0] ,  array.xCoord[1], {y},  array.yCoord[0] ,  array.yCoord[1]  )
  if (
    (x >= array.xCoord[0] - 5 && x <= array.xCoord[1] + 5)
        && (y >= array.yCoord[0] - 5 && y <= array.yCoord[1] + 5)
  ) {
    for (let i = 0; i < pokeList.length; i += 1) {
      if (array.name === pokeList[i].name) {
        pokeList[i].found = true;
      }
    }
    setCharacterFound(true);
    setSelectionStatus(false);
    checkWinner(pokeList, setGameStatus, seconds);
    return;
  }
  setCharacterFound(false);
  setSelectionStatus(true);
}

function IndividualOption(props) {
  const {
    xCoord, yCoord, currentOption, setSelectionStatus, screen, setCharacterFound, setGameStatus, pokeList, seconds,
  } = props;
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="option-container" onClick={() => checkPosition(xCoord, yCoord, currentOption, setSelectionStatus, screen, setCharacterFound, setGameStatus, pokeList, seconds)}>
      <div className="option">
        {currentOption.name}
      </div>
      {currentOption.found
        ? <img alt="Pokeball." id="optIcon" className="option-icon" src={Pokeball} />
        : <img alt="Pokemon." id="optIcon" className="option-icon" src={currentOption.profile} />}
    </div>
  );
}

export default OptionMenu;
