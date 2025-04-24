import React from "react";

const StopsOptions = ({ onStopSelect }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      width: "200px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    }}>
      <h3 style={{ marginBottom: "12px", fontSize: "18px" }}>View Nearby Stops:</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <button style={buttonStyle} onClick={() => onStopSelect("restaurant")}>
          🍽️ Restaurants
        </button>
        <button style={buttonStyle} onClick={() => onStopSelect("restroom")}>
          🚻 Restrooms
        </button>
        <button style={buttonStyle} onClick={() => onStopSelect("petrolpump")}>
          ⛽ Petrol Pumps
        </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: "10px 14px",
  borderRadius: "6px",
  border: "none",
  backgroundColor: "#007BFF",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "14px",
  transition: "background-color 0.2s",
};

export default StopsOptions;
