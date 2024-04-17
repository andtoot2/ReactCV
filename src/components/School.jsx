import React, { useState } from 'react';
import '../styles/App.css';

export default function SchoolForm({ onSubmit, onRemove }) {
  const [schoolName, setSchoolName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [schoolHistory, setSchoolHistory] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function handleFormSubmit(e) {
    e.preventDefault();
    const newEntry = { schoolName, startDate, endDate };
    if (editIndex !== null) {
      const updatedHistory = [...schoolHistory];
      updatedHistory[editIndex] = newEntry;
      setSchoolHistory(updatedHistory);
      setEditIndex(null);
    } else {
      setSchoolHistory([...schoolHistory, newEntry]);
    }
    onSubmit(newEntry); // Call onSubmit to update the display area
    // Clear form fields after submitting or updating
    setSchoolName('');
    setStartDate('');
    setEndDate('');
  }

  function handleEdit(index) {
    const entry = schoolHistory[index];
    setSchoolName(entry.schoolName);
    setStartDate(entry.startDate);
    setEndDate(entry.endDate);
    setEditIndex(index);
    onRemove(index); // Remove the entry from the display area
  }

  function handleRemove(index) {
    onRemove(index); // Call the parent component's function to remove data
    setSchoolHistory(prevHistory => prevHistory.filter((_, i) => i !== index)); // Remove the entry from local state
  }

  return (
    <>
    <div class="schoolCont">
      <h2>Education History</h2>
      <form onSubmit={handleFormSubmit} class="form">
        <label>
          Name of school:{' '}
          <input
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
        </label>
        <label>
          Beginning date:{' '}
          <input
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            type="date"
          />
        </label>
        <label>
          End date:{' '}
          <input
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            type="date"
          />
        </label>
        <button type="submit">{editIndex !== null ? 'Update' : 'Submit'}</button>
      </form>
      {schoolHistory.map((entry, index) => (
        <div key={index}>
          <h3>School Information</h3>
          <p>Name of school: {entry.schoolName}</p>
          <p>Beginning date: {entry.startDate}</p>
          <p>End date: {entry.endDate}</p>
          <button onClick={() => handleEdit(index)}>Edit</button>
          <button onClick={() => handleRemove(index)}>Remove</button>
        </div>
      ))}
      </div>
    </>
  );
}