import React from 'react'
import { Link } from 'react-router-dom'

import MoviesLogo from '../../images/react-movie-logo.svg'

import TMDBLogo from '../../images/tmdb_logo.svg'

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles'

function Header() {
  return (
    <Wrapper>
      <Content>
        <Link to='/'>
          <LogoImg src={MoviesLogo} alt='logo-image' />
        </Link>

        <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo-image' />
      </Content>
    </Wrapper>
  )
}

export default Header
