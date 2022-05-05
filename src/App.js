/*import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> PortafolioElias
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;  */
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
<>
    <Routes>
      <Route path="/my-portafolio" element={<Layout />}>
      <Route index element={<Home/>} />
      <Route path="About" element={<About/>} />
      <Route path="Contact" element={<Contact/>} />
      </Route>
    </Routes>
</>
  );
}

export default App;