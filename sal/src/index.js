import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './AppHeader';
import AppMain from './AppMain';

import  './index.css';

function App() {
  return (
    <div className="flex">
      <AppHeader name="Sally Student" />
      <AppMain />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
