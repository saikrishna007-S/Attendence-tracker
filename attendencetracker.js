import React, { useState } from "react";

const students = [
  { id: 1, name: "Alice Kumar" },
  { id: 2, name: "Brian Singh" },
  { id: 3, name: "Charlie Das" },
  { id: 4, name: "Divya Patel" },
  { id: 5, name: "Esha Reddy" },
];

function AttendanceTracker() {
  const [present, setPresent] = useState({});

  // Handle checkbox changes
  const handleCheck = (id) => {
    setPresent((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Calculate present count
  const presentCount = Object.values(present).filter(Boolean).length;

  return (
    <div>
      <h2>Attendance Tracker</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <input
              type="checkbox"
              checked={!!present[student.id]}
              onChange={() => handleCheck(student.id)}
            />
            {student.name}
          </li>
        ))}
      </ul>
      <p>
        Total Present: {presentCount} / {students.length}
      </p>
    </div>
  );
}

export default AttendanceTracker;
