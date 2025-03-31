import { Module } from '@nestjs/common';
import { ConfigModule } from './config.module';
import { SwaggerModule } from './swagger.module';
import { HealthModule } from './health.module';
import { AppController } from '../controllers/app.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { PrismaModule } from './prisma.module';
import { AdminsToCompaniesModule } from './admins-to-company.module';
import { ExceptionModule } from './exception.module';
import { CompaniesModule } from './companies.module';
import { EmployeesToCompaniesModule } from './employees-to-companies.module';
import { AdminsToUniversitiesModule } from './admins-to-universitites.module';
import { StudentsToUniversitiesModule } from './students-to-universities.module';
import { UniversitiesModule } from './universities.module';
import { VacanciesModule } from './vacancies.module';
import { VacacniesResponsesModule } from './vacancies-responses.module';
import { ErrorsInterceptor } from '../interceptors/errors.interceptor';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
    ConfigModule,
    SwaggerModule,
    HealthModule,
    PrismaModule,
    CompaniesModule,
    ExceptionModule,
    AdminsToCompaniesModule,
    EmployeesToCompaniesModule,
    AdminsToUniversitiesModule,
    StudentsToUniversitiesModule,
    UniversitiesModule,
    VacanciesModule,
    VacacniesResponsesModule,
  ],
  controllers: [AppController],
  providers: [
    {
      useClass: ErrorsInterceptor,
      provide: APP_INTERCEPTOR,
    },
  ],
})
export class AppModule {}
