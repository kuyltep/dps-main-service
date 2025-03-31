import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
@Injectable()
export class ConfigService {
  constructor(private readonly nestConfigService: NestConfigService) {}

  public getAppPort() {
    return this.nestConfigService.get<number>('APP_PORT');
  }

  public getJwtSecret() {
    return this.nestConfigService.get<string>('JWT_SECRET');
  }

  public getExpiresIn() {
    return this.nestConfigService.get<string>('EXPIRES_IN');
  }

  public getQdrantServiceUrl() {
    return this.nestConfigService.get<string>('QDRANT_SERVICE_URL');
  }

  public getQdrantResumesCollection() {
    return this.nestConfigService.get<string>('QDRANT_RESUMES_COLLECTION');
  }

  public getQdrantVacanciesCollection() {
    return this.nestConfigService.get<string>('QDRANT_VACANCIES_COLLECTION');
  }
}
