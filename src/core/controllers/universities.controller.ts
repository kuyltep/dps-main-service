import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiExtraModels, ApiParam, ApiResponse, getSchemaPath } from '@nestjs/swagger';
import { CreateUniversityDto } from 'src/common/dtos/university/create.university.dto';
import { GetUniversityDto } from 'src/common/dtos/university/get.university.dto';
import { QueryGetUniversityDto } from 'src/common/dtos/university/query.university.dto';
import { UpdateUniversityDto } from 'src/common/dtos/university/update.university.dto';
import { UniversitiesService } from '../services/universities.service';

@ApiExtraModels(GetUniversityDto)
@Controller('universities')
export class UniversitiesController {
  constructor(private readonly universitiesService: UniversitiesService) {}
  @ApiResponse({
    schema: {
      items: {
        $ref: getSchemaPath(GetUniversityDto),
      },
    },
  })
  @Get()
  public async getUniversitiesByQuery(@Query() query: QueryGetUniversityDto) {
    return await this.universitiesService.getUniversitiesByQuery(query);
  }

  @ApiResponse({
    schema: {
      $ref: getSchemaPath(GetUniversityDto),
    },
  })
  @ApiParam({ name: 'id', required: true, type: String })
  @Get(':id')
  public async getUniversityById(@Param('id') id: string) {
    return await this.universitiesService.getUniversityById(id);
  }

  @ApiResponse({
    schema: {
      $ref: getSchemaPath(GetUniversityDto),
    },
  })
  @Post()
  public async createUniversity(@Body() createUniversityDto: CreateUniversityDto) {
    return await this.universitiesService.createUniversity(createUniversityDto);
  }

  @ApiResponse({
    schema: {
      $ref: getSchemaPath(GetUniversityDto),
    },
  })
  @ApiParam({ name: 'id', required: true, type: String })
  @Patch(':id')
  public async updateUniversityById(@Param('id') id: string, @Body() updateUniversityDto: UpdateUniversityDto) {
    return await this.universitiesService.updateUniversityById(id, updateUniversityDto);
  }

  @ApiParam({ name: 'id', required: true, type: String })
  @Delete(':id')
  public async deleteUniversityById(@Param('id') id: string) {
    return await this.universitiesService.deleteUniversityById(id);
  }
}
