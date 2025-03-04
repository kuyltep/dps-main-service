import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class QueryDeleteAdminToUniversity {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  university_id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  user_id?: string;
}
