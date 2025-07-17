import React, { useState, useEffect } from 'react';
import JobForm from './components/JobForm';
import JobList from './components/JobList';
import Filter from './components/Filter';
import './style.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("date"); // ➕ sort state
  const [darkMode, setDarkMode] = useState(false); // 🌙 toggle state

  // Add/remove `dark` class on <body>
  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);


  // Load from localStorage on mount
  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs"));
    if (storedJobs) {
      setJobs(storedJobs);
    }
  }, []);

  // Save to localStorage whenever jobs change
  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);


  // Add a job
  const addJob = (job) => {
    const jobWithDate = {
      ...job,
      dateAdded: new Date().toISOString(), // ➕ add date when job is added
    };
    setJobs(prev => [...prev, jobWithDate]);
  };

  // Delete a job
  const deleteJob = (id) => setJobs(prev => prev.filter(job => job.id !== id));

  // Update job status
  const updateStatus = (id, status) => {
    setJobs(prev =>
      prev.map(job => job.id === id ? { ...job, status } : job)
    );
  };

  // Filter
  const filteredJobs = filter === "All" ? jobs : jobs.filter(job => job.status === filter);

  // Sort filtered jobs
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sortBy === "company") return a.company.localeCompare(b.company);
    if (sortBy === "date") return new Date(b.dateAdded) - new Date(a.dateAdded);
    return 0;
  });


  return (
    <div className="app">
      <h1>🎯 Job Tracker</h1>

      {/* 🌙 Toggle button */}
      <button onClick={() => setDarkMode(!darkMode)} style={{ marginBottom: '1rem' }}>
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>

      <JobForm addJob={addJob} />
      <Filter filter={filter} setFilter={setFilter} />

      {/* ➕ Sort Dropdown */}
      <div style={{ marginTop: '1rem' }}>
        <label htmlFor="sort">Sort by:</label>{' '}
        <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="date">Date Added</option>
          <option value="company">Company Name</option>
        </select>
      </div>

      <JobList
        jobs={sortedJobs}
        deleteJob={deleteJob}
        updateStatus={updateStatus}
      />
    </div>
  );
}

export default App;
