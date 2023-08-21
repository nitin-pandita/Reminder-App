import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
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

const Input = styled.input`
  padding: 5px;
`;

const CheckBoxGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const CalendarIcon = styled(FontAwesomeIcon)`
  font-size: 1.2em;
  margin-right: 5px;
`;

const EnableReminder = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedReminder, setSelectedReminder] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [smsNo, setSmsNo] = useState("");
  const [recurDays, setRecurDays] = useState({
    days7: false,
    days5: false,
    days3: false,
    days2: false,
  });

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

  const handleRecurChange = (event) => {
    const { name, checked } = event.target;
    setRecurDays((prevRecurDays) => ({
      ...prevRecurDays,
      [name]: checked,
    }));
  };

  return (
    <Container>
      <SelectRow>
        <h1>Enable Reminder Section</h1>
        <CalendarIcon icon={faCalendar} /> Select Date
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </SelectRow>
      <SelectRow>
        <span>Email Address:</span>
        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </SelectRow>
      <SelectRow>
        <span>Contact No:</span>
        <Input
          type="text"
          value={contactNo}
          onChange={(e) => setContactNo(e.target.value)}
        />
      </SelectRow>
      <SelectRow>
        <span>SMS No:</span>
        <Input
          type="text"
          value={smsNo}
          onChange={(e) => setSmsNo(e.target.value)}
        />
      </SelectRow>
      <SelectRow>
        <span>Recur for next:</span>
        <CheckBoxGroup>
          <label>
            <input
              type="checkbox"
              name="days7"
              checked={recurDays.days7}
              onChange={handleRecurChange}
            />
            7 Days
          </label>
          <label>
            <input
              type="checkbox"
              name="days5"
              checked={recurDays.days5}
              onChange={handleRecurChange}
            />
            5 Days
          </label>
          <label>
            <input
              type="checkbox"
              name="days3"
              checked={recurDays.days3}
              onChange={handleRecurChange}
            />
            3 Days
          </label>
          <label>
            <input
              type="checkbox"
              name="days2"
              checked={recurDays.days2}
              onChange={handleRecurChange}
            />
            2 Days
          </label>
        </CheckBoxGroup>
      </SelectRow>
    </Container>
  );
};

export default EnableReminder;
