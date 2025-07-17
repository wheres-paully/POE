import React from 'react';
import JobCard from './JobCard';

function JobList({ jobs, deleteJob, updateStatus, updateNotes }) {
  return (
    <div>
      {jobs.length === 0 ? <p>No applications yet.</p> : (
        jobs.map(job => (
          <JobCard
            key={job.id}
            job={job}
            deleteJob={deleteJob}
            updateStatus={updateStatus}
            updateNotes={updateNotes}
          />
        )) 
      )}
    </div>
  );
}

export default JobList;
