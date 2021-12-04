import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateCategorieDto {
  @ApiProperty({
    example: 'nom',
    description: ' name of the categorie',
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  nom: string;
}
