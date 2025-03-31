import { Global, Module } from '@nestjs/common';
import { VacanciesController } from '../controllers/vacancies.controller';
import { VacanciesService } from '../services/vacancies.service';
import { QdrantService } from '../services/qdrant.service';
import { HttpModule } from '@nestjs/axios';

@Global()
@Module({
  imports: [HttpModule],
  controllers: [VacanciesController],
  providers: [VacanciesService, QdrantService],
})
export class VacanciesModule {}
