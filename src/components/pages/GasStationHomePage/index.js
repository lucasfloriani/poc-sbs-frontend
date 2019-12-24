import React from 'react'
import Container from '@atoms/Container'
import GasStationMenu from '@organisms/GasStationMenu'
import GasStationFooter from '@organisms/GasStationFooter'
import ListPriceFuels from '@organisms/ListPriceFuels'
import FullPageTemplate from '@templates/FullPageTemplate'

const GasStationHomePage = () => (
  <FullPageTemplate header={<GasStationMenu />} footer={<GasStationFooter />}>
    <Container align="center">
      <ListPriceFuels />
    </Container>
  </FullPageTemplate>
)

export default GasStationHomePage
