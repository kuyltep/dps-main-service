import { Module } from '@nestjs/common';
import { ConfigModule } from './config.module';
import { SwaggerModule } from './swagger.module';
import { HealthModule } from './health.module';
import { AppController } from '../controllers/app.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '../services/config.service';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AuthGuard } from '../guards/auth.guard';
import { RolesGuard } from '../guards/roles.guard';
import { ErorrsInterceptor } from '../interceptors/errors.interceptor';
import { AllExceptionsFilter } from '../filters/catch.filter';

@Module({
  imports: [
    ConfigModule,
    SwaggerModule,
    HealthModule,
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
    {
      useClass: AllExceptionsFilter,
      provide: APP_FILTER,
    },
  ],
})
export class AppModule {}
