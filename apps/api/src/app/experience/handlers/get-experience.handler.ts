import { type IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetExperienceQuery } from '../queries';
import { ExperienceRepository } from '../repositories/experience.repository';
import type { ExperienceDto } from '../dto/experience.dto';

@QueryHandler(GetExperienceQuery)
export class GetExperienceQueryHandler
  implements IQueryHandler<GetExperienceQuery>
{
  constructor(private readonly experienceRepository: ExperienceRepository) {}

  async execute(): Promise<Array<ExperienceDto>> {
    const experienceData = await this.experienceRepository.getExperience();

    if (!experienceData) {
      return [];
    }

    return experienceData.map((project) => ({
      id: project.id,
      position: project.position.name,
      company: project.company.name,
    }));
  }
}
