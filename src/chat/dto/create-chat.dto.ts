import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';
export class CreateChatDto {
  @ApiProperty({
    example: 'description',
    description: 'description',
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description: string;
}
