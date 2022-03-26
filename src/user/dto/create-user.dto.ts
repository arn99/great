import { UserRole } from './../entities/user.entity';
import { IsString, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty({ example: 'rams' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    example: 'nom',
    description: ' lastname of the user',
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  nom: string;

  @ApiProperty({
    example: 'prenom',
    description: ' firsname of the user',
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  prenom: string;

  @ApiProperty({ enum: ['admin', 'fournisseur', 'client', 'anonyme'] })
  @IsOptional()
  @IsEnum(UserRole)
  role: UserRole;

  @ApiProperty({
    example: 'paszzord',
    description: 'password of the user',
  })
  @IsNotEmpty()
  password: string;
}
