import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { GetCompaniesDto } from '../company/get.company.dto';

export class GetEmployeesToCompaniesDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  employee_id: string;
  @ApiProperty()
  company_id: string;
}

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

export class GetEmployeeToCompanyDto extends GetEmployeesToCompaniesDto {
  @ApiProperty()
  compnay: GetCompaniesDto;
}

export class QueryDeleteEmployeeToCompany {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  employee_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  company_id: string;
}
