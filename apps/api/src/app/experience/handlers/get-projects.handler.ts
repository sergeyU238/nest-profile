import { type IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetProjectsQuery } from '../queries';
import { ExperienceRepository } from '../repositories/experience.repository';
import type { ProjectDto } from '../dto/project.dto';

@QueryHandler(GetProjectsQuery)
export class GetProjectsHandler implements IQueryHandler<GetProjectsQuery> {
  constructor(private readonly experienceRepository: ExperienceRepository) {}

  async execute(): Promise<Array<ProjectDto>> {
    const projectData = await this.experienceRepository.getProjects();

    if (!projectData) {
      return [];
    }

    return projectData.map((project) => ({
      id: project.id,
      name: project.name,
    }));
  }
}
