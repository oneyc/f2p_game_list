import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import GamesList from './pages/GamesList';
import GameDetail from './pages/GameDetail';
import NoMatch from './pages/NoMatch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<App />}>
          <Route index element={ <Navigate to="/games" replace/> } />
          <Route path="/games" key="/games" element={<GamesList />}>
          </Route>
          <Route path="/games/:gameId" key=":gameId" element={<GameDetail/>}/>
          <Route path="*" element={<NoMatch/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

