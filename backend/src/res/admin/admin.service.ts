import { ImportanceType, PartOfSpeechType, TopicType } from '@interface/types/word';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EngWordEntity } from '@src/entities/eng_word.entity';
import { ImportanceEntity } from '@src/entities/importance.entity';
import { PartOfSpeechEntity } from '@src/entities/part_of_speech.entity';
import { TopicEntity } from '@src/entities/topic.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(EngWordEntity)
    private readonly engWordRepository: Repository<EngWordEntity>,

    @InjectRepository(ImportanceEntity)
    private readonly importanceRepository: Repository<ImportanceEntity>,

    @InjectRepository(TopicEntity)
    private readonly topicRepository: Repository<TopicEntity>,

    @InjectRepository(PartOfSpeechEntity)
    private readonly partOfSpeechRepository: Repository<PartOfSpeechEntity>,
  ) {}

  getImportance = async () => {
    const importance = await this.importanceRepository.find();
    return importance;
  };

  getTopics = async () => {
    const topics = await this.topicRepository.find();
    return topics;
  };

  getPartOfSpeech = async () => {
    const partOfSpeech = await this.partOfSpeechRepository.find();
    return partOfSpeech;
  };

  getWords = async () => {
    const words = await this.engWordRepository.find();
    return words;
  };

  postImportance = async (name: ImportanceType) => {
    const isExist = await this.importanceRepository.findOne({
      where: {
        name,
      },
    });

    if (isExist) throw new BadRequestException('이미 존재하는 중요도 태그입니다.');

    const importance = await this.importanceRepository.save({
      name,
    });
    return importance;
  };

  postTopic = async (name: TopicType) => {
    const isExist = await this.topicRepository.findOne({
      where: {
        name,
      },
    });

    if (isExist) throw new BadRequestException('이미 존재하는 토픽!');

    const topic = await this.topicRepository.save({
      name,
    });
    return topic;
  };

  postPartOfSpeech = async (name: PartOfSpeechType) => {
    const isExist = await this.partOfSpeechRepository.findOne({
      where: {
        name,
      },
    });

    if (isExist) throw new BadRequestException('이미 존재하는 품사!');

    const partOfSpeech = await this.partOfSpeechRepository.save({
      name,
    });
    return partOfSpeech;
  };

  postWords = async (english: string, mnemonic: string, difficulty: number) => {
    const existWord = await this.engWordRepository.findOne({
      where: {
        english,
      },
    });

    if (existWord) throw new BadRequestException('이미 존재하는 단어!');

    const word = await this.engWordRepository.save({
      english,
      mnemonic,
      difficulty,
    });
    return word;
  };
}
