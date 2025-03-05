import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class UniversitiesService {
  constructor(private readonly prismaService: PrismaService) {}
}
