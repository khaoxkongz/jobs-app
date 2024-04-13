import { ICreateJobDto, IUpdateJobDto } from './job.dto';

export interface AddJobPageProps {
  addJobSubmit: (newJob: ICreateJobDto) => Promise<void>;
}

export interface EditJobPageProps {
  updateJobSubmit: (updatedJob: IUpdateJobDto) => Promise<void>;
}

export interface JobPageProps {
  deleteJob: (jobid: string) => Promise<void>;
}
