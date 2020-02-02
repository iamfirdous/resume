export interface Info {
  name: string;
  whatAmI: string;
  logo: string;
  aboutMe: string;
  email?: string;
  phone?: string;
}

export interface Skill {
  id: string;
  name: string;
  icon?: string;
  level?: 'EXPERT' | 'ADVANCED' | 'INTERMEDIATE' | 'ELEMENTARY' | 'BEGINNER';
}

export interface Work {
  id: string;
  title: string;
  type: string;
  companyName: string;
  companyLogo: string;
  location: string;
  website: string;
  start: Date;
  end?: Date;
  currentlyWorking?: boolean;
}

export interface Education {
  id: string;
  instituteName: string;
  instituteLogo: string;
  degree: string;
  start: Date;
  end: Date;
  percentage?: number;
}
