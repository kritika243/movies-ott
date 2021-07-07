import React from 'react'

import MoviesLogo from '../../images/react-movie-logo.svg'

import TMDBLogo from '../../images/tmdb_logo.svg'

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles'

function Header() {
  return (
    <Wrapper>
      <Content>
        <LogoImg src={MoviesLogo} alt='logo-image' />
        <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo-image' />
      </Content>
    </Wrapper>
  )
}

export default Header
