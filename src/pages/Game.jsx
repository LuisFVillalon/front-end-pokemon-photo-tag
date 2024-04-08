import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import { useNavigate } from 'react-router-dom';
import { IndividualCharacter } from '../components/Levels';
import levelData from '../LevelData/allLevelData';
import OptionMenu from '../components/OptionMenu';

import Timer from '../components/Timer';
import FinishedGame from '../components/FinishedGame';

import Pinsir from '../assets/pokemon/0127Pinsir.png';
import Kabuto from '../assets/pokemon/0140Kabuto.png';
import Dragonair from '../assets/pokemon/0148Dragonair.png';
import Seadra from '../assets/pokemon/0117Seadra.png';
import Magikarp from '../assets/pokemon/0129Magikarp.png';
import Cubone from '../assets/pokemon/0104Cubone.png';
import Oddish from '../assets/pokemon/0043Oddish.png';
import Nidoran from '../assets/pokemon/0032Nidoran.png';
import Poliwhirl from '../assets/pokemon/0061Poliwhirl.png';

import Golbat from '../assets/pokemon/0042Golbat.png';
import Weedle from '../assets/pokemon/0013Weedle.png';
import Gloom from '../assets/pokemon/0044Gloom.png';
import Kingler from '../assets/pokemon/0099Kingler.png';
import Butterfree from '../assets/pokemon/0012Butterfree.png';
import Magmar from '../assets/pokemon/0126Magmar.png';
import Diglett from '../assets/pokemon/0050Diglett.png';
import Lapras from '../assets/pokemon/0131Lapras.png';
import Growlithe from '../assets/pokemon/0058Growlithe.png';

import Natu from '../assets/pokemon/0177Natu.png';
import Onix from '../assets/pokemon/0095Onix.png';
import Igglybuff from '../assets/pokemon/0174Igglybuff.png';
import Alakazam from '../assets/pokemon/0065Alakazam.png';
import Venomoth from '../assets/pokemon/0049Venomoth.png';
import Larvitar from '../assets/pokemon/0246Larvitar.png';
import Ekans from '../assets/pokemon/0023Ekans.png';
import Houndour from '../assets/pokemon/0228Houndour.png';
import Dugtrio from '../assets/pokemon/0051Dugtrio.png';

function selectCharacterToFind(levelArr) {
  const newArr = [];
  const randomArray = [];
  while (randomArray.length < levelArr.length) {
    const randomNumber = Math.floor(Math.random() * (levelArr.length));
    if (!randomArray.includes(randomNumber)) {
      randomArray.push(randomNumber);
    }
  }

  for (let i = 0; i < 3; i += 1) {
    const index = randomArray[i];
    newArr.push(levelArr[index]);
  }
  return newArr;
}
function onImgLoad(setScreen) {
  setScreen({
    width: window.innerWidth,
    height: window.innerHeight,
  });
}
function showOptions(e, optionStatus, setOptionStatus, setXCoord, setYCoord, screen, menuCoordinates, setMenuCoordinates) {
  const genX = Math.round(((e.pageX) / screen.width) * 100);
  const genY = Math.round(((e.pageY) / screen.height) * 100);
  // console.log([genX, genY]);
  if (optionStatus === false) {
    setOptionStatus(true);
    menuCoordinates.top = e.pageY;
    menuCoordinates.left = e.pageX;
    setMenuCoordinates(menuCoordinates);
    setXCoord(genX);
    setYCoord(genY);
  } else {
    setOptionStatus(false);
    setXCoord(0);
    setYCoord(0);
  }
}

