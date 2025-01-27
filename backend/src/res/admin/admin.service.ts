import { PostWordRequest } from '@interface/apis/admin';
import {
  ImportanceType,
  isImportanceType,
  isPartOfSpeechType,
  isTopicType,
  PartOfSpeechType,
  TopicType,
} from '@interface/types/word';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EngDefinitionEntity } from '@src/entities/eng_definition.entity';
import { EngExampleSentenceEntity } from '@src/entities/eng_example_sentence.entity';
import { EngRelationEntity } from '@src/entities/eng_relation.entity';
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

    @InjectRepository(EngDefinitionEntity)
    private readonly engDefinitionRepository: Repository<EngDefinitionEntity>,

    @InjectRepository(EngExampleSentenceEntity)
    private readonly engExampleSentenceRepository: Repository<EngExampleSentenceEntity>,
  ) {}

  getImportance = async () => {
    const importance = await this.importanceRepository.find();
    return importance.map(({ id, name }) => ({ id, name }));
  };

  getTopics = async () => {
    const topics = await this.topicRepository.find();
    return topics.map(({ id, name }) => ({ id, name }));
  };

  getPartOfSpeech = async () => {
    const partOfSpeech = await this.partOfSpeechRepository.find();
    return partOfSpeech.map(({ id, name }) => ({ id, name }));
  };

  getWords = async () => {
    const words = await this.engWordRepository.find();
    return words;
  };

  postImportance = async (name: string) => {
    if (!isImportanceType(name)) throw new BadRequestException('입력이 중요도 태그가 아니에요');

    const isExist = await this.importanceRepository.findOne({
      where: {
        name,
      },
    });

    if (isExist) throw new BadRequestException('이미 존재하는 중요도 태그에요');

    const importance = await this.importanceRepository.save({
      name,
    });
    return importance;
  };

  postTopic = async (name: string) => {
    if (!isTopicType(name)) throw new BadRequestException('입력이 topic 태그가 아니에요');
    const isExist = await this.topicRepository.findOne({
      where: {
        name,
      },
    });

    if (isExist) throw new BadRequestException('이미 존재하는 토픽이에요');

    const topic = await this.topicRepository.save({
      name,
    });
    return topic;
  };

  postPartOfSpeech = async (name: string) => {
    if (!isPartOfSpeechType(name)) throw new BadRequestException('입력이 올바른 품사가 아니에요');

    const isExist = await this.partOfSpeechRepository.findOne({
      where: {
        name,
      },
    });

    if (isExist) throw new BadRequestException('이미 존재하는 품사에요');

    const partOfSpeech = await this.partOfSpeechRepository.save({
      name,
    });
    return partOfSpeech;
  };

  //   const word = await this.engWordRepository.save({
  //     english,
  //     mnemonic,
  //     difficulty,
  //   });

  //   // Save all definitions
  //   await Promise.all(
  //     definition.map(async ({ definition, partOfSpeech }) => {
  //       return this.engDefinitionRepository.save({
  //         word: word.id,
  //         definition,
  //         partOfSpeech,
  //       });
  //     }),
  //   );

  //   return request;
  // };
  postWords = async (request: PostWordRequest) => {
    const { english, mnemonic, difficulty, definition, exampleSentence, importance, topic } = request;

    // Check if word already exists
    const existWord = await this.engWordRepository.findOne({
      where: { english },
    });

    if (existWord) throw new BadRequestException('이미 존재하는 단어에요');

    const word = await this.engWordRepository.save({
      english,
      mnemonic,
      difficulty,
      importance: importance.map((imp) => ({ id: imp.id })),
      topic: topic.map((t) => ({ id: t.id })),
    });

    await Promise.all(
      definition.map(async ({ definition, partOfSpeech }) => {
        return this.engDefinitionRepository.save({
          definition,
          word: { id: word.id },
          partOfSpeech: { id: partOfSpeech },
        });
      }),
    );

    if (exampleSentence?.length) {
      await Promise.all(
        exampleSentence.map(async ({ sentence, translation }) => {
          return this.engExampleSentenceRepository.save({
            sentence,
            translation,
            word: { id: word.id },
          });
        }),
      );
    }

    return word;
  };
}
