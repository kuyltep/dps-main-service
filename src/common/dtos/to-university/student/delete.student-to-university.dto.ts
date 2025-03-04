import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class QueryDeleteStudentToUniversityDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  university_id: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  student_id?: string;
}
