import React from 'react';

function ContactInfo(props) {
  return (
    <div className="Contact-Info">
      <ul className="Info-List">
        <li id="picture">
          <img src={props.picture} alt='Sally Student posing'/>
        </li>
        <div className="contact">
          <li id="email"><strong>E-mail:</strong> {props.email}</li>
          <li id="phone"><strong>Phone #:</strong> {props.phone}</li>
        </div>
      </ul>
    </div>
  );
}

export default ContactInfo;
