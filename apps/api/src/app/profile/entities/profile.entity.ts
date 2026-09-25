export type ProfileSkill = {
  id: number;
  name: string;
};

type PrismaOutput = {
  id: number;
  name: string;
  description: string;
  profileSkills?: Array<{
    skill: {
      name: string;
      id: number;
    };
  }>;
};

export class ProfileEntity {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public skills: Array<ProfileSkill>,
  ) {}

  static fromPrisma(prismaOutput: PrismaOutput): ProfileEntity {
    const id = prismaOutput.id;
    const name = prismaOutput.name;
    const description = prismaOutput.description;
    const skills = prismaOutput.profileSkills?.map(({ skill }) => ({
      id: skill.id,
      name: skill.name,
    }));

    return ProfileEntity.create(id, name, description, skills || []);
  }

  static create(
    id: number,
    name: string,
    description: string,
    skills: Array<ProfileSkill>,
  ): ProfileEntity {
    return new ProfileEntity(id, name, description, skills);
  }
}
