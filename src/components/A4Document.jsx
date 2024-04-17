import React from 'react';
import '../styles/App.css';

export default function DisplayInformation({ nameData, schoolData, workData }) {
    return (
      <div class="resume">
        <h2></h2>
        {nameData && (
          <div>
            <h2>{nameData.fullName}</h2>
            <p>Phone Number: {nameData.phoneNumber}</p>
            <p>Email: {nameData.email}</p>
          </div>
        )}
  
        <h3>Education</h3>
        {schoolData.length > 0 && (
          <div>
            {schoolData.map((entry, index) => (
              <div key={index}>
                <p>Name of school: {entry.schoolName}</p>
                <p>From: {entry.startDate} - {entry.endDate}</p>
              </div>
            ))}
          </div>
        )}
  
        <h3>Work History</h3>
        {workData.length > 0 && (
          <div>
            {workData.map((entry, index) => (
              <div key={index}>
                <p class="employ">{entry.employer}</p>
                <p>From: {entry.startDate} - {entry.endDate}</p>
                <p>Job Duties: {entry.jobDuties}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }