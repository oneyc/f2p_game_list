import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import GamesList from './pages/GamesList';
import GameDetail from './pages/GameDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/games" key="/games" element={<GamesList />}>
          </Route>
          <Route path="/games/:gameId" key=":gameId" element={<GameDetail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

