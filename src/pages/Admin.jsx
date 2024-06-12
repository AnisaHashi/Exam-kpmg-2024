import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import "../Css/AdminDashboard.css";

export const AdminDashboard = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    console.log("Is not authenticated");
    return <Navigate to="/login" />;
  }

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="admin-container">
      <div className="admin-edit-container">
        <div className="admin-logo">
          <img
            src={"src/assets/kpmg-logo.png"}
            style={{ width: "200px", height: "auto" }}
            alt="KPMG Logo"
          />
        </div>
        <div className="edit-functions-box">
          <h2 className="admin-edit-title">EDIT FUNCTIONS</h2>
          <div className="line-divider"></div>
          <div className="functions">
            <div className="box1">
              <button onClick={() => handleNavigation("/daily-agenda")}>
                Daily agenda{" "}
                <span role="img" aria-label="calendar">
                  📅
                </span>
              </button>
            </div>
            <button onClick={() => handleNavigation("/photo-stream")}>
              Photo stream{" "}
              <span role="img" aria-label="photo">
                🖼️
              </span>
            </button>
            <button onClick={() => handleNavigation("/cafeteria-food")}>
              Cafeteria food{" "}
              <span role="img" aria-label="food">
                🍽️
              </span>
            </button>
            <button onClick={() => handleNavigation("/deadlines")}>
              Deadlines{" "}
              <span role="img" aria-label="bell">
                🔔
              </span>
            </button>
            <button onClick={() => handleNavigation("/birthdays")}>
              Birthdays{" "}
              <span role="img" aria-label="gift">
                🎁
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
