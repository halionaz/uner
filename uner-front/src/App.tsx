import { useState } from 'react'

function App() {
  const [data, setData] = useState([
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
  ])
  const [curWordIndex, setCurWordIndex] = useState(0)
  const curWord = data[curWordIndex]

  const getCheckWordAccuracy = () => {}

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div>{curWord}</div>
      <input />
    </div>
  )
}

export default App
