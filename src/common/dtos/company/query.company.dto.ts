import { ApiProperty } from '@nestjs/swagger';
import { QueryPageDto } from '../query.page.dto';
import { IsOptional, IsString } from 'class-validator';

export class QueryCompanyDto extends QueryPageDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  name?: string;
}
