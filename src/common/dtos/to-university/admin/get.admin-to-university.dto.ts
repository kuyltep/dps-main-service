import { ApiProperty } from '@nestjs/swagger';
import { GetUniversityDto } from '../../university/get.university.dto';
import { QueryPageDto } from '../../query.page.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class GetAdminsToUniversityDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  university_id: string;
  @ApiProperty()
  user_id: string;
}

export class GetAdminToUniversityDto extends GetAdminsToUniversityDto {
  @ApiProperty()
  university: GetUniversityDto;
}

export class QueryGetAdminsToUniversityDto extends QueryPageDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  university_id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  user_id?: string;
}
