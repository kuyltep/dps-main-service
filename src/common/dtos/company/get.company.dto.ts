import { ApiProperty } from '@nestjs/swagger';

export class GetCompaniesDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  logo_url: string;
  @ApiProperty()
  created_at: Date;
  @ApiProperty()
  updated_at: Date;
}

export class GetCompanyByIdDto extends GetCompaniesDto {
  // @ApiProperty({ isArray: true })
  // admins: GetAdminsToCompaniesDto[];
  // @ApiProperty({ isArray: true })
  // employers: GetEmployeesToCompaniesDto[];
  @ApiProperty({ isArray: true })
  vacancies: [];
}
