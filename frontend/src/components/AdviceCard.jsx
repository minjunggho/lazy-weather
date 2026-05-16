import '../styles/AdviceCard.css'

function AdviceCard({ advice }) {
  if (!advice) {
    return (
      <div className="advice-card empty">
        <p className="empty-state">Enter a city to get weather advice</p>
      </div>
    )
  }

  return (
    <div className="advice-card">
      <div className="advice-header">
        <h2 className="advice-title">Today's Advice</h2>
        <div className="temperature-diff">
          <span className={advice.difference_c < 0 ? 'colder' : 'warmer'}>
            {advice.difference_c > 0 ? '+' : ''}{advice.difference_c}°C
          </span>
          <span className="diff-label">vs yesterday</span>
        </div>
      </div>

      <div className="advice-content">
        <div className="main-advice">
          <p className="advice-text">{advice.main_advice}</p>
        </div>

        <div className="outfit-suggestion">
          <h3 className="outfit-label">Suggested Outfit:</h3>
          <p className="outfit-text">{advice.outfit}</p>
        </div>
      </div>
    </div>
  )
}

export default AdviceCard
