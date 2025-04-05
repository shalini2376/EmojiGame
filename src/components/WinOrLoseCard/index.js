import './index.css'
import {Component} from 'react'

class WinOrLoseCard extends Component {
  render() {
    const {isWon, score, totalScore, restartGame} = this.props
    const imageUrl = isWon
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

    const resultText = isWon ? 'You Won' : 'You Lose'
    const scoreLabel = isWon ? 'Best Score' : 'Score'
    return (
      <>
        <nav className="win-or-lose-navbar">
          <div className="win-or-lose-nav-logo-img">
            <img
              className="navbar-logo-img"
              alt="emoji logo"
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            />
            <p>Emoji Game</p>
          </div>
        </nav>
        <div className="whole-container">
          <div className={isWon ? 'winning-card' : 'losing-card'}>
            <div className="winning-card-score-container">
              <h1 className="result-heading">{resultText}</h1>
              <div className="score-div">
                <p className="scorelabel">{scoreLabel}</p>
                <p className="scores-para">
                  {score}/{totalScore}
                </p>
                <button
                  type="button"
                  className="play-again-btn"
                  onClick={() => restartGame()}
                >
                  Play Again
                </button>
              </div>
            </div>
            <div className="winning-card-img-container">
              <img className="winning-img" src={imageUrl} alt="win or lose" />
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default WinOrLoseCard
