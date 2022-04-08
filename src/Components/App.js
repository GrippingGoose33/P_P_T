
import './App.css';
import Game from './Game/Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-rock-paper-scissors-cloth-guess-fist-gesture-image_2287305.jpg" 
        className="App-logo" alt="logo" />
        <p>
          Bienvenidos a Piedra, Papel o Tijera
        </p>
      </header>

      <div>
        <Game/>
      </div>

    </div>
  );
}

export default App;
