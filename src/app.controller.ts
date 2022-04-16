import { Photo } from 'src/photo/entities/photo.entity';
import {
  Controller,
  Get,
  Param,
  Post,
  Request,
  Res,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiBody } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { AppService } from './app.service';
import { editFileName, imageFileFilter } from './utils/file-uploading.utils';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
