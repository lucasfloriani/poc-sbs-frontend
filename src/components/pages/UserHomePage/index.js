import React from 'react'
import {
  Container,
  FullPageTemplate,
  FilterGasStation,
  Grid,
  ListGasStations,
  UserFooter,
  UserMenu,
} from 'components'

const UserHomePage = () => (
  <FullPageTemplate
    header={<UserMenu />}
    footer={<UserFooter />}
    style={{ backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)' }}
  >
    <Container align="center">
      <Grid>
        <FilterGasStation />
        <ListGasStations />
      </Grid>
    </Container>
  </FullPageTemplate>
)

export default UserHomePage
