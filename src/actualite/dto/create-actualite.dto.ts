import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';
export class CreateActualiteDto {
  @ApiProperty({
    example: 'nom',
    description: ' name of the actualite',
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  nom: string;
}
