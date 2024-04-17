import React, { useState } from 'react';
import '../styles/App.css';

export default function NameForm({ onSubmit, onRemove }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    setFullName(e.target.value + ' ' + lastName);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
    setFullName(firstName + ' ' + e.target.value);
  }

  function handlePhoneNumberChange(e) {
    setPhoneNumber(e.target.value);
  }
  
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = { fullName, phoneNumber, email };
    onSubmit(formData);
    setSubmitted(true);
  }

  function handleEdit() {
    setSubmitted(false); // Reset the submitted state to false for editing
  }

  function handleRemove() {
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setEmail('');
    setFullName('');
    setSubmitted(false);
    onRemove(); // Notify the parent component to remove corresponding display information
  }

  return (
    <>
    <div class="nameContain">
      <h2>Name and contact</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} class="form">
          <label class="fName">
            First name:{' '}
            <input
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </label>
          <label class="lName">
            Last name:{' '}
            <input
              value={lastName}
              onChange={handleLastNameChange}
            />
          </label>
          <label class="pNum">
            Phone Number:{' '}
            <input
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </label>
          <label class="email">
            Email:{' '}
            <input
              value={email}
              onChange={handleEmailChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>
            <b>{fullName}</b>
          </p>
          <p>
            Phone Number: <b>{phoneNumber}</b>
          </p>
          <p>
            Email: <b>{email}</b>
          </p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleRemove}>Remove</button>
        </div>
      )}
      </div>
    </>
  );
}