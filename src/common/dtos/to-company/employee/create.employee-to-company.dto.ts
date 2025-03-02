import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEmployeeToCompanyDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  employee_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  company_id: string;
}
