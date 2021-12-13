import './App.css';
import Navbar from './components/layout/Navbar';
import Main from './components/layout/Main';
import Carrousel from './components/layout/Carrousel';
import Bio from './components/layout/Bio';
import Libros from './components/layout/Libros';
import MainState from './context/MainState';

function App() {
  return (
    <MainState>
      <div className="App">
        <Navbar />
        <Main />
        <Bio />
        <Libros />
        <Carrousel />
      </div>
    </MainState>
  );
}

export default App;
