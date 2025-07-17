import React, { useState } from 'react';

const JobCard = ({ job, deleteJob, updateStatus }) => {
  const [notes, setNotes] = useState(job.notes || '');
  const [isEditingNotes, setIsEditingNotes] = useState(false);

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleNotesBlur = () => {
    setIsEditingNotes(false);
    // You might want to save the notes to your job data here
    // updateJob(job.id, { ...job, notes });
  };

  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Status:</strong> {job.status}</p>
      <p><strong>Type:</strong> {job.type}</p>

      {/* Updated Notes Section */}
      <div className="notes-section">
        <strong>Notes:</strong>
        {isEditingNotes ? (
          <textarea
            className="notes-textarea"
            value={notes}
            onChange={handleNotesChange}
            onBlur={handleNotesBlur}
            autoFocus
            placeholder="Add your notes here..."
          />
        ) : (
          <div 
            className="notes-display"
            onClick={() => setIsEditingNotes(true)}
          >
            {notes || 'Click to add notes...'}
          </div>
        )}
      </div>

      {job.dateAdded && (
        <p><strong>Date Added:</strong> {new Date(job.dateAdded).toLocaleDateString()}</p>
      )}

      <button onClick={() => deleteJob(job.id)}>Delete</button>

      {/* Optional status update */}
      <select
        value={job.status}
        onChange={(e) => updateStatus(job.id, e.target.value)}
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
    </div>
  );
};

export default JobCard;
