import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateEmployeeToCompanyDto } from 'src/common/dtos/to-company/employee/create.employee-to-company.dto';
import { QueryGetEmployeesToCompanyDto } from 'src/common/dtos/to-company/employee/get.employee-to-company.dto';
import { Prisma } from '@prisma/client';
import { QueryDeleteEmployeeToCompany } from 'src/common/dtos/to-company/employee/delete.employee-to-company.dto';

@Injectable()
export class EmployeesToCompaniesService {
  constructor(private readonly prismaService: PrismaService) {}

  public async getEmployeesToCompanies(query: QueryGetEmployeesToCompanyDto) {
    const employeeArgs = {
      where: {
        company_id: query.company_id,
      },
      skip: query.page_number * query.page_size,
      take: query.page_size,
    } as Prisma.EmployeeToCompanyFindManyArgs;

    query.employee_id
      ? (employeeArgs.where.employee_id = query.employee_id)
      : null;
    return await this.prismaService.employeeToCompany.findMany(employeeArgs);
  }

  public async getEmployeeToCompanyById(id: string) {
    return await this.prismaService.employeeToCompany.findUnique({
      where: { id },
      include: {
        company: true,
      },
    });
  }

  public async createEmployeeToCompany(
    createEmployeeToCompanyDto: CreateEmployeeToCompanyDto,
  ) {
    return await this.prismaService.employeeToCompany.create({
      data: createEmployeeToCompanyDto,
    });
  }

  public async deleteEmployeeToCompanyById(id: string) {
    return await this.prismaService.employeeToCompany.delete({
      where: {
        id,
      },
    });
  }

  public async deleteEmployeeToCompanyByQuery(
    query: QueryDeleteEmployeeToCompany,
  ) {
    const deleteArgs = {
      where: {
        company_id: query.company_id,
        employee_id: query.employee_id || '',
      },
    } as Prisma.EmployeeToCompanyDeleteManyArgs;

    return await this.prismaService.employeeToCompany.deleteMany(deleteArgs);
  }
}
