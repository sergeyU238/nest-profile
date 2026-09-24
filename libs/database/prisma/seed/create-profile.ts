import { PrismaClient } from '../../src/generated/prisma/client';

enum SKILLS {
  'NestJS' = 1,
  'NestCli',
  'Prisma',
  'PostgreSQL',
  'MSSQL',
  'MySQL',
  'Docker',
  'Typescript',
  'Javascript',
  'Webpack',
  'Vite',
  'npm',
  'pnpm',
  'yarn',
  'CommonJS',
  'ESLint',
  'Jest',
  'Karma',
  'Jasmine',
  'Express',
  'NodeJs',
  'Angular',
  'AngularMaterial',
  'AngularRouter',
  'NgRx',
  'Akita',
  'Signal',
  'SignalStore',
  'LazyLoading',
  'DependencyInjection',
  'StandaloneComponents',
  'ReactiveForms',
  'SignalForms',
  'RouteGuards',
  'ChangeDetection',
  'Angular Cli',
  'Agile',
  'Kanban',
  'HTML',
  'CSS',
  'SCSS',
  'WordPress',
  'PHP',
  'Yii',
  'jQuery',
  'Nx',
}

const companies = {
  HotelBook: 1,
  JetRuby: 2,
  Luxsoft: 3,
  Teaminternational: 4,
  Troops: 5,
  Infopulse: 6,
  DAXX: 7,
  Freelance: 8,
  'ronis-bt': 9,
};

const positions = {
  'Junior Developer': 1,
  'Middle Developer': 2,
  'Senior Developer': 3,
  'Lead Developer': 4,
};

const projects = {
  'Real estate projects': 1,
  'Full stack projects': 2,
  'Age of learning': 3,
  'Deloitte projects': 4,
  Troops: 5,
  'Data analysis swiss project': 6,
  'Swiss engineering project': 7,
  Backbase: 8,
  Hotelbook: 9,
};

