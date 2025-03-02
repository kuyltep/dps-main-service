import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

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
