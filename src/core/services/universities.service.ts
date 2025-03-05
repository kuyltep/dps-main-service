import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { StudentsToUniversitiesService } from './students-to-universitites.service';
import { AdminsToUniversitiesService } from './admins-to-universities.service';
import { QueryGetUniversityDto } from 'src/common/dtos/university/query.university.dto';
import { Prisma } from '@prisma/client';
import { CreateUniversityDto } from 'src/common/dtos/university/create.university.dto';
import { UpdateUniversityDto } from 'src/common/dtos/university/update.university.dto';
import { filterUndefined } from 'src/common/utils/filterUndefined';

@Injectable()
export class UniversitiesService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly studentsToUniversitiesService: StudentsToUniversitiesService,
    private readonly adminsToUniversitiesService: AdminsToUniversitiesService,
  ) {}

  public async getUniversitiesByQuery(query: QueryGetUniversityDto) {
    const findArgs = {
      where: {},
      skip: query.page_size * query.page_number,
      take: query.page_size,
    } as Prisma.UniversityFindManyArgs;

    query.name ? (findArgs.where.name = { contains: query.name, mode: 'insensitive' }) : null;

    return await this.prismaService.university.findMany(findArgs);
  }

  public async getUniversityById(id: string) {
    return await this.prismaService.university.findUnique({
      where: { id },
    });
  }

  public async createUniversity(createUniversityDto: CreateUniversityDto) {
    return await this.prismaService.university.create({
      data: createUniversityDto,
    });
  }

  public async updateUniversityById(id: string, updateUniversityDto: UpdateUniversityDto) {
    const filteredData = filterUndefined(updateUniversityDto);
    return await this.prismaService.university.update({
      where: {
        id,
      },
      data: filteredData,
    });
  }

  public async deleteUniversityById(id: string) {
    await this.adminsToUniversitiesService.deleteAdminToUniversityByQuery({ university_id: id });
    await this.studentsToUniversitiesService.deleteStudentsToUniversityByQuery({ university_id: id });
    return await this.prismaService.university.delete({
      where: { id },
    });
  }
}
