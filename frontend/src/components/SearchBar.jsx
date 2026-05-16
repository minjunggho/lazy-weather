import { useState } from 'react'
import '../styles/SearchBar.css'

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('')

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city)
      setCity('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="search-bar">
      <div className="input-wrapper">
        <input
          type="text"
          className="city-input"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="get-advice-btn" onClick={handleSearch}>
          Get Advice
        </button>
      </div>
    </div>
  )
}

export default SearchBar
