import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { GetCompaniesDto } from '../company/get.company.dto';
import { QueryPageDto } from '../query.page.dto';

export class GetAdminsToCompaniesDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  user_id: string;
  @ApiProperty()
  company_id: string;
}

export class CreateAdminToCompanyDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  user_id: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  company_id: string;
}

export class GetAdminToCompanyDto extends GetAdminsToCompaniesDto {
  @ApiProperty()
  company: GetCompaniesDto;
}

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

export class QueryGetAdminsToCompany extends QueryPageDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  company_id: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  user_id?: string;
}
