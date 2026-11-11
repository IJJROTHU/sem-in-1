
import React from "react";

function Student(props) {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <p>ID: {props.id}</p>
      <p>Course: {props.course}</p>
      <p>Attendance: {props.attendance}%</p>
      <hr />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Student Attendance Tracker</h1>
      <Student name="Ravi" id="101"
        course="CSE" attendance="90" />
      <Student name="Priya" id="102"
        course="ECE" attendance="85" />
    </div>
  );
}

export default App;
