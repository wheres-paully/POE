import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function JobForm({ addJob }) {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState('Applied');
  const [type, setType] = useState('Remote');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newJob = {
      id: uuidv4(),
      title,
      company,
      status,
      type,
      notes,
      // ❌ Don't add dateAdded here – App.jsx does it
    };

    addJob(newJob);

    // Clear form
    setTitle('');
    setCompany('');
    setStatus('Applied');
    setType('Remote');
    setNotes('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Job title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option>Remote</option>
        <option>On-site</option>
        <option>Hybrid</option>
      </select>
      <textarea
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button type="submit">Add Job</button>
    </form>
  );
}

export default JobForm;
