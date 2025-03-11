import { ApiProperty } from '@nestjs/swagger';
import { VacancyType } from '@prisma/client';
import { IsBoolean, IsDateString, IsEnum, IsOptional, IsNumber, IsString } from 'class-validator';

export class UpdateVacancyDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  questions?: string;

  @ApiProperty({ enum: VacancyType })
  @IsOptional()
  @IsEnum(VacancyType)
  type?: VacancyType;

  @ApiProperty()
  @IsOptional()
  @IsDateString()
  start_time?: Date;

  @ApiProperty()
  @IsOptional()
  @IsDateString()
  end_time?: Date;

  @ApiProperty()
  @IsOptional()
  @IsString()
  city?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  salary?: number;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  is_active?: boolean;
}
