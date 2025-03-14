import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class QueryDeleteVacanciesResponse {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  student_id?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  vacancy_id?: string;
}
