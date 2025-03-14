import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { QueryPageDto } from '../query.page.dto';
import { UniversityOrderByEnum } from 'src/common/enums/university.order-by.enum';
import { OrderByTypeEnum } from 'src/common/enums/order-by.type.enum';

export class QueryGetUniversityDto extends QueryPageDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ required: false, enum: UniversityOrderByEnum })
  @IsOptional()
  @IsEnum(UniversityOrderByEnum)
  order_by: UniversityOrderByEnum;

  @ApiProperty({ required: false, enum: OrderByTypeEnum })
  @IsOptional()
  @IsEnum(OrderByTypeEnum)
  order: OrderByTypeEnum;
}
