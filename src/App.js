import React, { useState } from 'react';
import reactifyWc from 'reactify-wc';
import './App.css';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-text-field';

const VaadinButton = reactifyWc("vaadin-button");
const VaadinGrid = reactifyWc("vaadin-grid");
const VaadinGridColumn = reactifyWc("vaadin-grid-column");
const VaadinTextField = reactifyWc("vaadin-text-field");


const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => setValue(e.target.value);
  return [value, onChange];
};

function App() {
  const [firstName, setFirstName] = useInput('');
  const [lastName, setLastName] = useInput('');
  const [people, setPeople] = useState([]);

  const onClick = () => setPeople(people.concat([{firstName, lastName}]));

  return (
    <div className="App">
      <div className="form">
        <VaadinTextField label="First Name" value={firstName} onInput={setFirstName} />
        <VaadinTextField label="Last Name" value={lastName} onInput={setLastName} />
        <VaadinButton onClick={onClick}> Add </VaadinButton>
      </div>
      <VaadinGrid items={people}>
        <VaadinGridColumn path="firstName" header="First name" /> 
        <VaadinGridColumn path="lastName" header="Last name" />
      </VaadinGrid>
    </div>
  );
}

export default App;
