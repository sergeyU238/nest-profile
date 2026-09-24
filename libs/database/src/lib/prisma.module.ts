import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service.js';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'libs/database/.env',
    }),
  ],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
