import { ApiProperty } from '@nestjs/swagger';
import { GetCompaniesDto } from '../../company/get.company.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class GetEmployeesToCompaniesDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  employee_id: string;
  @ApiProperty()
  company_id: string;
}

export class GetEmployeeToCompanyDto extends GetEmployeesToCompaniesDto {
  @ApiProperty()
  compnay: GetCompaniesDto;
}

export class QueryGetEmployeesToCompanyDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  company_id: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  employee_id: string;
}
