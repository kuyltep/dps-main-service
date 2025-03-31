import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class SearchVectorsDto {
  @ApiProperty({
    example: 'resumes',
    description: 'Name of the collection to search in',
  })
  @IsString()
  collectionName: string;

  @ApiProperty({
    example: 'We are looking for a backend developer...',
    description: 'Text of the vacancy',
  })
  @IsString()
  text: string;

  @ApiProperty({ example: 10, description: 'Limit of results' })
  @IsNumber()
  limit: number;
}
