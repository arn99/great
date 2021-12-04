import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';
export class CreateItemDto {
  @ApiProperty({
    example: 'nom',
    description: ' name of the item',
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  nom: string;
}
