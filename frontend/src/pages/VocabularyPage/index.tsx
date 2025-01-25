import { useState } from 'react'
import { useGetEnglishWords } from '@/features/vocabulary/apis/useGetEnglishWords'

import WordQuestion from '@/features/vocabulary/components/WordQuestion'
import StatusBar from '@/features/vocabulary/components/StatusBar'
import Ready from '@/features/vocabulary/components/Ready'

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
    <div className="flex h-screen w-screen flex-col">
      {curWordIndex === 0 ? (
        <Ready goToNextWord={goToNextWord} wordCount={wordCount} />
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
