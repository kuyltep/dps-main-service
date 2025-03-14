import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { QueryGetVacancyResponsesDto } from 'src/common/dtos/vacancy-response/query.vacancy-response.dto';
import { Prisma } from '@prisma/client';
import { CreateVacancyResponseDto } from 'src/common/dtos/vacancy-response/create.vacancy-response.dto';
import {
  UpdateVacancyResponseMessageDto,
  UpdateVacancyResponseStatusDto,
} from 'src/common/dtos/vacancy-response/update.vacancy-response.dto';
import { QueryDeleteVacanciesResponse } from 'src/common/dtos/vacancy-response/delete.vacancy-response.dto';
import { ExceptionService } from './exception.service';

@Injectable()
export class VacanciesResponsesService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly exceptionService: ExceptionService,
  ) {}

  public async getVacanciesResponsesByQuery({
    order,
    order_by,
    page_number,
    page_size,
    status,
    student_id,
    vacancy_id,
  }: QueryGetVacancyResponsesDto) {
    if (!student_id && !vacancy_id) {
      return this.exceptionService.badRequestException('Invalid query parameters was provided');
    }
    const findArgs = {
      where: {},
      skip: page_number * page_size,
      take: page_size,
      orderBy: { [order_by]: order },
    } as Prisma.VacancyResponseFindManyArgs;

    if (status) {
      findArgs.where.status = status;
    }
    if (student_id) {
      findArgs.where.student_id = student_id;
    }
    if (vacancy_id) {
      findArgs.where.vacancy_id = vacancy_id;
    }

    return await this.prismaService.vacancyResponse.findMany(findArgs);
  }

  public async getVacancyResponseById(id: string) {
    const findArgs = {
      where: {
        id,
      },
      include: {
        vacancy: true,
      },
    } as Prisma.VacancyResponseFindUniqueArgs;

    return await this.prismaService.vacancyResponse.findUnique(findArgs);
  }

  public async createVacancyResponse(createVacancyResponseDto: CreateVacancyResponseDto) {
    return await this.prismaService.vacancyResponse.create({
      data: createVacancyResponseDto,
    });
  }

  public async updateVacancyResponseMessage(
    id: string,
    updateVacancyResponseMessageDto: UpdateVacancyResponseMessageDto,
  ) {
    return await this.prismaService.vacancyResponse.update({
      where: {
        id,
      },
      data: updateVacancyResponseMessageDto,
    });
  }

  public async updateVacancyResponseStatus(id: string, updatevacancyResponseStatusDto: UpdateVacancyResponseStatusDto) {
    return await this.prismaService.vacancyResponse.update({
      where: {
        id,
      },
      data: updatevacancyResponseStatusDto,
    });
  }

  public async deleteVacancyResponseById(id: string) {
    return await this.prismaService.vacancyResponse.delete({
      where: { id },
    });
  }

  public async deleteVacancyResponseByQuery({ student_id, vacancy_id }: QueryDeleteVacanciesResponse) {
    if (!student_id && !vacancy_id) {
      return this.exceptionService.badRequestException('Invalid query parameters was provideed');
    }
    const deleteArgs = { where: {} } as Prisma.VacancyResponseDeleteManyArgs;

    if (student_id) {
      deleteArgs.where.student_id = student_id;
    }
    if (vacancy_id) {
      deleteArgs.where.vacancy_id = vacancy_id;
    }
    return await this.prismaService.vacancyResponse.deleteMany(deleteArgs);
  }
}
