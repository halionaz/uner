import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EngWordEntity } from "@src/entities/eng_word.entity";
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(EngWordEntity)
        private readonly engWordRepository: Repository<EngWordEntity>,
    ) { }

    getWord = async () => {
        const words = await this.engWordRepository.find();
        console.log(words)
        return words
    }

    postWord = async (english: string, mnemonic: string, difficulty: number) => {
        const existWord = await this.engWordRepository.findOne({
            where: {
                english,
            },
        });

        if (existWord) throw new BadRequestException('이미 존재하는 단어!')

        const word = await this.engWordRepository.save({
            english, mnemonic, difficulty
        });
        return word
    }
}