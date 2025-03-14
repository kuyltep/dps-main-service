import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateVacancyResponseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  student_id: string;

  @ApiProperty()
  @IsString()
  @IsString()
  message?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  vacancy_id: string;
}
