import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './AppHeader';
import ContactInfo from './ContactInfo';

function App() {
  return (
    <div>
      <AppHeader />
      <ContactInfo
        name="Sally Student"
        email="sallystu@netscape.com"
        phone="1-800-789-2344"
        picture="https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg"
      />

      {/* <AppBody /> */}
      {/* <AppFooter /> */}
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
