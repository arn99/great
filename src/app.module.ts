import { FilesController } from './files/files.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { ItemModule } from './item/item.module';
import { ActualiteModule } from './actualite/actualite.module';
import { CategorieModule } from './categorie/categorie.module';
import { ChatModule } from './chat/chat.module';
import { PhotoModule } from './photo/photo.module';
import { PanierModule } from './panier/panier.module';
import { JwtModule } from '@nestjs/jwt';
import { MulterModule } from '@nestjs/platform-express';
@Module({
  imports: [
    MulterModule.register({
      dest: './files',
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      //entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      /* migrationsTableName: 'migrations',
      migrations: ['migration/*.js'],
      cli: {
        migrationsDir: 'migration',
      }, */
    }),

    /* PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }), */
    UserModule,
    ItemModule,
    ActualiteModule,
    CategorieModule,
    ChatModule,
    PhotoModule,
    PanierModule,
  ],
  controllers: [AppController, FilesController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
