import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { QueryGetVacancyDto } from 'src/common/dtos/vacancy/query.vacancy.dto';
import { Prisma } from '@prisma/client';
import { CreateVacancyDto } from 'src/common/dtos/vacancy/create.vacancy.dto';
import { UpdateVacancyDto } from 'src/common/dtos/vacancy/update.vacancy.dto';
import { QueryDeleteVacancyDto } from 'src/common/dtos/vacancy/delete.vacancy.dto';

@Injectable()
export class VacanciesService {
  constructor(private readonly prismaService: PrismaService) {}

  public async getVacanciesByQuery({
    order,
    order_by,
    page_number,
    page_size,
    city,
    company_id,
    employee_id,
    is_active,
    name,
  }: QueryGetVacancyDto) {
    const findArgs = {
      where: {},
      take: page_size,
      skip: page_number * page_size,
      orderBy: { [order_by]: order },
    } as Prisma.VacancyFindManyArgs;

    if (city) {
      findArgs.where.city = { contains: city, mode: 'insensitive' };
    }
    if (company_id) {
      findArgs.where.company_id = company_id;
    }
    if (employee_id) {
      findArgs.where.employee_id = employee_id;
    }
    if (name) {
      findArgs.where.name = { contains: name, mode: 'insensitive' };
    }
    if (is_active) {
      findArgs.where.is_active = is_active;
    }

    return await this.prismaService.vacancy.findMany(findArgs);
  }

  public async getVacancyById(id: string) {
    const findArgs = {
      where: {
        id,
      },
      include: { company: true },
    } as Prisma.VacancyFindUniqueArgs;

    return await this.prismaService.vacancy.findUnique(findArgs);
  }

  public async createVacancy(createVacancyDto: CreateVacancyDto) {
    return await this.prismaService.vacancy.create({
      data: createVacancyDto,
    });
  }

  public async updateVacancyById(id: string, updateVacacnyDto: UpdateVacancyDto) {
    return await this.prismaService.vacancy.update({
      where: {
        id,
      },
      data: updateVacacnyDto,
    });
  }

  public async deleteVacancyById(id: string) {
    return await this.prismaService.vacancy.delete({
      where: { id },
    });
  }

  public async deleteVacanciesByQuery({ company_id, employee_id }: QueryDeleteVacancyDto) {
    const deleteArgs = {
      where: {
        company_id,
        employee_id,
      },
    } as Prisma.VacancyDeleteManyArgs;

    return await this.prismaService.vacancy.deleteMany(deleteArgs);
  }
}
