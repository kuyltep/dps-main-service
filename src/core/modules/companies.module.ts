import { Global, Module } from '@nestjs/common';
import { CompaniesController } from '../controllers/companies.controller';
import { CompaniesService } from '../services/companies.service';

@Global()
@Module({
  controllers: [CompaniesController],
  providers: [CompaniesService],
})
export class CompaniesModule {}
