import React from 'react';

function Filter({ filter, setFilter }) {
  const options = ["All", "Applied", "Interview", "Offer", "Rejected"];

  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          onClick={() => setFilter(option)}
          style={{ fontWeight: filter === option ? "bold" : "normal" }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Filter;
