import { HttpModule as NestHttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  imports: [NestHttpModule],
  exports: [NestHttpModule],
})
export class HttpModule {}
