import { PostWordRequest } from '@interface/apis/admin'
import { Controller, SubmitHandler, useFieldArray, useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

import * as s from './style.css'

import { useGetImportance } from '@/features/admin/apis/useGetImportance'
import { useGetTopics } from '@/features/admin/apis/useGetTopics'
import { useGetPartOfSpeech } from '@/features/admin/apis/useGetPartOfSpeech'
import { Button, MultiSelect, NumberInput, Select, TextInput } from '@mantine/core'
import { usePostWords } from '@/features/admin/apis/usePostWords'

const PostWordForm = () => {
  const { data: importanceList } = useGetImportance()
  const { data: topicList } = useGetTopics()
  const { data: partOfSpeechList } = useGetPartOfSpeech()
  const { mutate: postWord } = usePostWords()

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    watch,
  } = useForm<PostWordRequest>({
    defaultValues: {
      difficulty: 1,
      definition: [{ definition: '', partOfSpeech: '1' }],
      exampleSentence: [],
      topic: [],
      importance: [],
    },
  })

  const {
    fields: definitions,
    append: addDefinition,
    remove: removeDefinition,
  } = useFieldArray({
    control,
    name: 'definition',
  })
  const {
    fields: exampleSentences,
    append: addExampleSentence,
    remove: removeExampleSentence,
  } = useFieldArray({
    control,
    name: 'exampleSentence',
  })
  const { replace: setTopic } = useFieldArray({
    control,
    name: 'topic',
  })
  const { replace: setImportance } = useFieldArray({
    control,
    name: 'importance',
  })

  const onSubmit: SubmitHandler<PostWordRequest> = input => {
    console.log(input)
    postWord(input)
  }

  return (
    <form action="post-word" onSubmit={handleSubmit(onSubmit)}>
      <Button type="submit">등록</Button>
      <div className={s.InputArea}>
        <div className={s.InputColumn}>
          <div className={s.Section}>
            <TextInput
              label="영어 단어"
              placeholder="english"
              {...register('english', {
                required: '이 필드를 채워주세요',
                pattern: { value: /^[A-Za-z]+$/, message: '영어 알파벳만 입력 가능해요' },
              })}
            />
            <div className={s.ErrorMessageBox}>
              <ErrorMessage
                name="english"
                errors={errors}
                render={({ message }) => {
                  return <p>{message}</p>
                }}
              />
            </div>
          </div>
          <div className={s.Section}>
            <Controller
              name={'difficulty'}
              control={control}
              rules={{
                required: {
                  value: true,
                  message: '이 필드를 채워주세요',
                },
                min: { value: 1, message: '1 이상의 숫자까지 가능해요' },
                max: { value: 10, message: '10 이하의 숫자까지 가능해요' },
              }}
              render={({ field }) => <NumberInput label="난이도" {...field} min={1} />}
            />
            <div className={s.ErrorMessageBox}>
              <ErrorMessage
                name="difficulty"
                errors={errors}
                render={({ message }) => {
                  return <p>{message}</p>
                }}
              />
            </div>
          </div>
          <div className={s.Section}>
            <TextInput label="힌트" type="text" {...register('mnemonic')} />
            <div className={s.ErrorMessageBox}>
              <ErrorMessage
                name="mnemonic"
                errors={errors}
                render={({ message }) => {
                  return <p>{message}</p>
                }}
              />
            </div>
          </div>
          <div className={s.Section}>
            <MultiSelect
              label="키워드"
              data={topicList.map(({ id, name }) => ({ label: name, value: id }))}
              onChange={value => setTopic(value.map(id => ({ id })))}
            />
          </div>
          <div className={s.Section}>
            <MultiSelect
              label="카테고리"
              data={importanceList.map(({ id, name }) => ({ label: name, value: id }))}
              onChange={value => setImportance(value.map(id => ({ id })))}
            />
          </div>
        </div>
        <div className={s.InputColumn}>
          <div className={s.Section}>
            <label className={s.Label}>의미</label>
            {definitions.map((definition, index) => (
              <div key={definition.id} className={s.ArrayFormBlock}>
                <TextInput
                  label="뜻"
                  {...register(`definition.${index}.definition` as const, {
                    required: '빈 필드를 채워주세요',
                  })}
                  defaultValue={definition.definition}
                  placeholder="뜻을 입력하세요"
                />
                <Select
                  label="품사"
                  data={partOfSpeechList.map(({ id, name }) => ({ label: name, value: id }))}
                  value={watch().definition[index].partOfSpeech}
                  onChange={value => {
                    if (value !== null) setValue(`definition.${index}.partOfSpeech`, value)
                  }}
                />
                <div className={s.ErrorMessageBox}>
                  <ErrorMessage
                    name={`definition.${index}.definition`}
                    errors={errors}
                    render={({ message }) => {
                      return <p>{message}</p>
                    }}
                  />
                </div>
                {definitions.length !== 1 && (
                  <Button
                    color="red"
                    onClick={() => {
                      removeDefinition(index)
                    }}
                  >
                    삭제
                  </Button>
                )}
              </div>
            ))}
            <Button
              onClick={() => {
                addDefinition({ definition: '', partOfSpeech: '1' })
              }}
            >
              추가
            </Button>
          </div>
        </div>
        <div className={s.InputColumn}>
          <div className={s.Section}>
            <label className={s.Label}>예문</label>
            {exampleSentences.map((exampleSentence, index) => (
              <div key={exampleSentence.id} className={s.ArrayFormBlock}>
                <TextInput
                  label="예문"
                  {...register(`exampleSentence.${index}.sentence` as const, {
                    required: '예문 필드를 채워주세요',
                  })}
                  defaultValue={exampleSentence.sentence}
                  placeholder="예문을 입력하세요"
                />
                <TextInput
                  label="해석"
                  {...register(`exampleSentence.${index}.translation` as const, {
                    required: '해석 필드를 채워주세요',
                  })}
                  defaultValue={exampleSentence.translation}
                  placeholder="해석을 입력하세요"
                />
                <div className={s.ErrorMessageBox}>
                  <ErrorMessage
                    name={`exampleSentence.${index}.sentence`}
                    errors={errors}
                    render={({ message }) => {
                      return <p>{message}</p>
                    }}
                  />
                  <ErrorMessage
                    name={`exampleSentence.${index}.translation`}
                    errors={errors}
                    render={({ message }) => {
                      return <p>{message}</p>
                    }}
                  />
                </div>
                <Button
                  color="red"
                  onClick={() => {
                    removeExampleSentence(index)
                  }}
                >
                  삭제
                </Button>
              </div>
            ))}
            <Button
              onClick={() => {
                addExampleSentence({ sentence: '', translation: '' })
              }}
            >
              추가
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}
export default PostWordForm
