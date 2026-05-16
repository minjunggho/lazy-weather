import { useState } from 'react'
import SearchBar from './components/SearchBar'
import AdviceCard from './components/AdviceCard'
import './styles.css'

const fakeAdvice = {
  main_advice: "Today is a little colder than yesterday. A light jacket is a good idea.",
  outfit: "Light jacket",
  difference_c: -2
};

function App() {
  const [advice, setAdvice] = useState(null)

  const handleSearch = (city) => {
    console.log('Searching for:', city)
    // TODO: Connect to backend when ready
    // For now, show fake advice
    setAdvice(fakeAdvice)
  }

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="title">Lazy Weather</h1>
        <p className="subtitle">Weather advice for people who do not want to read numbers</p>
      </header>

      <main className="main-content">
        <SearchBar onSearch={handleSearch} />
        <div className="results-section">
          <AdviceCard advice={advice} />
        </div>
      </main>
    </div>
  )
}

export default App
