import React, { useState } from "react";
import { styled } from "styled-components";

const SetReminder = () => {
  const handleClick = () => {
    alert("Reminder added!");
  };
  const [selectedSubject, setSelectedSubject] = useState("");
  const [reminderText, setReminderText] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [days, setDays] = useState({
    day7: false,
    day5: false,
    day3: false,
    day2: false,
  });

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const handleTextAreaChange = (event) => {
    setReminderText(event.target.value);
  };

  const handleText1Change = (event) => {
    setText1(event.target.value);
  };

  const handleText2Change = (event) => {
    setText2(event.target.value);
  };

  const handleText3Change = (event) => {
    setText3(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setDays((prevDays) => ({ ...prevDays, [name]: checked }));
  };

  const handleConfirmClick = () => {
    // Handle setting the reminder using the gathered data
    console.log("Reminder set!");
  };

  return (
    <StyledSetReminder>
      <h2>Set Reminder</h2>
      <div>
        <label htmlFor="subject">Select Subject:</label>
        <select
          id="subject"
          value={selectedSubject}
          onChange={handleSubjectChange}
        >
          <option value="">Select a Subject</option>
          <option value="Birthday">Birthday</option>
          <option value="Party">Party</option>
          <option value="Market">Market</option>
          <option value="House Bill">House Bill</option>
          <option value="Dog Walk">Dog Walk</option>
          {/* Add more subjects as needed */}
        </select>
      </div>
      <div>
        <label htmlFor="reminderText">Reminder Text:</label>
        <TextArea
          id="reminderText"
          value={reminderText}
          onChange={handleTextAreaChange}
        />
      </div>
      <div>
        <label htmlFor="text1">Email:</label>
        <input
          type="text"
          id="text1"
          value={text1}
          onChange={handleText1Change}
        />
      </div>
      <div>
        <label htmlFor="text2">Contact No:</label>
        <input
          type="number"
          id="text2"
          value={text2}
          onChange={handleText2Change}
        />
      </div>

      <div>
        <Label>Set Reminder Days:</Label>
        <Label>
          <input
            type="checkbox"
            name="day7"
            checked={days.day7}
            onChange={handleCheckboxChange}
          />
          7 Days
        </Label>
        <label>
          <Input
            type="checkbox"
            name="day5"
            checked={days.day5}
            onChange={handleCheckboxChange}
          />
          5 Days
        </label>
        <Label>
          <Input
            type="checkbox"
            name="day3"
            checked={days.day3}
            onChange={handleCheckboxChange}
          />
          3 Days
        </Label>
        <CheckboxLabel>
          <Input
            type="checkbox"
            name="day2"
            checked={days.day2}
            onChange={handleCheckboxChange}
          />
          2 Days
        </CheckboxLabel>
      </div>
      <button onClick={handleClick}>Confirm</button>
    </StyledSetReminder>
  );
};
const StyledSetReminder = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 400px;
  margin: 0 auto;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  padding: 5px;
  width: 100%;
  margin-bottom: 10px;
`;

const CheckboxLabel = styled.label`
  margin-right: 10px;
`;
export default SetReminder;
