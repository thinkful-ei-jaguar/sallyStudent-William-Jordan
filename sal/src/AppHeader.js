import React from 'react';
import  './index.css';


function AppHeader(props) {
  return (
    <header className="app-header">
      <h1>{props.name}</h1>
    </header>
  );
}

export default AppHeader;
