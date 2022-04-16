import { PhotoService } from './../photo/photo.service';
/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { Photo } from 'src/photo/entities/photo.entity';
import { editFileName, imageFileFilter } from 'src/utils/file-uploading.utils';

@Controller('files')
@ApiTags('files')
export class FilesController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  

}
