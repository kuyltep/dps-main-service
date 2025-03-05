import { Module } from '@nestjs/common';
import { ConfigModule } from './config.module';
import { SwaggerModule } from './swagger.module';
import { HealthModule } from './health.module';
import { AppController } from '../controllers/app.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '../services/config.service';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AuthGuard } from '../guards/auth.guard';
import { RolesGuard } from '../guards/roles.guard';
import { ErorrsInterceptor } from '../interceptors/errors.interceptor';
import { PrismaModule } from './prisma.module';
import { AdminsToCompaniesModule } from './admins-to-company.module';
import { ExceptionModule } from './exception.module';
import { CompaniesModule } from './companies.module';
import { EmployeesToCompaniesModule } from './employees-to-companies.module';
import { AdminsToUniversitiesModule } from './admins-to-universitites.module';
import { StudentsToUniversitiesModule } from './students-to-universities.module';

@Module({
  imports: [
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
    JwtModule.registerAsync({
      useFactory(configService: ConfigService) {
        return {
          global: true,
          secret: configService.getJwtSecret(),
          signOptions: {
            expiresIn: configService.getExpiresIn(),
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [
    {
      useClass: AuthGuard,
      provide: APP_GUARD,
    },
    {
      useClass: RolesGuard,
      provide: APP_GUARD,
    },
    {
      useClass: ErorrsInterceptor,
      provide: APP_INTERCEPTOR,
    },
  ],
})
export class AppModule {}
