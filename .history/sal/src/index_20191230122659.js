import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './AppHeader';
import ContactInfo from './ContactInfo';
import EducationInfo from './EducationInfo';
import EmploymentInfo from './EmploymentInfo';

function App() {
  return (
    <div>
      <AppHeader name="Sally Student"/>
      <ContactInfo
        name="Sally Student"
        email="sallystu@netscape.com"
        phone="1-800-789-2344"
        picture="https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg"
      />

      <EducationInfo 
        school="University of Thinkful"
        address="123 Thinkful Ave, Somewhere, US 10110"
        gpa="8.0"
      />

      <EmploymentInfo />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
