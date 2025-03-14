import { ApiProperty } from '@nestjs/swagger';
import { VacancyResponseStatus } from '@prisma/client';
import { GetVacanciesDto } from '../vacancy/get.vacancy.dto';

export class GetVacancyResponsesDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  student_id: string;
  @ApiProperty()
  message: string;
  @ApiProperty()
  vacancy_id: string;
  @ApiProperty({ enum: VacancyResponseStatus })
  status: VacancyResponseStatus;
  @ApiProperty()
  created_at: Date;
}

export class GetVacancyResponseDto extends GetVacancyResponsesDto {
  @ApiProperty()
  vacancy: GetVacanciesDto;
}
