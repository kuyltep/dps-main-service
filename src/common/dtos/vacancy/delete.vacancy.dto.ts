import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class QueryDeleteVacancyDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  company_id: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  employee_id: string;
}
