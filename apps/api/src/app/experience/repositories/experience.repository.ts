import { Injectable } from '@nestjs/common';
import { PrismaService } from '@curriculum-vitae/database';

@Injectable()
export class ExperienceRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getExperience() {
    return this.prismaService.experience.findMany({
      select: {
        id: true,
        company: true,
        position: true,
      },
    });
  }

  async getProjects() {
    return this.prismaService.project.findMany();
  }
}
