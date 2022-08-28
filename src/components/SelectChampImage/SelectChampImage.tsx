import React, { useState } from 'react'
import './SelectChampImage.css'

const SelectedChampImage = ({
  src,
  name,
  index,
  handleRemoveChamp,
}: {
  src: string
  name: string
  index: number
  handleRemoveChamp: (index: number) => void
}) => {
  const [showRemove, setShowRemove] = useState(false)
  const handleMouseEnter = () => {
    setShowRemove(true)
  }

  const handleMouseExit = () => {
    setShowRemove(false)
  }

  return (
    <div
      className='selected-champ-container'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
      onClick={() => {
        handleRemoveChamp(index)
      }}
    >
      <img src={src} alt={'image of' + name} className='selected-character-image' />
      <div className={'remove-champ' + (showRemove ? '' : ' ' + 'invisible')}>
        <div className='remove-champ-text'>Remove</div>
      </div>
    </div>
  )
}

export default SelectedChampImage
