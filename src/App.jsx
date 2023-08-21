import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";
import SetReminder from "./components/setReminder";
import ModifyReminder from "./components/modifyReminder";
import EnableReminder from "./components/enableReminder";
import DeleteReminder from "./components/deleteReminder";
import DisableReminder from "./components/disableReminder";
import ViewReminder from "./components/viewReminder";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />}
        />
        <Route path="/homepage" element={<HomePage />} />
        <Route
          path="/set-reminder"
          element={
            isLoggedIn ? <SetReminder /> : <Login onLogin={handleLogin} />
          }
        />
        <Route
          path="/modify-reminder"
          element={
            isLoggedIn ? <ModifyReminder /> : <Login onLogin={handleLogin} />
          }
        />
        <Route
          path="/enable-reminder"
          element={
            isLoggedIn ? <EnableReminder /> : <Login onLogin={handleLogin} />
          }
        />
        <Route
          path="/delete-reminder"
          element={
            isLoggedIn ? <DeleteReminder /> : <Login onLogin={handleLogin} />
          }
        />
        <Route
          path="/view-reminder"
          element={
            isLoggedIn ? <ViewReminder /> : <Login onLogin={handleLogin} />
          }
        />
        <Route
          path="/"
          element={isLoggedIn ? <HomePage /> : <Login onLogin={handleLogin} />}
        />
        <Route
          path="/disable-reminder"
          element={
            isLoggedIn ? <DisableReminder /> : <Login onLogin={handleLogin} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
