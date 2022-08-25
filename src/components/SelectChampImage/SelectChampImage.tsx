import * as React from 'react'
import './SelectedChampImage.css'

const SelectedChampImage = ({
  src,
  name,
  index,
  handleRemoveChamp,
}: {
  src: string
  name: string
  index: number
  handleRemoveChamp: any
}) => {
  return (
    <img
      src={src}
      alt={'image of' + name}
      className='selected-character-image'
      onMouseEnter={() => {
        console.log('enter')
      }}
      onMouseLeave={() => {
        console.log('exit')
      }}
      onClick={() => {
        handleRemoveChamp(index)
      }}
    />
  )
}

export default SelectedChampImage
