import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCheckCircle,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
`;

const SelectRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const Select = styled.select`
  padding: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 5px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const DisableReminder = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedReminder, setSelectedReminder] = useState("");
  const reminders = [
    { id: 1, name: "Reminder 1", description: "I am very happy" },
    { id: 2, name: "Reminder 2", description: "I got my first job" },
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

  const handleConfirm = () => {
    alert("Item has been disabled");
  };

  const handleBack = () => {
    // Handle going back or resetting states if needed
    history.push("/");
  };

  return (
    <Container>
      <SelectRow>
        <h1>Disable Reminder Section</h1>
        <FontAwesomeIcon icon={faCalendar} /> Select Date
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
        <ButtonGroup>
          <button onClick={handleConfirm}>Confirm</button>
          <button onClick={handleBack}>Back</button>
        </ButtonGroup>
      </SelectRow>
    </Container>
  );
};

export default DisableReminder;
