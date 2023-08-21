import React, { useState } from "react";
import ReminderForm from "./ReminderForm";

const Dashboard = () => {
  const [reminders, setReminders] = useState([]); // State to store reminders

  const createReminder = (newReminder) => {
    setReminders([...reminders, newReminder]);
  };

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <ReminderForm createReminder={createReminder} />

      {/* Display created reminders */}
      <div>
        <h2>Reminders</h2>
        <ul>
          {reminders.map((reminder) => (
            <li key={reminder.id}>
              <strong>{reminder.title}</strong>: {reminder.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
