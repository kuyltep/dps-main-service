import { ApiProperty } from '@nestjs/swagger';
import { QueryPageDto } from '../query.page.dto';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { CompanyOrderByEnum } from 'src/common/enums/company.order-by.enum';
import { OrderByTypeEnum } from 'src/common/enums/order-by.type.enum';

export class QueryCompanyDto extends QueryPageDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ required: false, enum: CompanyOrderByEnum })
  @IsOptional()
  @IsEnum(CompanyOrderByEnum)
  order_by: CompanyOrderByEnum = CompanyOrderByEnum.name;

  @ApiProperty({ required: false, enum: OrderByTypeEnum })
  @IsOptional()
  @IsEnum(OrderByTypeEnum)
  order: OrderByTypeEnum = OrderByTypeEnum.asc;
}
