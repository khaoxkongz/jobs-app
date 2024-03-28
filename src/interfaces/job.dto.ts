export interface CompanyDto {
  name: string
  description: string
  contactEmail: string
  contactPhone: string
}

export interface JobDto {
  id: string
  title: string
  type: string
  description: string
  location: string
  salary: string
  company: CompanyDto
}

export interface JobsDto extends JobDto {}

export interface ICreateJobDto extends Omit<JobDto, 'id'> {}

export interface ICreateCompanyDto extends CompanyDto {}

export interface IUpdateJobDto extends JobDto {}

export interface IUpdateCompanyDto extends CompanyDto {}
