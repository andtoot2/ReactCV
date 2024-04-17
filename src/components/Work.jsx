import React, { useState } from 'react';
import '../styles/App.css';

export default function WorkForm({ onSubmit, onRemove }) {
  const [employer, setEmployer] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [jobDuties, setJobDuties] = useState('');
  const [workHistory, setWorkHistory] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const newEntry = { employer, startDate, endDate, jobDuties };
    if (editIndex !== null) {
      const updatedHistory = [...workHistory];
      updatedHistory[editIndex] = newEntry;
      setWorkHistory(updatedHistory);
      setEditIndex(null);
    } else {
      setWorkHistory([...workHistory, newEntry]);
    }
    setEmployer('');
    setStartDate('');
    setEndDate('');
    setJobDuties('');
    onSubmit(newEntry); // Passing newEntry to the parent component
  }

  function handleEdit(index) {
    const entry = workHistory[index];
    setEmployer(entry.employer);
    setStartDate(entry.startDate);
    setEndDate(entry.endDate);
    setJobDuties(entry.jobDuties);
    setEditIndex(index);
    onRemove(index); // Remove the entry from the display area
  }

  function handleRemove(index) {
    const updatedHistory = [...workHistory];
    updatedHistory.splice(index, 1);
    setWorkHistory(updatedHistory);
    setEditIndex(null); // Reset editIndex after removal
    onRemove(index); // Passing the index to the parent component to remove corresponding display information
  }

  return (
    <>
    <div class="workCont">
      <h2>Work History</h2>
      <form onSubmit={handleSubmit} class="form">
        <label>
          Employer:{' '}
          <input
            value={employer}
            onChange={(e) => setEmployer(e.target.value)}
          />
        </label>
        <label>
          Start Date:{' '}
          <input
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            type="date"
          />
        </label>
        <label>
          End Date:{' '}
          <input
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            type="date"
          />
        </label>
        <label>
          Job Duties:{' '}
          <textarea
            value={jobDuties}
            onChange={(e) => setJobDuties(e.target.value)}
          />
        </label>
        <button type="submit">{editIndex !== null ? 'Update' : 'Submit'}</button>
      </form>
      {workHistory.map((entry, index) => (
        <div key={index}>
          <h3>Work History Information</h3>
          <p>Employer: {entry.employer}</p>
          <p>Start Date: {entry.startDate}</p>
          <p>End Date: {entry.endDate}</p>
          <p>Job Duties: {entry.jobDuties}</p>
          <button onClick={() => handleEdit(index)}>Edit</button>
          <button onClick={() => handleRemove(index)}>Remove</button>
        </div>
      ))}
      </div>
    </>
  );
}