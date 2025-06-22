import '../style.css';
import Levels from '../components/Levels';
import ScoreBoard from '../components/Scoreboard';

function Home(props) {
  return (
    <div>
      <div class="header-container">
        <header>Where&apos;s that Pokemon?</header>
      </div>
      <p>Choose a stage and find the assigned Pokemons!</p>
      <p>*See where you place on the scoreboard!*</p>
      <Levels
        props={props}
      />
      <ScoreBoard 
        props={props}
      />
    </div>
  );
}
export default Home;
