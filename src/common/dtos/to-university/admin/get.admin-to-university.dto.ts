import { ApiProperty } from '@nestjs/swagger';
import { GetUniversityDto } from '../../university/get.university.dto';

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
