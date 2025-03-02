import { Global, Module } from '@nestjs/common';
import { CompanyController } from '../controllers/company.controller';
import { CompanyService } from '../services/company.service';

@Global()
@Module({
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
