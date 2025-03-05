import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ApiExtraModels, ApiParam, ApiResponse, getSchemaPath } from '@nestjs/swagger';
import { CreateEmployeeToCompanyDto } from 'src/common/dtos/to-company/employee/create.employee-to-company.dto';
import { QueryDeleteEmployeeToCompany } from 'src/common/dtos/to-company/employee/delete.employee-to-company.dto';
import {
  GetEmployeesToCompaniesDto,
  GetEmployeeToCompanyDto,
  QueryGetEmployeesToCompanyDto,
} from 'src/common/dtos/to-company/employee/get.employee-to-company.dto';
import { EmployeesToCompaniesService } from '../services/employees-to-company.service';

@Controller('employees-to-companies')
@ApiExtraModels(
  GetEmployeeToCompanyDto,
  GetEmployeesToCompaniesDto,
  CreateEmployeeToCompanyDto,
  QueryDeleteEmployeeToCompany,
  QueryGetEmployeesToCompanyDto,
)
export class EmployeesToCompaniesController {
  constructor(private readonly employeesToCompanyService: EmployeesToCompaniesService) {}

  @ApiResponse({
    schema: {
      items: {
        $ref: getSchemaPath(GetEmployeesToCompaniesDto),
      },
    },
  })
  @Get()
  public async getEmployeesToCompanies(@Query() query: QueryGetEmployeesToCompanyDto) {
    return await this.employeesToCompanyService.getEmployeesToCompanies(query);
  }

  @ApiResponse({
    schema: {
      $ref: getSchemaPath(GetEmployeeToCompanyDto),
    },
  })
  @ApiParam({ name: 'id', required: true, type: String })
  @Get(':id')
  public async getEmployeeToCompanyById(@Param('id') id: string) {
    return await this.employeesToCompanyService.getEmployeeToCompanyById(id);
  }

  @ApiResponse({
    schema: {
      $ref: getSchemaPath(GetEmployeesToCompaniesDto),
    },
  })
  @Post()
  public async createEmployeeToCompany(@Body() createEmployeeToCompanyDto: CreateEmployeeToCompanyDto) {
    return await this.employeesToCompanyService.createEmployeeToCompany(createEmployeeToCompanyDto);
  }

  @Delete(':id')
  public async deleteEmployeeToCompanyById(@Param('id') id: string) {
    return await this.employeesToCompanyService.deleteEmployeeToCompanyById(id);
  }

  @Delete()
  public async deleteEmployeeToCompanyByQuery(@Query() query: QueryDeleteEmployeeToCompany) {
    return await this.employeesToCompanyService.deleteEmployeeToCompanyByQuery(query);
  }
}
