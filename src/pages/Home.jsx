import '../style.css';
import React from 'react';
import Levels from '../components/Levels';
import ScoreBoard from '../components/Scoreboard';

function Home(props) {
  return (
    <div>
      <header>Where&apos;s that Pokemon?</header>
      <p>Choose a stage and find the assigned Pokemons!</p>
      <p>See where you place on the scoreboard!</p>
      <Levels
        props={props}
      />
      <ScoreBoard />
    </div>
  );
}
export default Home;
