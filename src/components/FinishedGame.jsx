import { useState } from 'react';
import { ArrowRight } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import dotenv from 'dotenv';
dotenv.config();

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

function checkTopTen(topThirty, newRecordData, props) {
  const topTenInLevelSelected = topThirty.filter((record) => record.level === props.currentLevel);
  if (topTenInLevelSelected.length < 10) {
    return true;
  }
  let recordRepeated = true;
  topTenInLevelSelected.forEach((element) => {
    if (element.time === newRecordData.time) {
      recordRepeated = false;
    }
  });
  if (recordRepeated === false) {
    return false;
  }
  const recordIsFaster = topTenInLevelSelected.every((recordListItem) => recordListItem.time < newRecordData.time);
  return (recordRepeated && !recordIsFaster);
}

function FinishedGame({
  timeRecord, pokemonToFind, setPokemonToFind, props,
}) {
  const navigate = useNavigate();
  const [newRecordData, setNewRecordData] = useState({
    username: '',
    time: timeRecord,
    level: props.currentLevel,
  });
  const [lastBanner, setLastBanner] = useState(false);
  const [newRecordStatus, setNewRecordStatus] = useState(false);
  const changeRouteToHome = () => {
    if (props.currentLevel === 2) {
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
    } else if (props.currentLevel === 1) {
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
    } else if (props.currentLevel === 0) {
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
  const deleteLastRecord = async (topThirty) => {
    // eslint-disable-next-line no-underscore-dangle
    const lastRecordID = topThirty[topThirty.length - 1]._id;
    try {
      const response = await fetch(`${process.env.API_URL}` + `${lastRecordID}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Handle success if needed
      // eslint-disable-next-line no-console
      console.log('Item deleted successfully');
    } catch (error) {
      // Handle error if any
      // eslint-disable-next-line no-console
      console.error('There was a problem deleting the item:', error);
    }
  };
  const nextButton = () => {
    setLastBanner(true);
    const valid = checkTopTen(props.topThirty, newRecordData, props);
    setNewRecordStatus(valid);
    const topTenInLevelSelected = props.topThirty.filter((record) => record.level === props.currentLevel);
    if (topTenInLevelSelected.length >= 10) {
      deleteLastRecord(topTenInLevelSelected);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRecordData({ ...newRecordData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.API_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRecordData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      // Handle success if needed
      setLastBanner(false);
      setNewRecordStatus(false);
      pokemonToFind.forEach((pokemon) => {
        pokemon.found = false;
      });
      setPokemonToFind(pokemonToFind);
      navigate('/');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error posting data:', error);
      // Handle error state if needed
    }
  };
  const divStyle = {
    style: 'none',
  };
  return (
    <div className="won-game">
      <div>You Found Them All! Good Job!</div>
      <div>
        Your time:
        {timeRecord}
      </div>
      <button type="button" onClick={nextButton}>
        Next
        <ArrowRight />
      </button>
      { lastBanner
        ? (
          <div>
            { newRecordStatus
              ? (
                <div>
                  <p className="new-record-text">New Record!</p>
                  <form onSubmit={handleSubmit} action="/records" method="POST">
                    <input type="text" name="username" onChange={handleChange} placeholder="Enter a 3 character username to display" />
                    <button type="submit">Submit</button>
                  </form>
                </div>
              )
              : (
                <>
                  <p>You did not place in the top ten time record. Try again!</p>
                  <button type="button" onClick={changeRouteToHome}>Home</button>
                </>
              )}

          </div>
        )
        : <div style={divStyle} />}
    </div>
  );
}

export default FinishedGame;
