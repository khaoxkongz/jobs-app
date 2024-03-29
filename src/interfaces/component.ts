import { JobsDto } from './job.dto'

export interface CardProps {
  children: React.ReactNode
  bg?: string
}

export interface HeroProps {
  title?: string
  subtitle?: string
}

export interface JobListingProps {
  job: JobsDto
}

export interface JobListingsProps {
  isHome?: boolean
}

export interface NavBarProps {
  isActive: boolean
}

export interface SpinnerProps {
  loading: boolean
}
