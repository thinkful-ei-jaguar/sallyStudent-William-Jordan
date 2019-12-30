import React from 'react';

function ContactInfo(props) {
  return (
    <div className="contact-info-container">
      <ul>
        <li>Name: {props.name}</li>
        <li>E-mail: {props.email}</li>
        <li>Phone #: {props.phone}</li>
        <li>
          <img src={props.picture} />
        </li>
      </ul>
    </div>
  );
}

export default ContactInfo;
