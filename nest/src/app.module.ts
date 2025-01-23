import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '@src/app.controller';
import { AppService } from '@src/app.service';
import { EngWordModule } from '@src/res/engWord/engWord.module';
import * as path from 'path';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        retryAttempts: 10,
        type: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        database: process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        entities: [path.join(__dirname, 'entities/**/*.entity.{js, ts}')],
        synchronize: false,
        logging: true,
        timezone: 'local',
      }),
    }),
    EngWordModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
