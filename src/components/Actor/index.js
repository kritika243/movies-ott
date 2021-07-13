import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Imgae } from './Actor.styles'

const Actor = ({ name, character, imageUrl }) => (
  <Wrapper>
    <Imgae src={imageUrl} alt='actor-thumbnail' />
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
)

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,
}

export default Actor
