import { Global, Module } from '@nestjs/common';
import { VacanciesResponsesController } from '../controllers/vacancies-responses.controller';
import { VacanciesResponsesService } from '../services/vacancies-responses.service';

@Global()
@Module({
  controllers: [VacanciesResponsesController],
  providers: [VacanciesResponsesService],
})
export class VacacniesResponsesModule {}
