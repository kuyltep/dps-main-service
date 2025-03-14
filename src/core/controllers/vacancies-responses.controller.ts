import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { VacanciesResponsesService } from '../services/vacancies-responses.service';
import { ApiExtraModels, ApiParam, ApiResponse, getSchemaPath } from '@nestjs/swagger';
import {
  GetVacancyResponseDto,
  GetVacancyResponsesDto,
} from 'src/common/dtos/vacancy-response/get.vacancy-response.dto';
import { CreateVacancyResponseDto } from 'src/common/dtos/vacancy-response/create.vacancy-response.dto';
import {
  UpdateVacancyResponseMessageDto,
  UpdateVacancyResponseStatusDto,
} from 'src/common/dtos/vacancy-response/update.vacancy-response.dto';
import { QueryGetVacancyResponsesDto } from 'src/common/dtos/vacancy-response/query.vacancy-response.dto';
import { QueryDeleteVacanciesResponse } from 'src/common/dtos/vacancy-response/delete.vacancy-response.dto';

@Controller('vacancies-responses')
@ApiExtraModels(
  GetVacancyResponseDto,
  GetVacancyResponsesDto,
  CreateVacancyResponseDto,
  UpdateVacancyResponseMessageDto,
  UpdateVacancyResponseStatusDto,
)
export class VacanciesResponsesController {
  constructor(private readonly vacanciesResponsesService: VacanciesResponsesService) {}

  @ApiResponse({
    schema: {
      items: {
        $ref: getSchemaPath(GetVacancyResponsesDto),
      },
    },
  })
  @Get()
  public async getVacanciesResponsesByQuery(@Query() query: QueryGetVacancyResponsesDto) {}

  @ApiResponse({
    schema: {
      $ref: getSchemaPath(GetVacancyResponseDto),
    },
  })
  @Get(':id')
  public async getVacancyResponseById(@Param('id') id: string) {}

  @Post()
  public async createVacancyResponse(@Body() createVacancyResponseDto: CreateVacancyResponseDto) {}

  @ApiResponse({
    schema: {
      $ref: getSchemaPath(GetVacancyResponsesDto),
    },
  })
  @ApiParam({ name: 'id', type: String, required: true })
  @Patch(':id/message')
  public async updateVacancyResponseMessage(
    @Param('id') id: string,
    @Body() updateVacancyResponseMessageDto: UpdateVacancyResponseMessageDto,
  ) {}

  @ApiResponse({
    schema: {
      $ref: getSchemaPath(GetVacancyResponsesDto),
    },
  })
  @ApiParam({ name: 'id', type: String, required: true })
  @Patch(':id/status')
  public async updateVacancyResponseStatus(
    @Param('id') id: string,
    @Body() updatevacancyResponseStatusDto: UpdateVacancyResponseStatusDto,
  ) {}

  @ApiParam({ name: 'id', type: String, required: true })
  @Delete(':id')
  public async deleteVacancyResponseById(@Param('id') id: string) {}

  @Delete()
  public async deleteVacancyResponseByQuery(@Query() query: QueryDeleteVacanciesResponse) {}
}
