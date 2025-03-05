import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ApiBody, ApiExtraModels, ApiParam, ApiResponse, getSchemaPath } from '@nestjs/swagger';

import { AdminsToCompaniesService } from '../services/admins-to-company.service';
import { QueryDeleteAdminToCompany } from 'src/common/dtos/to-company/admin/delete.admin-to-company.dto';
import { CreateAdminToCompanyDto } from 'src/common/dtos/to-company/admin/create.admin-to-company.dto';
import {
  GetAdminsToCompaniesDto,
  GetAdminToCompanyDto,
  QueryGetAdminsToCompany,
} from 'src/common/dtos/to-company/admin/get.admin-to-company.dto';

@ApiExtraModels(GetAdminsToCompaniesDto, GetAdminToCompanyDto, QueryDeleteAdminToCompany, CreateAdminToCompanyDto)
@Controller('admins-to-companies')
export class AdminsToCompaniesController {
  constructor(private readonly adminsToCompaniesService: AdminsToCompaniesService) {}

  @ApiResponse({
    schema: {
      items: {
        $ref: getSchemaPath(GetAdminsToCompaniesDto),
      },
    },
  })
  @Get()
  public async getAdminsToCompaniesByFilters(@Query() query: QueryGetAdminsToCompany) {
    return await this.adminsToCompaniesService.getAdminsToCompaniesByFilters(query);
  }

  @ApiResponse({
    schema: {
      $ref: getSchemaPath(GetAdminToCompanyDto),
    },
  })
  @ApiParam({ name: 'id', type: String, required: true })
  @Get(':id')
  public async getAdminToCompanyById(@Param('id') id: string) {
    return await this.adminsToCompaniesService.getAdminToCompanyById(id);
  }

  @ApiBody({
    required: true,
    schema: {
      $ref: getSchemaPath(CreateAdminToCompanyDto),
    },
  })
  @ApiResponse({
    schema: {
      $ref: getSchemaPath(GetAdminsToCompaniesDto),
    },
  })
  @Post()
  public async createAdminToCompany(@Body() createAdminToCompanyDto: CreateAdminToCompanyDto) {
    return await this.adminsToCompaniesService.createAdminToCompany(createAdminToCompanyDto);
  }

  @Delete()
  public async deleteAdminToCompanyByQuery(@Query() query: QueryDeleteAdminToCompany) {
    return await this.adminsToCompaniesService.deleteAdminToCompanyByQuery(query);
  }

  @ApiParam({ name: 'id', required: true, type: String })
  @Delete(':id')
  public async deleteAdminToCompanyById(@Param('id') id: string) {
    return await this.adminsToCompaniesService.getAdminToCompanyById(id);
  }
}
