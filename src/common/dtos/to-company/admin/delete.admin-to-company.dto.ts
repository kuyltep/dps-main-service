import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class QueryDeleteAdminToCompany {
  @ApiProperty()
  @IsOptional()
  @IsString()
  employee_id?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  company_id: string;
}
