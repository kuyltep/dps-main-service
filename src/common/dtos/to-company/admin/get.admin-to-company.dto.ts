import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { QueryPageDto } from '../../query.page.dto';
import { GetCompaniesDto } from '../../company/get.company.dto';

export class GetAdminsToCompaniesDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  user_id: string;
  @ApiProperty()
  company_id: string;
}

export class GetAdminToCompanyDto extends GetAdminsToCompaniesDto {
  @ApiProperty()
  company: GetCompaniesDto;
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
