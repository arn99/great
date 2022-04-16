import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePhotoDto {
  @ApiProperty({ example: 'url' })
  @IsString()
  @IsNotEmpty()
  url: string;
}
