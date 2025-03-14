import { ApiProperty } from '@nestjs/swagger';
import { VacancyType } from '@prisma/client';
import { GetCompaniesDto } from '../company/get.company.dto';
import { GetVacancyResponsesDto } from '../vacancy-response/get.vacancy-response.dto';

export class GetVacanciesDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  questions: string;
  @ApiProperty({ enum: VacancyType })
  type: VacancyType;
  @ApiProperty()
  start_time: Date;
  @ApiProperty()
  end_time: Date;
  @ApiProperty()
  city: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  salary: number;
  @ApiProperty()
  company_id: string;
  @ApiProperty()
  employee_id: string;
  @ApiProperty()
  is_active: boolean;
  @ApiProperty()
  created_at: Date;
}

export class GetVacancyDto extends GetVacanciesDto {
  @ApiProperty()
  company: GetCompaniesDto;
  @ApiProperty()
  responses: GetVacancyResponsesDto[];
}
