import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';
import { QueryPageDto } from '../query.page.dto';
import { VacancyOrderByEnum } from 'src/common/enums/vacancy.order-by.enum';
import { OrderByTypeEnum } from 'src/common/enums/order-by.type.enum';

export class QueryGetVacancyDto extends QueryPageDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  company_id?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  employee_id?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  is_active?: boolean;

  @ApiProperty({ required: false, enum: VacancyOrderByEnum })
  @IsOptional()
  @IsEnum(VacancyOrderByEnum)
  order_by: VacancyOrderByEnum = VacancyOrderByEnum.name;

  @ApiProperty({ required: false, enum: OrderByTypeEnum })
  @IsOptional()
  @IsEnum(OrderByTypeEnum)
  order: OrderByTypeEnum = OrderByTypeEnum.asc;
}
