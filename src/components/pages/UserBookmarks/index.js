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
  <FullPageTemplate
    header={<UserMenu />}
    footer={<UserFooter />}
    style={{ backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)' }}
  >
    <Container align="center">
      <Grid>
        <Block>
          <Heading
            color={{ type: 'grayscale', position: 4 }}
            hoverColor={{ type: 'grayscale', position: 4 }}
          >
            Meus Favoritos
          </Heading>
        </Block>
        <ListBookmarkedGasStations />
      </Grid>
    </Container>
  </FullPageTemplate>
)

export default UserBookmarks
