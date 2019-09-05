import React from 'react'
import {
  Block,
  Container,
  FullPageTemplate,
  Grid,
  Heading,
  ListBookmarkedGasStations,
  UserFooter,
  UserMenu,
} from 'components'

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
