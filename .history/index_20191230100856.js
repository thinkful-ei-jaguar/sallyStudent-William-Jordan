import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './AppHeader';

function App() {
  return (
    <div>
      <AppHeader />
      {/* <AppBody /> */}
      {/* <AppFooter /> */}
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
