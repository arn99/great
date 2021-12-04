import { PartialType } from '@nestjs/swagger';
import { CreatePanierDto } from './create-panier.dto';

export class UpdatePanierDto extends PartialType(CreatePanierDto) {}
