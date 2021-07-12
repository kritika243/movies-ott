import React from 'react'

import { Wrapper, Image, Imgae } from './Actor.styles'

const Actor = ({ name, character, imageUrl }) => (
  <Wrapper>
    <Imgae src={imageUrl} alt='actor-thumbnail' />
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
)

export default Actor
