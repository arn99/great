import { PartialType } from '@nestjs/swagger';
import { CreateActualiteDto } from './create-actualite.dto';

export class UpdateActualiteDto extends PartialType(CreateActualiteDto) {}
