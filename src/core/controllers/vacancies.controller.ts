import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiExtraModels, ApiParam, ApiResponse, getSchemaPath } from '@nestjs/swagger';
import { CreateVacancyDto } from 'src/common/dtos/vacancy/create.vacancy.dto';
import { QueryDeleteVacancyDto } from 'src/common/dtos/vacancy/delete.vacancy.dto';
import { GetVacanciesDto, GetVacancyDto } from 'src/common/dtos/vacancy/get.vacancy.dto';
import { QueryGetVacancyDto } from 'src/common/dtos/vacancy/query.vacancy.dto';
import { UpdateVacancyDto } from 'src/common/dtos/vacancy/update.vacancy.dto';
import { VacanciesService } from '../services/vacancies.service';

@Controller('vacancies')
@ApiExtraModels(GetVacanciesDto, GetVacancyDto, UpdateVacancyDto)
export class VacanciesController {
  constructor(private readonly vacanciesService: VacanciesService) {}
  @ApiResponse({
    schema: {
      items: {
        $ref: getSchemaPath(GetVacanciesDto),
      },
    },
  })
  @Get()
  public async getVacanciesByQuery(@Query() query: QueryGetVacancyDto) {
    return await this.vacanciesService.getVacanciesByQuery(query);
  }

  @ApiResponse({
    schema: {
      $ref: getSchemaPath(GetVacancyDto),
    },
  })
  @ApiParam({ name: 'id', type: String, required: true })
  @Get(':id')
  public async getVacancyById(@Param('id') id: string) {
    return await this.vacanciesService.getVacancyById(id);
  }

  @ApiResponse({
    schema: {
      $ref: getSchemaPath(GetVacanciesDto),
    },
  })
  @Post()
  public async createVacancy(@Body() createVacancyDto: CreateVacancyDto) {
    return await this.vacanciesService.createVacancy(createVacancyDto);
  }

  @ApiResponse({
    schema: {
      $ref: getSchemaPath(GetVacanciesDto),
    },
  })
  @ApiParam({ name: 'id', type: String, required: true })
  @Patch(':id')
  public async updateVacacnyById(@Param('id') id: string, @Body() updateVacancyDto: UpdateVacancyDto) {
    return await this.vacanciesService.updateVacancyById(id, updateVacancyDto);
  }

  @ApiParam({ name: 'id', type: String, required: true })
  @Delete(':id')
  public async deleteVacancyByid(@Param('id') id: string) {
    return await this.vacanciesService.deleteVacancyById(id);
  }

  @Delete('')
  public async deleteVacanciesByQuery(@Query() query: QueryDeleteVacancyDto) {
    return await this.vacanciesService.deleteVacanciesByQuery(query);
  }
}
