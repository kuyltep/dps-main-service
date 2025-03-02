import { QueryCompanyDto } from 'src/common/dtos/company/query.company.dto';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';
import { CreateCompanyDto } from 'src/common/dtos/company/create.company.dto';
import { UpdateCompanyDto } from 'src/common/dtos/company/update.company.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CompanyService {
  constructor(private readonly prismaService: PrismaService) {}

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

  public async updateCompanyById(
    id: string,
    updateCompanyDto: UpdateCompanyDto,
  ) {
    return await this.prismaService.company.update({
      where: { id },
      data: updateCompanyDto,
    });
  }
}
