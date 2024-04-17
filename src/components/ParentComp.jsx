import React, { useState } from 'react';
import NameForm from './App.jsx';
import SchoolForm from './School.jsx';
import WorkForm from './Work.jsx';
import DisplayInformation from './A4Document.jsx';
import '../styles/App.css';

export default function ParentComponent() {
    // State to store form data
    const [nameData, setNameData] = useState(null);
    const [schoolData, setSchoolData] = useState([]);
    const [workData, setWorkData] = useState([]);
  
    // Function to handle form submission from NameForm
    const handleNameFormSubmit = (data) => {
      setNameData(data);
    };

    // Function to remove name data
    const removeNameData = () => {
      setNameData(null);
    };
  
    // Function to handle form submission from SchoolForm
    const handleSchoolFormSubmit = (data) => {
      setSchoolData([...schoolData, data]);
    };

    // Function to remove school data
    const removeSchoolData = (index) => {
      const updatedSchoolData = [...schoolData];
      updatedSchoolData.splice(index, 1);
      setSchoolData(updatedSchoolData);
    };
  
    // Function to handle form submission from WorkForm
    const handleWorkFormSubmit = (data) => {
      setWorkData([...workData, data]);
    };

    // Function to remove work data
    const removeWorkData = (index) => {
      const updatedWorkData = [...workData];
      updatedWorkData.splice(index, 1);
      setWorkData(updatedWorkData);
    };
  
    return (
      <div class="all">
        <div class="formCont">
          <NameForm onSubmit={handleNameFormSubmit} onRemove={removeNameData} />
          <SchoolForm onSubmit={handleSchoolFormSubmit} onRemove={removeSchoolData} />
          <WorkForm onSubmit={handleWorkFormSubmit} onRemove={removeWorkData} />
        </div>
        <DisplayInformation nameData={nameData} schoolData={schoolData} workData={workData} />
      </div>
    );
}