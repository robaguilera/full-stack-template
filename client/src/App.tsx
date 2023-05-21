import { useEffect, useState } from 'react'

const getGreeting = async function () {
  const res = await fetch('/api/v1')
  return await res.json()
}

function App() {
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    getGreeting().then((res) => setGreeting(res.greeting))
  })

  return (
    <div className='app' data-theme='dark'>
      <h1>Hello World</h1>
      <h2>And server says: {greeting}</h2>
    </div>
  )
}

export default App
