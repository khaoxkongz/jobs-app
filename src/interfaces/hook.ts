import { Params } from 'react-router-dom';
import { JobsDto } from './job.dto';

export interface JobLoaderProps {
  params: Params<string>;
}

export interface UseJobListingsHook {
  jobs: JobsDto[] | null;
  loading: boolean;
}
