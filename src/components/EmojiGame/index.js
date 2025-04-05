import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedEmojiIdsList: [],
    isGameOver: false,
    shuffledEmojisList: [],
  }

  componentDidMount() {
    const {emojisList} = this.props
    this.setState({shuffledEmojisList: this.shuffleEmojis(emojisList)})
  }

  shuffleEmojis = list => [...list].sort(() => Math.random() - 0.5)

  handleEmojiClicks = id => {
    const {clickedEmojiIdsList, score, topScore} = this.state
    const {emojisList} = this.props

    if (clickedEmojiIdsList.includes(id)) {
      const updatedTopScore = score > topScore ? score : topScore
      this.setState({
        isGameOver: true,
        topScore: updatedTopScore,
        clickedEmojiIdsList: [],
      })
    } else {
      const updatedClickedEmojiId = [...clickedEmojiIdsList, id]
      const newScore = score + 1
      if (updatedClickedEmojiId.length === emojisList.length) {
        this.setState({
          score: newScore,
          topScore: emojisList.length,
          clickedEmojiIdsList: [],
          isGameOver: true,
        })
      } else {
        this.setState({
          score: newScore,
          clickedEmojiIdsList: updatedClickedEmojiId,
          shuffledEmojisList: this.shuffleEmojis(emojisList),
        })
      }
    }
  }

  restartGame = () => {
    const {emojisList} = this.props
    this.setState({
      score: 0,
      isGameOver: false,
      clickedEmojiIdsList: [],
      shuffledEmojisList: this.shuffleEmojis(emojisList),
    })
  }

  render() {
    const {emojisList} = this.props
    const {score, topScore, isGameOver, shuffledEmojisList} = this.state
    return (
      <div className="emoji-game-bg-container">
        {isGameOver ? '' : <NavBar score={score} topScore={topScore} />}

        {isGameOver ? (
          <WinOrLoseCard
            isWon={score === emojisList.length}
            score={score}
            totalScore={emojisList.length}
            restartGame={this.restartGame}
          />
        ) : (
          ''
        )}
        <div className="emojiCard-list-div">
          <ul className="emojiCard-list-container">
            {isGameOver
              ? ''
              : shuffledEmojisList.map(eachEmojiObj => (
                  <EmojiCard
                    key={eachEmojiObj.id}
                    emojiDetails={eachEmojiObj}
                    emojiClicked={this.handleEmojiClicks}
                  />
                ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default EmojiGame
