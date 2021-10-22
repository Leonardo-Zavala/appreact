import logo from './logo.svg';
import './App.css';
import { Counter } from './Componentes/Contador';
import  {Navegacion } from './Componentes/Navegacion';
import { Footer } from './Componentes/Footer';
import { Productos } from './Componentes/Productos';

function App() {
  return (
    <div className="App">
      <Navegacion/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>*/}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <main>
        <p>
          <h1>Me sumo al componente App</h1>
        </p>

        <Counter/>
        <Productos></Productos>
      </main>

      <Footer/>

    </div>
  );
}

export default App;
