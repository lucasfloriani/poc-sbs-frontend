import React from 'react'
import Container from '@atoms/Container'
import CreatePriceFuelForm from '@molecules/CreatePriceFuelForm'
import GasStationMenu from '@organisms/GasStationMenu'
import GasStationFooter from '@organisms/GasStationFooter'
import FullPageTemplate from '@templates/FullPageTemplate'

const GasStationCreatePriceFuel = () => (
  <FullPageTemplate header={<GasStationMenu />} footer={<GasStationFooter />}>
    <Container align="center">
      <CreatePriceFuelForm />
    </Container>
  </FullPageTemplate>
)

export default GasStationCreatePriceFuel
