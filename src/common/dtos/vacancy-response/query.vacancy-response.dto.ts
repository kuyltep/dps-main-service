import { ApiProperty } from '@nestjs/swagger';
import { VacancyResponseStatus } from '@prisma/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { QueryPageDto } from '../query.page.dto';

export class QueryGetVacancyResponsesDto extends QueryPageDto {
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
