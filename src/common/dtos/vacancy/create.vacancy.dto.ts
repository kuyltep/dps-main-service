import { ApiProperty } from '@nestjs/swagger';
import { VacancyType } from '@prisma/client';
import { IsBoolean, IsDateString, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateVacancyDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  questions: string;

  @ApiProperty({ enum: VacancyType })
  @IsNotEmpty()
  @IsEnum(VacancyType)
  type: VacancyType;

  @ApiProperty()
  @IsOptional()
  @IsDateString()
  start_time?: Date;

  @ApiProperty()
  @IsOptional()
  @IsDateString()
  end_time?: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  salary?: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  company_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  employee_id: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  is_active?: boolean;
}
