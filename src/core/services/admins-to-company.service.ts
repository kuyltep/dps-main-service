import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { QueryGetAdminsToCompany } from 'src/common/dtos/to-company/get.admin-to-company.dto';
import { Prisma } from '@prisma/client';
import { CreateAdminToCompanyDto } from 'src/common/dtos/to-company/admin/create.admin-to-company.dto';
import { QueryDeleteAdminToCompany } from 'src/common/dtos/to-company/admin/delete.admin-to-company.dto';

@Injectable()
export class AdminsToCompaniesService {
  constructor(private readonly prismaService: PrismaService) {}

  public async getAdminsToCompaniesByFilters(query: QueryGetAdminsToCompany) {
    const adminsToCompaniesArgs = {
      where: {
        company_id: query.company_id,
      },
      skip: query.page_number * query.page_size,
      take: query.page_size,
    } as Prisma.AdminToCompanyFindManyArgs;
    query.user_id
      ? (adminsToCompaniesArgs.where.user_id = query.user_id)
      : null;
    return await this.prismaService.adminToCompany.findMany(
      adminsToCompaniesArgs,
    );
  }

  public async getAdminToCompanyById(id: string) {
    return await this.prismaService.adminToCompany.findUnique({
      where: {
        id,
      },
      include: { company: true },
    });
  }

  public async createAdminToCompany(
    createAdminToCompanyDto: CreateAdminToCompanyDto,
  ) {
    return await this.prismaService.adminToCompany.create({
      data: createAdminToCompanyDto,
    });
  }

  public async deleteAdminToCompanyByQuery(query: QueryDeleteAdminToCompany) {
    const deleteArgs = {
      where: {
        company_id: query.company_id,
        user_id: query.user_id || '',
      },
    } as Prisma.AdminToCompanyDeleteManyArgs;

    return await this.prismaService.adminToCompany.deleteMany(deleteArgs);
  }

  public async deleteAdminToCompanyById(id: string) {
    return await this.prismaService.adminToCompany.delete({
      where: {
        id,
      },
    });
  }
}
