import { Global, Module } from '@nestjs/common';
import { VacanciesController } from '../controllers/vacancies.controller';
import { VacanciesService } from '../services/vacancies.service';

@Global()
@Module({
  controllers: [VacanciesController],
  providers: [VacanciesService],
})
export class VacanciesModule {}
