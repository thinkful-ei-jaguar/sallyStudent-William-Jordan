import React from 'react';

function ContactInfo(props) {
  return (
    <div className="Contact-Info">
      <ul className="Info-List">
        <li id="name">Name: {props.name}</li>
        <li id="email">E-mail: {props.email}</li>
        <li id="phone">Phone #: {props.phone}</li>
        <li id="picture">
          <img src={props.picture} />
        </li>
      </ul>
    </div>
  );
}

export default ContactInfo;