export async function createProfile(prisma: PrismaClient) {
  const profileId = 1;
  await prisma.profile.upsert({
    where: {
      id: profileId,
    },
    create: {
      name: 'Sergey Glonyagin',
      description:
        'NestJS and Frontend Engineer | Angular & TypeScript | Building Scalable Architectures | Technical Leadership',
    },
    update: {},
  });

  const skillData = Object.entries(SKILLS)
    .map(([name, id]) => ({
      id: parseInt(id as string, 10),
      name,
    }))
    .filter(({ id }) => !Number.isNaN(id) && !!id);
  await prisma.skill.createMany({
    data: skillData,
    skipDuplicates: true,
  });

  const companyData = Object.entries(companies).map(([name, id]) => ({
    id,
    name,
  }));
  await prisma.company.createMany({
    data: companyData,
    skipDuplicates: true,
  });

  const positonData = Object.entries(positions).map(([name, id]) => ({
    id,
    name,
  }));
  await prisma.position.createMany({
    data: positonData,
    skipDuplicates: true,
  });

  const projectData = Object.entries(projects).map(([name, id]) => ({
    id,
    name,
  }));
  await prisma.project.createMany({
    data: projectData,
    skipDuplicates: true,
  });

  const profileSkillData = Object.entries(SKILLS)
    .map(([_, id]) => ({
      skillId: parseInt(id as string, 10),
      profileId,
    }))
    .filter(({ skillId }) => !Number.isNaN(skillId) && !!skillId);
  await prisma.profileSkill.createMany({
    data: profileSkillData,
    skipDuplicates: true,
  });

  const experienceData = [
    {
      id: 1,
      profileId,
      companyId: companies['ronis-bt'],
      positionId: positions['Junior Developer'],
    },
    {
      id: 2,
      profileId,
      companyId: companies['Freelance'],
      positionId: positions['Middle Developer'],
    },
    {
      id: 3,
      profileId,
      companyId: companies['DAXX'],
      positionId: positions['Senior Developer'],
    },
    {
      id: 4,
      profileId,
      companyId: companies['Teaminternational'],
      positionId: positions['Senior Developer'],
    },
    {
      id: 5,
      profileId,
      companyId: companies['Troops'],
      positionId: positions['Lead Developer'],
    },
    {
      id: 6,
      profileId,
      companyId: companies['Infopulse'],
      positionId: positions['Senior Developer'],
    },
    {
      id: 7,
      profileId,
      companyId: companies['Luxsoft'],
      positionId: positions['Senior Developer'],
    },
    {
      id: 8,
      profileId,
      companyId: companies['JetRuby'],
      positionId: positions['Senior Developer'],
    },
    {
      id: 9,
      profileId,
      companyId: companies['HotelBook'],
      positionId: positions['Senior Developer'],
    },
  ];
  await prisma.experience.createMany({
    data: experienceData,
    skipDuplicates: true,
  });

  const experienceSkillData = [
    ...skillsToExperience(
      [
        SKILLS.CSS,
        SKILLS.HTML,
        SKILLS.PHP,
        SKILLS.HTML,
        SKILLS.WordPress,
        SKILLS.MySQL,
        SKILLS.Javascript,
        SKILLS.jQuery,
        SKILLS.MSSQL,
      ],
      1,
    ),
    ...skillsToExperience(
      [
        SKILLS.CSS,
        SKILLS.HTML,
        SKILLS.PHP,
        SKILLS.HTML,
        SKILLS.WordPress,
        SKILLS.MySQL,
        SKILLS.Javascript,
        SKILLS.jQuery,
        SKILLS.Yii,
        SKILLS.MSSQL,
      ],
      2,
    ),
    ...skillsToExperience(
      [
        SKILLS.CSS,
        SKILLS.HTML,
        SKILLS.PHP,
        SKILLS.HTML,
        SKILLS.PHP,
        SKILLS.Angular,
        SKILLS.Kanban,
        SKILLS.Javascript,
        SKILLS.DependencyInjection,
        SKILLS.AngularMaterial,
        SKILLS.LazyLoading,
        SKILLS.npm,
        SKILLS.ReactiveForms,
        SKILLS.RouteGuards,
        SKILLS.Webpack,
      ],
      3,
    ),
    ...skillsToExperience(
      [
        SKILLS.Angular,
        SKILLS.Agile,
        SKILLS.Javascript,
        SKILLS.DependencyInjection,
        SKILLS.AngularMaterial,
        SKILLS.LazyLoading,
        SKILLS.npm,
        SKILLS.ReactiveForms,
        SKILLS.RouteGuards,
        SKILLS.Webpack,
        SKILLS.Jasmine,
        SKILLS.Karma,
        SKILLS.ChangeDetection,
        SKILLS.Typescript,
      ],
      4,
    ),
    ...skillsToExperience(
      [
        SKILLS.Angular,
        SKILLS.Agile,
        SKILLS.Javascript,
        SKILLS.DependencyInjection,
        SKILLS.AngularMaterial,
        SKILLS.LazyLoading,
        SKILLS.npm,
        SKILLS.ReactiveForms,
        SKILLS.RouteGuards,
        SKILLS.Webpack,
        SKILLS.Jasmine,
        SKILLS.Karma,
        SKILLS.ChangeDetection,
        SKILLS.Typescript,
        SKILLS.AngularRouter,
      ],
      5,
    ),
    ...skillsToExperience(
      [
        SKILLS.Angular,
        SKILLS.Agile,
        SKILLS.Javascript,
        SKILLS.DependencyInjection,
        SKILLS.AngularMaterial,
        SKILLS.LazyLoading,
        SKILLS.npm,
        SKILLS.ReactiveForms,
        SKILLS.RouteGuards,
        SKILLS.Webpack,
        SKILLS.Jasmine,
        SKILLS.Karma,
        SKILLS.ChangeDetection,
        SKILLS.Typescript,
        SKILLS.Akita,
        SKILLS.AngularRouter,
        SKILLS.Jest,
      ],
      6,
    ),
    ...skillsToExperience(
      [
        SKILLS.Angular,
        SKILLS.Agile,
        SKILLS.Javascript,
        SKILLS.DependencyInjection,
        SKILLS.AngularMaterial,
        SKILLS.LazyLoading,
        SKILLS.npm,
        SKILLS.ReactiveForms,
        SKILLS.RouteGuards,
        SKILLS.Webpack,
        SKILLS.Jasmine,
        SKILLS.Karma,
        SKILLS.ChangeDetection,
        SKILLS.Typescript,
        SKILLS.NgRx,
        SKILLS.AngularRouter,
        SKILLS.StandaloneComponents,
        SKILLS.Jest,
      ],
      7,
    ),
    ...skillsToExperience(
      [
        SKILLS.Angular,
        SKILLS.Agile,
        SKILLS.Javascript,
        SKILLS.DependencyInjection,
        SKILLS.AngularMaterial,
        SKILLS.LazyLoading,
        SKILLS.npm,
        SKILLS.ReactiveForms,
        SKILLS.RouteGuards,
        SKILLS.Webpack,
        SKILLS.Jasmine,
        SKILLS.Karma,
        SKILLS.ChangeDetection,
        SKILLS.Typescript,
        SKILLS.NgRx,
        SKILLS.Nx,
        SKILLS.AngularRouter,
        SKILLS.StandaloneComponents,
        SKILLS.Jest,
      ],
      8,
    ),
    ...skillsToExperience(
      [
        SKILLS.NestCli,
        SKILLS.NestJS,
        SKILLS.PostgreSQL,
        SKILLS.NodeJs,
        SKILLS.Prisma,
        SKILLS.Vite,
        SKILLS.pnpm,
        SKILLS.yarn,
        SKILLS.Angular,
        SKILLS.Agile,
        SKILLS.Javascript,
        SKILLS.DependencyInjection,
        SKILLS.AngularMaterial,
        SKILLS.LazyLoading,
        SKILLS.npm,
        SKILLS.ReactiveForms,
        SKILLS.RouteGuards,
        SKILLS.Webpack,
        SKILLS.Jasmine,
        SKILLS.Karma,
        SKILLS.ChangeDetection,
        SKILLS.Typescript,
        SKILLS.NgRx,
        SKILLS.Nx,
        SKILLS.AngularRouter,
        SKILLS.StandaloneComponents,
        SKILLS.SignalForms,
        SKILLS.SignalForms,
        SKILLS.Jest,
        SKILLS.Signal,
        SKILLS.Akita,
      ],
      9,
    ),
  ];
  await prisma.experienceSkill.createMany({
    data: experienceSkillData,
    skipDuplicates: true,
  });

  const experienceProjectData = [
    {
      projectId: projects['Real estate projects'],
      experienceId: 1,
    },
    {
      projectId: projects['Full stack projects'],
      experienceId: 2,
    },
    {
      projectId: projects['Age of learning'],
      experienceId: 3,
    },
    {
      projectId: projects['Deloitte projects'],
      experienceId: 4,
    },
    {
      projectId: projects['Troops'],
      experienceId: 5,
    },
    {
      projectId: projects['Data analysis swiss project'],
      experienceId: 6,
    },
    {
      projectId: projects['Swiss engineering project'],
      experienceId: 7,
    },
    {
      projectId: projects['Backbase'],
      experienceId: 8,
    },
    {
      projectId: projects['Hotelbook'],
      experienceId: 9,
    },
  ];
  await prisma.experienceProject.createMany({
    data: experienceProjectData,
    skipDuplicates: true,
  });

  console.log('Profile seed complete');
}

function skillsToExperience(skills: Array<number>, experienceId: number) {
  return skills.map((skillId) => ({
    experienceId,
    skillId,
  }));
}
