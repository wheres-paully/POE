import React, { useState } from 'react';

function JobCard({ job, deleteJob, updateStatus, updateNotes }) {
  const [editing, setEditing] = useState(false);
  const [tempNotes, setTempNotes] = useState(job.notes || "");

  const handleSave = () => {
    updateNotes(job.id, tempNotes);
    setEditing(false);
  };

  const handleCancel = () => {
    setTempNotes(job.notes || "");
    setEditing(false);
  };

  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Status:</strong> {job.status}</p>
      <p><strong>Type:</strong> {job.type}</p>

      {/* Notes Section */}
      {editing ? (
        <>
          <label><strong>Notes:</strong></label>
          <textarea
            value={tempNotes}
            onChange={(e) => setTempNotes(e.target.value)}
            rows={4}
            autoFocus
          />
          <div style={{ marginTop: '0.5rem' }}>
            <button onClick={handleSave}>💾 Save</button>
            <button onClick={handleCancel} style={{ marginLeft: '0.5rem' }}>❌ Cancel</button>
          </div>
        </>
      ) : (
        <>
          <p><strong>Notes:</strong> {job.notes || "—"}</p>
          <button onClick={() => setEditing(true)}>📝 Edit Notes</button>
        </>
      )}

      <button onClick={() => deleteJob(job.id)}>🗑️ Delete</button>
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
}

export default JobCard;
