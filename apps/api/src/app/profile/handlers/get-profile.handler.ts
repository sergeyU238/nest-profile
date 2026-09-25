import { type IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetProfileQuery } from '../queries';
import { ProfileRepository } from '../repositories/profile.repository';
import { ProfileEntity } from '../entities/profile.entity';
import type { ProfileDto } from '../dto/profile.dto';

@QueryHandler(GetProfileQuery)
export class GetProfileHandler implements IQueryHandler<GetProfileQuery> {
  constructor(private readonly profileRepository: ProfileRepository) {}

  async execute(): Promise<ProfileDto | null> {
    const profileData = await this.profileRepository.getProfile();

    if (!profileData) {
      return null;
    }

    const profile = ProfileEntity.fromPrisma(profileData);

    return {
      id: profile.id,
      name: profile.name,
      description: profile.description,
      skills: profile.skills,
    };
  }
}
