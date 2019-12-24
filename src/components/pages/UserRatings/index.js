import React from 'react'
import Block from '@atoms/Block'
import Container from '@atoms/Container'
import Grid from '@atoms/Grid'
import Heading from '@atoms/Heading'
import ListRatingGasStations from '@organisms/ListRatingGasStations'
import UserFooter from '@organisms/UserFooter'
import UserMenu from '@organisms/UserMenu'
import FullPageTemplate from '@templates/FullPageTemplate'

const UserRatings = () => (
  <FullPageTemplate header={<UserMenu />} footer={<UserFooter />}>
    <Container align="center">
      <Grid>
        <Block>
          <Heading color={{ type: 'grayscale', position: 4 }} hoverColor={{ type: 'grayscale', position: 4 }}>
            Postos Avaliados
          </Heading>
        </Block>
        <ListRatingGasStations />
      </Grid>
    </Container>
  </FullPageTemplate>
)

export default UserRatings
