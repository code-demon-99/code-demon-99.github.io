export interface ResumeData {
  summary:string;
  totalExperienceInYears : number;
  topSkills : TopSkills
  Education:Education[];
  Experience: Experience[];
  projects: Project[];
  skills:Skill[];
  currentJObRole : string
  languageSpoken : string[]
  interest : string[]
  extraCurricularActivities   : string []
  certifications: Certification[]
}

export interface TopSkills {
  skill1 : Skill
  skill2 : Skill
  skill3: Skill
  skill4 : Skill
  skill5 : Skill
}


export interface Education{
  name:string
  organization: string
  start: string
  end : string
  score_type : string
  score : number
}

export interface Experience {
  jobRole:string
  orgName:string
  start : string
  end : string
  responsiblities : string[]
}

export interface Project {
  name : string
  description : string
  start :string
  end : string
}

export interface Skill{
  name : string
  type : 'Technical'| 'non-technical'
  level : 'begineer'| 'intermidiate' | 'advanced'
  ratingOutOf10 : 1|2|3|4|5|6|7|8|9|10
  yearsofexperience : number
}

export interface Certification {
  title : string
  description : string
  start : string
  end : string
  topics : string []
}
