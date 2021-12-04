import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ActualiteService } from './actualite.service';
import { CreateActualiteDto } from './dto/create-actualite.dto';
import { UpdateActualiteDto } from './dto/update-actualite.dto';

@Controller('actualite')
export class ActualiteController {
  constructor(private readonly actualiteService: ActualiteService) {}

  @Post()
  create(@Body() createActualiteDto: CreateActualiteDto) {
    return this.actualiteService.create(createActualiteDto);
  }

  @Get()
  findAll() {
    return this.actualiteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actualiteService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateActualiteDto: UpdateActualiteDto,
  ) {
    return this.actualiteService.update(id, updateActualiteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.actualiteService.remove(id);
  }
}
