import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import * as joi from 'joi';
import { ConfigService } from '../services/config.service';
@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      validationSchema: joi.object({
        APP_PORT: joi.number().optional().default(4001),
        JWT_SECRET: joi.string().required(),
        EXPIRES_IN: joi.string().required(),
        QDRANT_SERVICE_URL: joi.string().required(),
        QDRANT_RESUMES_COLLECTION: joi.string().required(),
        QDRANT_VACANCIES_COLLECTION: joi.string().required(),
      }),
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
