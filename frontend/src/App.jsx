import { useState } from 'react'
import './styles.css'

function App() {
  const [city, setCity] = useState('')

  const handleGetAdvice = () => {
    // TODO: Connect to backend when ready
    console.log('Getting advice for:', city)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleGetAdvice()
    }
  }

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="title">Lazy Weather</h1>
        <p className="subtitle">Weather advice for people who do not want to read numbers</p>
      </header>

      <main className="main-content">
        <div className="search-section">
          <div className="input-wrapper">
            <input
              type="text"
              className="city-input"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="get-advice-btn" onClick={handleGetAdvice}>
              Get Advice
            </button>
          </div>
        </div>

        <div className="results-section">
          <div className="result-card">
            <p className="empty-state">Enter a city to get weather advice</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
