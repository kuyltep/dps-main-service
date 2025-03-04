import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUniversityToStudentDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  student_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  university_id: string;
}
