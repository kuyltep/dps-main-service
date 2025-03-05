import { QueryCompanyDto } from 'src/common/dtos/company/query.company.dto';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';
import { CreateCompanyDto } from 'src/common/dtos/company/create.company.dto';
import { UpdateCompanyDto } from 'src/common/dtos/company/update.company.dto';
import { Injectable } from '@nestjs/common';
import { AdminsToCompaniesService } from './admins-to-company.service';
import { EmployeesToCompaniesService } from './employees-to-company.service';
import { filterUndefined } from 'src/common/utils/filterUndefined';

@Injectable()
export class CompaniesService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly adminsToCompanyService: AdminsToCompaniesService,
    private readonly employeesToCompanyService: EmployeesToCompaniesService,
  ) {}

  public async getCompaniesByFilters(query: QueryCompanyDto) {
    const companiesArgs = {
      where: {
        name: {
          contains: query.name || '',
          mode: 'insensitive',
        },
      },
      skip: query.page_number * query.page_size,
      take: query.page_size,
    } as Prisma.CompanyFindManyArgs;

    return await this.prismaService.company.findMany(companiesArgs);
  }

  public async createCompany(createCompanyDto: CreateCompanyDto) {
    return await this.prismaService.company.create({
      data: createCompanyDto,
    });
  }

  public async getCompanyById(id: string) {
    const companyArgs = {
      where: { id },
      include: {
        vacancies: true,
      },
    } as Prisma.CompanyFindFirstArgs;
    return await this.prismaService.company.findFirst(companyArgs);
  }

  public async updateCompanyById(id: string, updateCompanyDto: UpdateCompanyDto) {
    const filteredData = filterUndefined(updateCompanyDto);
    return await this.prismaService.company.update({
      where: { id },
      data: filteredData,
    });
  }

  public async deleteCompanyById(id: string) {
    await this.adminsToCompanyService.deleteAdminToCompanyByQuery({
      company_id: id,
    });
    await this.employeesToCompanyService.deleteEmployeeToCompanyByQuery({
      company_id: id,
    });
    return await this.prismaService.company.delete({
      where: {
        id,
      },
    });
  }
}
