import React from 'react'
import {
  Container,
  FullPageTemplate,
  GasStationMenu,
  GasStationFooter,
  ListPriceFuels,
} from 'components'

const GasStationHomePage = () => (
  <FullPageTemplate header={<GasStationMenu />} footer={<GasStationFooter />}>
    <Container align="center">
      <ListPriceFuels />
    </Container>
  </FullPageTemplate>
)

export default GasStationHomePage
