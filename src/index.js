import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { StateProvider } from './StateProvider';
import { initialState } from './context/reducer';
import  {reducer}  from './context/reducer'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


