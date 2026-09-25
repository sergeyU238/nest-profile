import { Injectable } from '@nestjs/common';
import { PrismaService } from '@curriculum-vitae/database';

@Injectable()
export class ProfileRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getProfile() {
    return this.prismaService.profile.findFirst({
      select: {
        id: true,
        name: true,
        description: true,
        profileSkills: {
          select: {
            skill: true,
          },
        },
      },
    });
  }
}
