import React from 'react';
import css from './index.css';

function ContactInfo(props) {
  return (
    <div className="Contact-Info">
      <ul className="Info-List">
        <li id="picture">
          <img src={props.picture} />
        </li>
        <div className="contact">
          {/* <li id="name">Name: {props.name}</li> */}
          <li id="email">E-mail: {props.email}</li>
          <li id="phone">Phone #: {props.phone}</li>
        </div>
      </ul>
    </div>
  );
}

export default ContactInfo;
