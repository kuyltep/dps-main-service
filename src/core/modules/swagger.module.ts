import { Global, INestApplication, Module } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerModule as NestSwaggerModule,
} from '@nestjs/swagger';
@Global()
@Module({ imports: [NestSwaggerModule] })
export class SwaggerModule {
  private app: INestApplication;

  public config() {
    const document = new DocumentBuilder()
      .setTitle('Main service for Digital Student Profile')
      .setDescription('API Operations for main service')
      .setVersion('1.0')
      .build();

    const documentFactory = () =>
      NestSwaggerModule.createDocument(this.app, document, {
        autoTagControllers: true,
      });

    return NestSwaggerModule.setup('/documentation', this.app, documentFactory);
  }

  public use(app: INestApplication) {
    this.app = app;
  }
}
