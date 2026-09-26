import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo';
import { ProfileModule } from './profile/profile.module';
import { ExperienceModule } from './experience/experience.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        autoSchemaFile: true,
        csrfPrevention:
          !configService.get('ENABLE_CSRF') ||
          configService.get('ENABLE_CSRF') === 'true',
        introspection: configService.get('ENABLE_PLAYGROUND') === 'true',
        playground: configService.get('ENABLE_PLAYGROUND') === 'true',
      }),
    }),
    ProfileModule,
    ExperienceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
