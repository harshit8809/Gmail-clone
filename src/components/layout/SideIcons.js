import React from 'react'
import styled from 'styled-components'

import AddIcon from '@material-ui/icons/Add';

const SideIcons = () => {
  return (
    <Wrapper>
<img src="https://download.logo.wine/logo/Google_Calendar/Google_Calendar-Logo.wine.png"/>
          <img src="https://e1.pngegg.com/pngimages/755/1015/png-clipart-macos-app-icons-google-keep.png"/>
          <img src="https://play-lh.googleusercontent.com/pjUulZ-Vdo7qPKxk3IRhnk8SORPlgSydSyYEjm7fGcoXO8wDyYisWXwQqEjMryZ_sqK2"/>
          <img src="https://pngset.com/images/google-contacts-icon-facebook-messenger-round-icon-number-symbol-text-moon-transparent-png-1147654.png"/>
          <hr />
          <AddIcon />
    </Wrapper>
  )
}

export default SideIcons

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 50px) 1px 50px;
    place-items: center;
    border-left: 1px solid lightgray;

    img {
      width: 100%;
      max-height: 22px;
      object-fit: contain;
    }
    
    hr {
      width: 60%;
    }
`