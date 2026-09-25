import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ProfileResolver } from './profile.resolver';
import { GetProfileHandler } from './handlers/get-profile.handler';
import { PrismaModule } from '@curriculum-vitae/database';
import { ProfileRepository } from './repositories/profile.repository';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [ProfileResolver, GetProfileHandler, ProfileRepository],
})
export class ProfileModule {}
