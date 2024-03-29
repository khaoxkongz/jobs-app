import { JobLoaderProps } from '../interfaces/hook'
import { JobsDto } from '../interfaces/job.dto'

// Retrieve Job from server
export const jobLoader = async ({ params }: JobLoaderProps): Promise<JobsDto> => {
  const res = await fetch(`/api/jobs/${params.id}`)
  const data = await res.json()
  return data
}
