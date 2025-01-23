import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EngWordEntity } from "@src/entities/eng_word.entity";
import { AdminController } from "./admin.controller";
import { AdminService } from "./admin.service";

@Module({
    imports: [TypeOrmModule.forFeature([EngWordEntity])],
    controllers: [AdminController],
    providers: [AdminService]
})
export class AdminModule { }