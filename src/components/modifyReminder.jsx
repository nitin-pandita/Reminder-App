import React, { useState } from "react";
import styled from "styled-components";

const StyledModifyReminder = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 400px;
  margin: 0 auto;
`;

const Label = styled.label`
  margin-right: 10px;
  display: block;
  margin-top: 10px;
`;

const TextArea = styled.textarea`
  padding: 5px;
  width: 100%;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 5px;
  width: 100%;
  margin-bottom: 10px;
`;

const CheckboxLabel = styled.label`
  margin-right: 10px;
`;

const modifyReminder = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedReminder, setSelectedReminder] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [smsNo, setSmsNo] = useState("");
  const [days, setDays] = useState({
    day7: false,
    day5: false,
    day3: false,
    day2: false,
  });

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const handleReminderChange = (event) => {
    setSelectedReminder(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleContactNoChange = (event) => {
    setContactNo(event.target.value);
  };

  const handleSmsNoChange = (event) => {
    setSmsNo(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setDays((prevDays) => ({ ...prevDays, [name]: checked }));
  };

  const handleConfirmClick = () => {
    alert("Reminder modified!");
  };

  return (
    <StyledModifyReminder>
      <h2>Modify Reminder</h2>
      <div>
        <Label htmlFor="subject">Select Subject:</Label>
        <select
          id="subject"
          value={selectedSubject}
          onChange={handleSubjectChange}
        ></select>
      </div>
      <div>
        <Label htmlFor="reminder">Reminders:</Label>
        <select
          id="reminder"
          value={selectedReminder}
          onChange={handleReminderChange}
        ></select>
      </div>
      <div>
        <Label htmlFor="description">Add description:</Label>
        <TextArea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <div>
        <Label htmlFor="email">Email Address:</Label>
        <Input
          type="text"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <Label htmlFor="contactNo">Contact No:</Label>
        <Input
          type="text"
          id="contactNo"
          value={contactNo}
          onChange={handleContactNoChange}
        />
      </div>
      <div>
        <Label htmlFor="smsNo">SMS No:</Label>
        <Input
          type="text"
          id="smsNo"
          value={smsNo}
          onChange={handleSmsNoChange}
        />
      </div>
      <div>
        <Label>Recur for next:</Label>
        <CheckboxLabel>
          <input
            type="checkbox"
            name="day7"
            checked={days.day7}
            onChange={handleCheckboxChange}
          />
          7 Days
          <input
            type="checkbox"
            name="day5"
            checked={days.day5}
            onChange={handleCheckboxChange}
          />
          5 days
          <input
            type="checkbox"
            name="day3"
            checked={days.day3}
            onChange={handleCheckboxChange}
          />
          3 days
          <input
            type="checkbox"
            name="day2"
            checked={days.day2}
            onChange={handleCheckboxChange}
          />
          2 days
        </CheckboxLabel>
        {/* ... (rest of your checkboxes) */}
      </div>
      <button onClick={handleConfirmClick}>Confirm</button>
    </StyledModifyReminder>
  );
};

export default modifyReminder;
