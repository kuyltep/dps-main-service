import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { QueryGetAdminsToUniversityDto } from 'src/common/dtos/to-university/admin/get.admin-to-university.dto';
import { Prisma } from '@prisma/client';
import { CreateAdminToUniversityDto } from 'src/common/dtos/to-university/admin/create.admin-to-universtiy.dto';
import { QueryDeleteAdminToUniversity } from 'src/common/dtos/to-university/admin/delete.admin-to-university.dto';

@Injectable()
export class AdminsToUniversitiesService {
  constructor(private readonly prismaService: PrismaService) {}

  public async getAdminsToUniversities(query: QueryGetAdminsToUniversityDto) {
    const findArgs = {
      where: {
        university_id: query.university_id,
      },
      skip: query.page_number * query.page_size,
      take: query.page_size,
    } as Prisma.AdminToUniversityFindManyArgs;

    query.user_id ? (findArgs.where.user_id = query.user_id) : null;

    return await this.prismaService.adminToUniversity.findMany(findArgs);
  }

  public async getAdminToUniversityById(id: string) {
    const findArgs = {
      where: {
        id,
      },
      include: {
        university: true,
      },
    } as Prisma.AdminToUniversityFindUniqueArgs;

    return await this.prismaService.adminToUniversity.findUnique(findArgs);
  }

  public async createAdminToUniversity(
    createAdminToUniversityDto: CreateAdminToUniversityDto,
  ) {
    return await this.prismaService.adminToUniversity.create({
      data: createAdminToUniversityDto,
    });
  }

  public async deleteAdminToUniversityByQuery(
    query: QueryDeleteAdminToUniversity,
  ) {
    const deleteArgs = {
      where: {
        university_id: query.university_id,
      },
    } as Prisma.AdminToUniversityDeleteManyArgs;
    query.user_id ? (deleteArgs.where.user_id = query.user_id) : null;

    return await this.prismaService.adminToUniversity.deleteMany(deleteArgs);
  }

  public async deleteAdminToUniversityById(id: string) {
    return await this.prismaService.adminToUniversity.delete({
      where: { id },
    });
  }
}
