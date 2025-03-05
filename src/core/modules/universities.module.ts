import { Global, Module } from '@nestjs/common';
import { UniversitiesController } from '../controllers/universities.controller';
import { UniversitiesService } from '../services/universities.service';

@Global()
@Module({
  controllers: [UniversitiesController],
  providers: [UniversitiesService],
})
export class UniversitiesModule {}
