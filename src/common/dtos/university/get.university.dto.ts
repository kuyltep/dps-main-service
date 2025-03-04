import { ApiProperty } from '@nestjs/swagger';

export class GetUniversityDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  created_at: Date;
}
