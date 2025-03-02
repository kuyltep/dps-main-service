import { Global, Module } from '@nestjs/common';
import { EmployeesToCompaniesController } from '../controllers/employees-to-companies.controller';
import { EmployeesToCompaniesService } from '../services/employees-to-company.service';

@Global()
@Module({
  controllers: [EmployeesToCompaniesController],
  providers: [EmployeesToCompaniesService],
  exports: [EmployeesToCompaniesService],
})
export class EmployeesToCompaniesModule {}
