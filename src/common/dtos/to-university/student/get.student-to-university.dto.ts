import { ApiProperty } from '@nestjs/swagger';
import { GetUniversityDto } from '../../university/get.university.dto';

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
