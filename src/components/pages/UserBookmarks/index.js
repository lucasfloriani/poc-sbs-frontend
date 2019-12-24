import React from 'react'
import Block from '@atoms/Block'
import Container from '@atoms/Container'
import Grid from '@atoms/Grid'
import Heading from '@atoms/Heading'
import ListBookmarkedGasStations from '@organisms/ListBookmarkedGasStations'
import UserFooter from '@organisms/UserFooter'
import UserMenu from '@organisms/UserMenu'
import FullPageTemplate from '@templates/FullPageTemplate'

const UserBookmarks = () => (
  <FullPageTemplate header={<UserMenu />} footer={<UserFooter />}>
    <Container align="center">
      <Grid>
        <Block>
          <Heading color={{ type: 'grayscale', position: 4 }} hoverColor={{ type: 'grayscale', position: 4 }}>
            Meus Favoritos
          </Heading>
        </Block>
        <ListBookmarkedGasStations />
      </Grid>
    </Container>
  </FullPageTemplate>
)

export default UserBookmarks
