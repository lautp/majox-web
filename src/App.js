import './App.css';
import Navbar from './components/layout/Navbar';
import Main from './components/layout/Main';
import Carrousel from './components/layout/Carrousel';
import Bio from './components/layout/Bio';
import Libros from './components/layout/Libros';
import MainState from './context/MainState';
import negra from './components/img/negra.png';

function App() {
  return (
    <MainState>
      <div className="App">
        <Navbar />
        <Main />
        <Bio />
        <Libros />
        <Carrousel />
        <div style={{textAlign:'center'}}>
          <i className='hide-on-large-only' ><img src={negra} alt="" style={{width:'20%'}}/></i>
        </div>
        <div className='right'>
        
        <p><b>Web</b> by El Bauti®  2021 <b>Contacto</b>: lautaro.pretti@gmail.com</p>
        
                
        </div>
      </div>
    </MainState>
  );
}

export default App;
