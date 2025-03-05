import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiExtraModels, ApiParam, ApiResponse, getSchemaPath } from '@nestjs/swagger';
import { CreateCompanyDto } from 'src/common/dtos/company/create.company.dto';
import { GetCompaniesDto, GetCompanyByIdDto } from 'src/common/dtos/company/get.company.dto';
import { QueryCompanyDto } from 'src/common/dtos/company/query.company.dto';
import { UpdateCompanyDto } from 'src/common/dtos/company/update.company.dto';
import { CompaniesService } from '../services/companies.service';

@ApiExtraModels(CreateCompanyDto, UpdateCompanyDto, GetCompaniesDto, GetCompanyByIdDto)
@Controller('companies')
export class CompaniesController {
  constructor(private readonly companyService: CompaniesService) {}

  @ApiResponse({
    schema: {
      items: {
        $ref: getSchemaPath(GetCompaniesDto),
      },
    },
  })
  @Get('')
  public async getCompaniesByFilters(@Query() query: QueryCompanyDto) {
    return await this.companyService.getCompaniesByFilters(query);
  }

  @ApiResponse({
    schema: {
      $ref: getSchemaPath(GetCompaniesDto),
    },
  })
  @Post()
  public async createCompany(@Body() createCompanyDto: CreateCompanyDto) {
    return await this.companyService.createCompany(createCompanyDto);
  }

  @ApiResponse({
    schema: {
      $ref: getSchemaPath(GetCompanyByIdDto),
    },
  })
  @ApiParam({ name: 'id', required: true, type: String })
  @ApiResponse({
    schema: {
      $ref: getSchemaPath(GetCompanyByIdDto),
    },
  })
  @Get(':id')
  public async getCompanyById(@Param('id') id: string) {
    return await this.companyService.getCompanyById(id);
  }

  @ApiResponse({
    schema: {
      $ref: getSchemaPath(GetCompaniesDto),
    },
  })
  @Patch(':id')
  public async updateCompanyById(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return await this.companyService.updateCompanyById(id, updateCompanyDto);
  }

  @ApiParam({ name: 'id', required: true, type: String })
  @Delete(':id')
  public async deleteCompanyById(@Param('id') id: string) {
    return await this.companyService.deleteCompanyById(id);
  }
}
