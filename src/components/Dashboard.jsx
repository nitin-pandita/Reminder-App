import React, { useState, useEffect } from "react";
import { format } from "date-fns";

const ReminderForm = ({ createReminder }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [lastReminder, setLastReminder] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedDate = format(currentDateTime, "yyyy-MM-dd HH:mm:ss");

    setLastReminder({
      title,
      description,
      date: formattedDate,
    });

    // Clear form fields
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <h2>Create Reminder</h2>
      <p id="datetime">
        Current Date and Time: {currentDateTime.toLocaleString()}
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="reminderDate">Reminder Date:</label>
          <input
            type="datetime-local"
            id="reminderDate"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <button type="submit">Create Reminder</button>
      </form>

      {lastReminder && (
        <div>
          <h3>Last Reminder</h3>
          <h2>Title: {lastReminder.description}</h2>
          <p>Date: {lastReminder.date}</p>
        </div>
      )}
    </div>
  );
};

export default ReminderForm;
