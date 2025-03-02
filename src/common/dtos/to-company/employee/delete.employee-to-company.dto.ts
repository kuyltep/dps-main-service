import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class QueryDeleteEmployeeToCompany {
  @ApiProperty({ required: false })
  @IsNotEmpty()
  @IsString()
  employee_id?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  company_id: string;
}
