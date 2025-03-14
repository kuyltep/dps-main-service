import { ApiProperty } from '@nestjs/swagger';
import { VacancyResponseStatus } from '@prisma/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { QueryPageDto } from '../query.page.dto';
import { VacanciesresponsesOrderByEnum } from 'src/common/enums/vacancies-responses.order-by.enum';
import { OrderByTypeEnum } from 'src/common/enums/order-by.type.enum';

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

  @ApiProperty({ required: false, enum: VacanciesresponsesOrderByEnum })
  @IsOptional()
  @IsEnum(VacanciesresponsesOrderByEnum)
  order_by: VacanciesresponsesOrderByEnum = VacanciesresponsesOrderByEnum.created_at;

  @ApiProperty({ required: false, enum: OrderByTypeEnum })
  @IsOptional()
  @IsEnum(OrderByTypeEnum)
  order: OrderByTypeEnum = OrderByTypeEnum.desc;
}
