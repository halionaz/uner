import { useState } from 'react'
import WordQuestion from '@/components/Vocabulary/WordQuestion'
import { useGetEnglishWords } from '@/apis/vocabulary'

const VocabularyPage = () => {
  const [wordCount, setWordCount] = useState(4)

  const { data } = useGetEnglishWords({ wordCount })
  const wordList = data.words

  const [curWordIndex, setCurWordIndex] = useState(0)

  const goToNextWord = () => {
    setCurWordIndex(prev => prev + 1)
  }

  return <WordQuestion curWord={wordList[curWordIndex]} goToNextWord={goToNextWord} />
}

export default VocabularyPage
