import { useState } from 'react'
import { useGetEnglishWords } from '@/apis/vocabulary'

import WordQuestion from '@/components/Vocabulary/WordQuestion'
import StatusBar from '@/components/Vocabulary/StatusBar'

const VocabularyPage = () => {
  const [wordCount, setWordCount] = useState(4)

  const { data } = useGetEnglishWords({ wordCount })
  const wordList = data.words

  const [curWordIndex, setCurWordIndex] = useState(0)

  const goToNextWord = () => {
    setCurWordIndex(prev => prev + 1)
  }

  return (
    <div className="h-screen w-screen flex flex-col">
      <StatusBar totalCount={wordCount} currentCount={curWordIndex} />
      <WordQuestion curWord={wordList[curWordIndex]} goToNextWord={goToNextWord} />
    </div>
  )
}

export default VocabularyPage
