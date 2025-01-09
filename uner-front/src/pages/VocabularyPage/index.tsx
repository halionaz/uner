import { useState } from 'react'
import { useGetEnglishWords } from '@/apis/vocabulary'

import WordQuestion from '@/components/Vocabulary/WordQuestion'
import StatusBar from '@/components/Vocabulary/StatusBar'
import Ready from '@/components/Vocabulary/Ready'

const VocabularyPage = () => {
  const [wordCount] = useState(4)

  const { data } = useGetEnglishWords({ wordCount })
  const wordList = data.words

  const [curWordIndex, setCurWordIndex] = useState(0)

  const goToNextWord = () => {
    if (curWordIndex === wordCount) {
      setCurWordIndex(0)
      return
    }
    setCurWordIndex(prev => prev + 1)
  }

  return (
    <div className="h-screen w-screen flex flex-col">
      {curWordIndex === 0 ? (
        <Ready goToNextWord={goToNextWord} />
      ) : (
        <>
          <StatusBar totalCount={wordCount} currentCount={curWordIndex} />
          <WordQuestion curWord={wordList[curWordIndex - 1]} goToNextWord={goToNextWord} />
        </>
      )}
    </div>
  )
}

export default VocabularyPage
