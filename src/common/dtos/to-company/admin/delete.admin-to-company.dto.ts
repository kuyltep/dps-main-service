import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class QueryDeleteAdminToCompany {
  @ApiProperty()
  @IsOptional()
  @IsString()
  user_id?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  company_id: string;
}
