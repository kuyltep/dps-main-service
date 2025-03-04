import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { QueryPageDto } from '../query.page.dto';

export class QueryGetUniversityDto extends QueryPageDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  name?: string;
}
