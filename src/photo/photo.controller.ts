import { Item } from 'src/item/entities/item.entity';
import { CreateItemDto } from './../item/dto/create-item.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  UploadedFiles,
  UseInterceptors,
  Request,
} from '@nestjs/common';
import { PhotoService } from './photo.service';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiBody } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from 'src/utils/file-uploading.utils';
import { Photo } from './entities/photo.entity';
import { ItemService } from 'src/item/item.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('photo')
export class PhotoController {
  constructor(
    private readonly photoService: PhotoService,
    private readonly itemService: ItemService,
  ) {}

  @Post()
  create(@Body() createPhotoDto: CreatePhotoDto) {
    return this.photoService.create(createPhotoDto);
  }

  @Get()
  findAll() {
    return this.photoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.photoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhotoDto: UpdatePhotoDto) {
    return this.photoService.update(id, updatePhotoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.photoService.remove(id);
  }
  @Post('upload')
  //@UseInterceptors(FileInterceptor('file')) // 👈 field name must match
  @UseInterceptors(
    FilesInterceptor('files', 20, {
      storage: diskStorage({
        destination: './files',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          // 👈 this property
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async uploadFile(@UploadedFiles() files, @Request() req) {
    console.log(req.body);
    const response = [];
    const createItemDto = new CreateItemDto();
    createItemDto.nom = req.body.nom;
    const item = this.itemService.create(createItemDto);
    files.forEach((file) => {
      const fileReponse = {
        originalname: file.originalname,
        filename: file.filename,
      };
      const createPhotoDto = new CreatePhotoDto();
      item.then(async (item) => {
        createPhotoDto.url = fileReponse.filename;
        const photo = await this.photoService.create(createPhotoDto);
        photo.item = item;
        console.log(item);
        /* if (item.photos) {
          item.photos.push(photo);
        } else {
          item.photos = [];
          item.photos.push(photo);
        } */
        this.photoService.create(photo);
        //this.itemService.create(item);
      });
      response.push(fileReponse);
    });

    const result = await Item.find({
      where: { id: (await item).id },
      relations: ['photos'],
    });
    return this.itemService.findOne((await item).id);
  }

  @Get('path/:imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './files' });
  }
}
