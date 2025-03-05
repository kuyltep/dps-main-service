import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { QueryGetStudentsToUniversityDto } from 'src/common/dtos/to-university/student/get.student-to-university.dto';
import { Prisma } from '@prisma/client';
import { CreateStudentToUniversityDto } from 'src/common/dtos/to-university/student/create.student-to-university.dto';
import { QueryDeleteStudentToUniversityDto } from 'src/common/dtos/to-university/student/delete.student-to-university.dto';

@Injectable()
export class StudentsToUniversitiesService {
  constructor(private readonly prismaService: PrismaService) {}

  public async getStudentsToUniversityByQuery(query: QueryGetStudentsToUniversityDto) {
    const findArgs = {
      where: {
        university_id: query.university_id,
      },
      skip: query.page_number * query.page_size,
      take: query.page_size,
    } as Prisma.StudentToUniversityFindManyArgs;

    query.student_id ? (findArgs.where.student_id = query.student_id) : null;

    return await this.prismaService.studentToUniversity.findMany(findArgs);
  }

  public async getStudentToUniversityById(id: string) {
    return await this.prismaService.studentToUniversity.findUnique({
      where: { id },
    });
  }

  public async createStudentToUniversity(createStudentToUniversityDto: CreateStudentToUniversityDto) {
    return await this.prismaService.studentToUniversity.create({
      data: createStudentToUniversityDto,
    });
  }

  public async deleteStudentsToUniversityByQuery(query: QueryDeleteStudentToUniversityDto) {
    const deleteArgs = {
      where: {
        university_id: query.university_id,
      },
    } as Prisma.StudentToUniversityDeleteManyArgs;

    query.student_id ? (deleteArgs.where.student_id = query.student_id) : null;
    return await this.prismaService.studentToUniversity.deleteMany(deleteArgs);
  }

  public async deleteStudentToUniversityById(id: string) {
    return await this.prismaService.studentToUniversity.delete({
      where: { id },
    });
  }
}
