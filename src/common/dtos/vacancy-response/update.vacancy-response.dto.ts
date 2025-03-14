import { ApiProperty } from '@nestjs/swagger';
import { VacancyResponseStatus } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class UpdateVacancyResponseMessageDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  message: string;
}

export class UpdateVacancyResponseStatusDto {
  @ApiProperty({ required: true, enum: VacancyResponseStatus })
  @IsNotEmpty()
  @IsEnum(VacancyResponseStatus)
  status: VacancyResponseStatus;
}