function Game(props) {
  const { currentBoard } = props;
  const [menuCoordinates, setMenuCoordinates] = useState({
    top: 0,
    left: 0,
  });
  const [pokemonToFind, setPokemonToFind] = useState([]);
  const [seconds, setSeconds] = useState(0);
  const [selectionStatus, setSelectionStatus] = useState(false);
  const [optionStatus, setOptionStatus] = useState(false);
  const [gameStatus, setGameStatus] = useState({
    status: false,
    time: 0,
  });
  const [characterFound, setCharacterFound] = useState(false);
  const [xCoord, setXCoord] = useState(0);
  const [yCoord, setYCoord] = useState(0);
  const [screen, setScreen] = useState({
    width: 0,
    height: 0,
  });
  const navigate = useNavigate();

  const changeRouteToHome = () => {
    const { currentLevel } = props;

    if (currentLevel === 2) {
      pokemonToFind.forEach((e) => {
        if (e.name === 'Natu') {
          e.profile = Natu;
        } else if (e.name === 'Onix') {
          e.profile = Onix;
        } else if (e.name === 'Igglybuff') {
          e.profile = Igglybuff;
        } else if (e.name === 'Alakazam') {
          e.profile = Alakazam;
        } else if (e.name === 'Venomoth') {
          e.profile = Venomoth;
        } else if (e.name === 'Larvitar') {
          e.profile = Larvitar;
        } else if (e.name === 'Ekans') {
          e.profile = Ekans;
        } else if (e.name === 'Houndour') {
          e.profile = Houndour;
        } else if (e.name === 'Dugtrio') {
          e.profile = Dugtrio;
        }
        e.found = false;
      });
    } else if (currentLevel === 1) {
      pokemonToFind.forEach((e) => {
        if (e.name === 'Pinsir') {
          e.profile = Pinsir;
        } else if (e.name === 'Kabuto') {
          e.profile = Kabuto;
        } else if (e.name === 'Dragonair') {
          e.profile = Dragonair;
        } else if (e.name === 'Seadra') {
          e.profile = Seadra;
        } else if (e.name === 'Magikarp') {
          e.profile = Magikarp;
        } else if (e.name === 'Cubone') {
          e.profile = Cubone;
        } else if (e.name === 'Oddish') {
          e.profile = Oddish;
        } else if (e.name === 'Nidoran') {
          e.profile = Nidoran;
        } else if (e.name === 'Poliwhirl') {
          e.profile = Poliwhirl;
        }
        e.found = false;
      });
    } else if (currentLevel === 0) {
      pokemonToFind.forEach((e) => {
        if (e.name === 'Golbat') {
          e.profile = Golbat;
        } else if (e.name === 'Weedle') {
          e.profile = Weedle;
        } else if (e.name === 'Gloom') {
          e.profile = Gloom;
        } else if (e.name === 'Kingler') {
          e.profile = Kingler;
        } else if (e.name === 'Butterfree') {
          e.profile = Butterfree;
        } else if (e.name === 'Magmar') {
          e.profile = Magmar;
        } else if (e.name === 'Diglett') {
          e.profile = Diglett;
        } else if (e.name === 'Lapras') {
          e.profile = Lapras;
        } else if (e.name === 'Growlithe') {
          e.profile = Growlithe;
        }
        e.found = false;
      });
    }
    navigate('/');
  };

  function setPokemonToFindInLevel() {
    const { currentLevel } = props;
    if (currentLevel === 0) {
      setPokemonToFind(selectCharacterToFind(levelData[0].characters));
    } else if (currentLevel === 1) {
      setPokemonToFind(selectCharacterToFind(levelData[1].characters));
    } else if (currentLevel === 2) {
      setPokemonToFind(selectCharacterToFind(levelData[2].characters));
    }
  }

  const characterList = pokemonToFind.map((currentCharacter) => (
    <IndividualCharacter
      key={uniqid()}
      currentCharacter={currentCharacter}
    />
  ));
  useEffect(() => {
    const tryAgainTimer = setTimeout(() => {
      if (selectionStatus) {
        setSelectionStatus(false);
      }
      if (characterFound) {
        setCharacterFound(false);
      }
    }, [1500]);
    return () => clearTimeout(tryAgainTimer);
  }, [selectionStatus, characterFound]);

  useEffect(() => {
    setPokemonToFindInLevel();
  });

  return (
    <div className="body-level">
      <div className="character-container">
        <p>Find: </p>
        <div className="character-game">
          {characterList}
        </div>
        <div className="home-timer-container">
          <button type="button" onClick={changeRouteToHome}>home</button>
          <p>Click again to remove the Pokémon menu</p>
          <Timer
            seconds={seconds}
            setSeconds={setSeconds}
          />
        </div>
      </div>
      {selectionStatus && <div className="try-again">Try Again!</div>}
      {characterFound && <div className="try-again">Captured!</div>}
      {gameStatus.stat && (
      <FinishedGame
        timeRecord={gameStatus.time}
        pokemonToFind={pokemonToFind}
        setPokemonToFind={setPokemonToFind}
        props={props}
      />
      )}
      <div className="current-level-container">
        <img
          alt="Level."
          className="current-board"
          src={currentBoard}
          onLoad={(e) => onImgLoad(setScreen, e)}
          onClick={(e) => {
            showOptions(e, optionStatus, setOptionStatus, setXCoord, setYCoord, screen, menuCoordinates, setMenuCoordinates);
          }}
        />
        {optionStatus && (
          <OptionMenu
            props={props}
            pokemonToFind={pokemonToFind}
            xCoord={xCoord}
            yCoord={yCoord}
            setSelectionStatus={setSelectionStatus}
            screen={screen}
            setCharacterFound={setCharacterFound}
            setGameStatus={setGameStatus}
            seconds={seconds}
            menuCoordinates={menuCoordinates}
            setMenuCoordinates={setMenuCoordinates}
          />
        )}
      </div>
    </div>
  );
}

export default Game;
