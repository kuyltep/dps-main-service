import { Global, Module } from '@nestjs/common';
import { StudentsToUniversitiesController } from '../controllers/students-to-universities.controller';
import { StudentsToUniversitiesService } from '../services/students-to-universitites.service';

@Global()
@Module({
  controllers: [StudentsToUniversitiesController],
  providers: [StudentsToUniversitiesService],
  exports: [StudentsToUniversitiesService],
})
export class StudentsToUniversitiesModule {}
