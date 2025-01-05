import { useState } from 'react'
import { getCheckWordAccuracy } from '@/hook'

function App() {
  const data = [
    'ephemeral',
    'obfuscate',
    'ubiquitous',
    'esoteric',
    'obstreperous', // 오답: 완고한
    'lugubrious',
    'sycophant',
    'pusillanimous',
    'intransigent',
    'ineffable',
  ]
  const [curWordIndex, setCurWordIndex] = useState(0)
  const curWord = data[curWordIndex]

  const [input, setInput] = useState('')
  const [canGoNext, setCanGoNext] = useState(false)
  const [response, setResponse] = useState('')

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (input !== '') {
      getCheckWordAccuracy({ givenWord: curWord, userPrompt: input }).then(({ is_answer, description }) => {
        if (is_answer) setCanGoNext(true)
        setResponse(description)
      })
    }
  }

  const goNext = () => {
    setInput('')
    setCurWordIndex(prev => prev + 1)
    setCanGoNext(false)
    setResponse('')
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div>{curWord}</div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={event => setInput(event.target.value)} />
        <button type="submit">제출</button>
      </form>
      {canGoNext && <button onClick={goNext}>다음 문제</button>}
      {response !== '' && <div>{response}</div>}
    </div>
  )
}

export default App
