import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { GetProjectsHandler } from './handlers/get-projects.handler';
import { GetExperienceQueryHandler } from './handlers/get-experience.handler';
import { PrismaModule } from '@curriculum-vitae/database';
import { ExperienceRepository } from './repositories/experience.repository';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [
    GetProjectsHandler,
    GetExperienceQueryHandler,
    ExperienceRepository,
  ],
})
export class ExperienceModule {}
