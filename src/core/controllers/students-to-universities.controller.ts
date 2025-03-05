import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ApiExtraModels, ApiParam, ApiResponse, getSchemaPath } from '@nestjs/swagger';
import { CreateStudentToUniversityDto } from 'src/common/dtos/to-university/student/create.student-to-university.dto';
import { QueryDeleteStudentToUniversityDto } from 'src/common/dtos/to-university/student/delete.student-to-university.dto';
import {
  GetStudentsToUniversityDto,
  GetStudentToUniversityDto,
  QueryGetStudentsToUniversityDto,
} from 'src/common/dtos/to-university/student/get.student-to-university.dto';
import { StudentsToUniversitiesService } from '../services/students-to-universitites.service';

@ApiExtraModels(GetStudentToUniversityDto, GetStudentsToUniversityDto)
@Controller('students-to-universities')
export class StudentsToUniversitiesController {
  constructor(private readonly studentsToUniversitiesService: StudentsToUniversitiesService) {}

  @ApiResponse({
    schema: {
      items: {
        $ref: getSchemaPath(GetStudentsToUniversityDto),
      },
    },
  })
  @Get()
  public async getStudentsToUniversityByQuery(@Query() query: QueryGetStudentsToUniversityDto) {
    return await this.studentsToUniversitiesService.getStudentsToUniversityByQuery(query);
  }

  @ApiResponse({
    schema: {
      $ref: getSchemaPath(GetStudentToUniversityDto),
    },
  })
  @ApiParam({ name: 'id', required: true, type: String })
  @Get(':id')
  public async getStudentToUniversityById(@Param('id') id: string) {
    return await this.studentsToUniversitiesService.getStudentToUniversityById(id);
  }

  @ApiResponse({
    schema: {
      $ref: getSchemaPath(GetStudentsToUniversityDto),
    },
  })
  @Post()
  public async createStudentToUniversity(@Body() createStudentToUniversityDto: CreateStudentToUniversityDto) {
    return await this.studentsToUniversitiesService.createStudentToUniversity(createStudentToUniversityDto);
  }

  @Delete()
  public async deleteStudentsToUniversityByQuery(@Query() query: QueryDeleteStudentToUniversityDto) {
    return await this.studentsToUniversitiesService.deleteStudentsToUniversityByQuery(query);
  }

  @ApiParam({ name: 'id', required: true, type: String })
  @Delete(':id')
  public async deleteStudentToUniversityById(@Param('id') id: string) {
    return await this.studentsToUniversitiesService.deleteStudentToUniversityById(id);
  }
}
