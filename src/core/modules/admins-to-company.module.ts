import { Global, Module } from '@nestjs/common';
import { AdminsToCompaniesController } from '../controllers/admins-to-company.controller';
import { AdminsToCompaniesService } from '../services/admins-to-company.service';

@Global()
@Module({
  controllers: [AdminsToCompaniesController],
  providers: [AdminsToCompaniesService],
  exports: [AdminsToCompaniesService],
})
export class AdminsToCompaniesModule {}
