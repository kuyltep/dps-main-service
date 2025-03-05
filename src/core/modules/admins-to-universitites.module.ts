import { Global, Module } from '@nestjs/common';
import { AdminsToUniversitiesService } from '../services/admins-to-universities.service';
import { AdminsToUniversitiesController } from '../controllers/admins-to-universities.controller';

@Global()
@Module({
  controllers: [AdminsToUniversitiesController],
  providers: [AdminsToUniversitiesService],
  exports: [AdminsToUniversitiesService],
})
export class AdminsToUniversitiesModule {}
