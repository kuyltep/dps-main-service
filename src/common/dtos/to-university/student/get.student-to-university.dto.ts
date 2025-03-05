import { ApiProperty } from '@nestjs/swagger';
import { GetUniversityDto } from '../../university/get.university.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class GetStudentsToUniversityDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  student_id: string;
  @ApiProperty()
  university_id: string;
}

export class GetStudentToUniversityDto extends GetStudentsToUniversityDto {
  @ApiProperty()
  university: GetUniversityDto;
}

export class QueryGetStudentsToUniversityDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  university_id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  student_id?: string;
}
