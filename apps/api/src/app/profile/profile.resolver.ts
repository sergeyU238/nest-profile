import { Resolver, Query, ResolveField } from '@nestjs/graphql';
import { QueryBus } from '@nestjs/cqrs';
import { Profile } from './models/profile.model';
import { GetProfileQuery } from './queries';
import type { ProfileDto } from './dto/profile.dto';
import { NotFoundException } from '@nestjs/common';
import { Experience } from '../experience/models/experience.model';
import { GetExperienceQuery, GetProjectsQuery } from '../experience/queries';
import { Project } from '../experience/models/project.model';
import type { ExperienceDto } from '../experience/dto/experience.dto';
import type { ProjectDto } from '../experience/dto/project.dto';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query(() => Profile, { name: 'profile' })
  async getProfile(): Promise<ProfileDto> {
    const profile = await this.queryBus.execute(new GetProfileQuery());

    if (!profile) {
      throw new NotFoundException('Profile not found');
    }

    return profile;
  }

  @ResolveField(() => [Experience], { name: 'experience' })
  async experience(): Promise<Array<ExperienceDto>> {
    return this.queryBus.execute(new GetExperienceQuery());
  }

  @ResolveField(() => [Project], { name: 'projects' })
  async projects(): Promise<Array<ProjectDto>> {
    return this.queryBus.execute(new GetProjectsQuery());
  }
}
