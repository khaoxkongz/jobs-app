import { JobLoaderProps } from '../interfaces/hook'
import { ICreateJobDto, IUpdateJobDto, JobsDto } from '../interfaces/job.dto'

// Retrieve Job from server
export const jobLoader = async ({ params }: JobLoaderProps): Promise<JobsDto> => {
  const res = await fetch(`/api/jobs/${params.id}`)
  const data = await res.json()
  return data
}

// Add New Job
export const addJob = async (newJob: ICreateJobDto): Promise<void> => {
  await fetch('/api/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newJob),
  })
}

// Delete Job
export const deleteJob = async (id: string): Promise<void> => {
  await fetch(`/api/jobs/${id}`, {
    method: 'DELETE',
  })
}

// Update Job
export const updateJob = async (job: IUpdateJobDto): Promise<void> => {
  await fetch(`/api/jobs/${job.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(job),
  })
}
