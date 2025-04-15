import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { QueryGetVacanciesRecommendationDto, QueryGetVacancyDto } from 'src/common/dtos/vacancy/query.vacancy.dto';
import { Prisma } from '@prisma/client';
import { CreateVacancyDto } from 'src/common/dtos/vacancy/create.vacancy.dto';
import { UpdateVacancyDto } from 'src/common/dtos/vacancy/update.vacancy.dto';
import { QueryDeleteVacancyDto } from 'src/common/dtos/vacancy/delete.vacancy.dto';
import { QdrantService } from './qdrant.service';
import { ConfigService } from './config.service';
import { QueryGetResumesByVacancyDto } from 'src/common/dtos/qdrant/query.get.resumes.dto';

@Injectable()
export class VacanciesService {
  private vacanciesCollection: string;
  private resumesCollection: string;
  constructor(
    private readonly prismaService: PrismaService,
    private readonly qdrantService: QdrantService,
    private readonly configService: ConfigService,
  ) {
    this.vacanciesCollection = this.configService.getQdrantVacanciesCollection();
    this.resumesCollection = this.configService.getQdrantResumesCollection();
  }

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

  public async getRecommendationVacancies(query: QueryGetVacanciesRecommendationDto) {
    return await this.prismaService.vacancy.findMany({
      where: {
        id: {
          in: query.id,
        },
        is_active: true,
      },
    });
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
    const vacancy = await this.prismaService.vacancy.create({
      data: createVacancyDto,
    });

    await this.qdrantService.processText({
      collectionName: this.vacanciesCollection,
      id: vacancy.id,
      text: `${createVacancyDto.description}`,
    });

    return vacancy;
  }

  public async updateVacancyById(id: string, updateVacacnyDto: UpdateVacancyDto) {
    return await this.prismaService.vacancy.update({
      where: {
        id,
      },
      data: updateVacacnyDto,
    });
  }

  public async getResumesForVacancyById(id: string, query: QueryGetResumesByVacancyDto) {
    const vacancyFromQdrant = await this.qdrantService.getVectorById({ collectionName: this.vacanciesCollection, id });

    const resumes = await this.qdrantService.searchVectors({
      collectionName: this.resumesCollection,
      text: vacancyFromQdrant.payload,
      limit: query.limit,
    });

    return resumes;
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
