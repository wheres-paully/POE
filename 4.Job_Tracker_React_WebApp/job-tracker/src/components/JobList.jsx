import React from 'react';
import JobCard from './JobCard';

function JobList({ jobs, deleteJob, updateStatus }) {
  return (
    <div>
      {jobs.length === 0 ? <p>No applications yet.</p> : (
        jobs.map(job => (
          <JobCard
            key={job.id}
            job={job}
            deleteJob={deleteJob}
            updateStatus={updateStatus}
          />
        ))
      )}
    </div>
  );
}

export default JobList;
