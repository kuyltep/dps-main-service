import { ApiProperty } from '@nestjs/swagger';
import { VacancyResponseStatus } from '@prisma/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class QueryGetVacancyResponsesDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  student_id?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  vacancy_id?: string;

  @ApiProperty({ required: false, enum: VacancyResponseStatus })
  @IsOptional()
  @IsEnum(VacancyResponseStatus)
  status?: VacancyResponseStatus;
}
