import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ApiExtraModels, ApiParam, ApiResponse, getSchemaPath } from '@nestjs/swagger';
import { CreateAdminToUniversityDto } from 'src/common/dtos/to-university/admin/create.admin-to-universtiy.dto';
import { QueryDeleteAdminToUniversity } from 'src/common/dtos/to-university/admin/delete.admin-to-university.dto';
import {
  GetAdminsToUniversityDto,
  GetAdminToUniversityDto,
  QueryGetAdminsToUniversityDto,
} from 'src/common/dtos/to-university/admin/get.admin-to-university.dto';
import { AdminsToUniversitiesService } from '../services/admins-to-universities.service';

@ApiExtraModels(GetAdminToUniversityDto, GetAdminsToUniversityDto)
@Controller('admins-to-universities')
export class AdminsToUniversitiesController {
  constructor(private readonly adminsToUniversitiesService: AdminsToUniversitiesService) {}
  @ApiResponse({
    schema: {
      items: {
        $ref: getSchemaPath(GetAdminsToUniversityDto),
      },
    },
  })
  @Get()
  public async getAdminsToUniversities(@Query() query: QueryGetAdminsToUniversityDto) {
    return await this.adminsToUniversitiesService.getAdminsToUniversities(query);
  }

  @ApiResponse({
    schema: {
      $ref: getSchemaPath(GetAdminToUniversityDto),
    },
  })
  @ApiParam({ name: 'id', required: true, type: String })
  @Get(':id')
  public async getAdminToUniversityById(@Param('id') id: string) {
    return await this.adminsToUniversitiesService.getAdminToUniversityById(id);
  }

  @ApiResponse({
    schema: {
      $ref: getSchemaPath(GetAdminToUniversityDto),
    },
  })
  @Post()
  public async createAdminToUniversity(@Body() createAdminToUniversityDto: CreateAdminToUniversityDto) {
    return await this.adminsToUniversitiesService.createAdminToUniversity(createAdminToUniversityDto);
  }

  @Delete('')
  public async deleteAdminToUniversityByQuery(@Query() query: QueryDeleteAdminToUniversity) {
    return await this.adminsToUniversitiesService.deleteAdminToUniversityByQuery(query);
  }

  @ApiParam({ name: 'id', required: true, type: String })
  @Delete(':id')
  public async deleteAdminToUniversityById(@Param('id') id: string) {
    return await this.adminsToUniversitiesService.deleteAdminToUniversityById(id);
  }
}
