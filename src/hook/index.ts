import { JobLoaderProps } from '../interfaces/hook';
import { ICreateJobDto, IUpdateJobDto, JobsDto } from '../interfaces/job.dto';

// Retrieve Job from server
export const jobLoader = async ({ params }: JobLoaderProps): Promise<JobsDto> => {
  const res = await fetch(`https://job-apii-1-0-1.onrender.com/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

// Add New Job
export const addJob = async (newJob: ICreateJobDto): Promise<void> => {
  await fetch(`https://job-apii-1-0-1.onrender.com/jobs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newJob),
  });
};

// Delete Job
export const deleteJob = async (id: string): Promise<void> => {
  await fetch(`https://job-apii-1-0-1.onrender.com/jobs/${id}`, {
    method: 'DELETE',
  });
};

// Update Job
export const updateJob = async (job: IUpdateJobDto): Promise<void> => {
  await fetch(`https://job-apii-1-0-1.onrender.com/jobs/${job.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(job),
  });
};
