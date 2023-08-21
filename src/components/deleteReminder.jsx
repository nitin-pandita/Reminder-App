import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 70vh;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  width: 70%;
  margin: auto;
  border: 1px solid #ccc;
`;

const SelectRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Select = styled.select`
  padding: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 5px;
`;

const CalendarIcon = styled(FontAwesomeIcon)`
  font-size: 1.2em;
  margin-right: 5px;
`;

const DeleteReminder = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedReminder, setSelectedReminder] = useState("");
  const reminders = [
    { id: 1, name: "Reminder 1", description: "Description of Reminder 1..." },
    { id: 2, name: "Reminder 2", description: "Description of Reminder 2..." },
    // ... add more reminders here
  ];

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
    setSelectedReminder("");
  };

  const handleReminderChange = (event) => {
    setSelectedReminder(event.target.value);
  };

  const selectedReminderDetails = reminders.find(
    (reminder) => reminder.name === selectedReminder
  );

  const handleClick = () => {
    alert("Element Deleted");
  };

  return (
    <Container>
      <h1>Delete Reminder</h1>
      <SelectRow>
        <span>Select Date:</span>
        <CalendarIcon icon={faCalendar} />
      </SelectRow>
      <SelectRow>
        <span>Select Subject:</span>
        <Select value={selectedSubject} onChange={handleSubjectChange}>
          <option value="">Select a Subject</option>
          <option value="subject1">Subject 1</option>
          <option value="subject2">Subject 2</option>
          {/* ... add more subjects here */}
        </Select>
      </SelectRow>
      <SelectRow>
        <span>Reminders:</span>
        <Select value={selectedReminder} onChange={handleReminderChange}>
          <option value="">Select a Reminder</option>
          {reminders.map((reminder) => (
            <option key={reminder.id} value={reminder.name}>
              {reminder.name} - {reminder.description.slice(0, 30)}
            </option>
          ))}
        </Select>
      </SelectRow>
      <SelectRow>
        <span>Description:</span>
        <TextArea
          readOnly
          value={
            selectedReminderDetails ? selectedReminderDetails.description : ""
          }
        />
      </SelectRow>
      <button onClick={handleClick}>Delete Reminder</button>
    </Container>
  );
};

export default DeleteReminder;
