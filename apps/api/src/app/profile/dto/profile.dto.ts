export type ProfileSkillDto = {
  id: number;
  name: string;
};

export type ProfileDto = {
  id: number;
  name: string;
  description: string;
  skills: Array<ProfileSkillDto>;
};
