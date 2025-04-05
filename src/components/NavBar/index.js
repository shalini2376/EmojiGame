import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {score, topScore} = this.props
    return (
      <nav className="navbar">
        <div className="navbar-div">
          <div className="logo-img-and-tag-line-container">
            <img
              className="navbar-logo-img"
              alt="emoji logo"
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            />
            <h1 className="game-logo-heading">Emoji Game</h1>
          </div>
          <div className="navbar-score-container">
            <p className="score-para">Score: {score}</p>
            <p className="top-score-para">Top Score: {topScore}</p>
          </div>
        </div>
      </nav>
    )
  }
}
export default NavBar
