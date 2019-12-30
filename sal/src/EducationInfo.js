import React from 'react';

function EducationInfo(props){
  return (
    <section className="education">
      <h2>Education</h2>
      <p>{props.school}</p>
      <address>{props.address}</address>
      <p>GPA: {props.gpa}</p>
    </section>
  )
}

export default EducationInfo;