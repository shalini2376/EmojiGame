import './index.css'

const EmojiCard = props => {
  // eslint-disable-next-line
  const {emojiDetails, emojiClicked} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const onClickImojiBtn = () => {
    emojiClicked(id)
  }

  return (
    <li className="emoji-card-list-items">
      <button type="button" className="emoji-btn" onClick={onClickImojiBtn}>
        <img className="emoji-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
