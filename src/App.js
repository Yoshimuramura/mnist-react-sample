import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import {Practice} from './Components/Practice';

const Home =()=> {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          MNiST React 練習ページ
        </p>
        <a
          className="App-link"
          href="/practice"
          rel="noopener noreferrer"
        >
          Start
        </a>
      </header>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={Home()} />
          <Route path="/practice" element={Practice()} />
          </Routes>
      </BrowserRouter>
      </div>
  );
};

export default App;
