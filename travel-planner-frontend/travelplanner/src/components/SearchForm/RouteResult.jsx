// RouteResult.jsx
import React from 'react';

const RouteResult = ({ path }) => {
  if (!path || path.length === 0) return null;

  return (
    <div className="route-result">
      <h3>Shortest Path:</h3>
      <ul>
        {path.map((city, index) => (
          <li key={index}>
            {city}
            {index < path.length - 1 && " → "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RouteResult;
