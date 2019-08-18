import React from 'react'
import {
  Block,
  Container,
  FullPageTemplate,
  Grid,
  Heading,
  ListRatingGasStations,
  UserFooter,
  UserMenu,
} from 'components'

const UserRatings = () => (
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
            Postos Avaliados
          </Heading>
        </Block>
        <ListRatingGasStations />
      </Grid>
    </Container>
  </FullPageTemplate>
)

export default UserRatings
