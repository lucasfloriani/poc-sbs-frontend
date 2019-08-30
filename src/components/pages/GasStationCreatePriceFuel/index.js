import React from 'react'
import {
  Container,
  CreatePriceFuelForm,
  FullPageTemplate,
  GasStationMenu,
  GasStationFooter,
} from 'components'

const GasStationCreatePriceFuel = () => (
  <FullPageTemplate header={<GasStationMenu />} footer={<GasStationFooter />}>
    <Container align="center">
      <CreatePriceFuelForm />
    </Container>
  </FullPageTemplate>
)

export default GasStationCreatePriceFuel
