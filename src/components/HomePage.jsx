import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const currentDate = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  return (
    <div>
      <h1>Welcome to the Reminder Application</h1>
      <h2>Current Date: {formattedDate}</h2>
      <nav>
        <ul>
          <li>
            <Link to="/set-reminder">Set Reminder</Link>
          </li>
          <li>
            <Link to="/modify-reminder">Modify Reminder</Link>
          </li>
          <li>
            <Link to="/delete-reminder">Delete Reminder</Link>
          </li>
          <li>
            <Link to="/enable-reminder">Enable Reminder</Link>
          </li>
          <li>
            <Link to="/disable-reminder">Disable Reminder</Link>
          </li>
          <li>
            <Link to="/view-reminder">view Reminder</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
