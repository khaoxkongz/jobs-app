import { useEffect, useState } from 'react';

import { JobsDto } from '../interfaces/job.dto';
import { UseJobListingsHook } from '../interfaces/hook';

const useJobListings = ({ isHome }: { isHome: boolean }): UseJobListingsHook => {
  const [jobs, setJobs] = useState<JobsDto[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome
        ? `https://job-apii-1-0-1.onrender.com/jobs?_limit=3`
        : `https://job-apii-1-0-1.onrender.com/jobs`;
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return { jobs, loading };
};

export default useJobListings;
