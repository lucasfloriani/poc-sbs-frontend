import React from 'react'
import {
  Container,
  CreatePriceFuelForm,
  FullPageTemplate,
  GasStationMenu,
  GasStationFooter,
} from 'components'

const GasStationCreatePriceFuel = () => (
  <FullPageTemplate
    header={<GasStationMenu />}
    footer={<GasStationFooter />}
    style={{ backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)' }}
  >
    <Container align="center">
      <CreatePriceFuelForm />
    </Container>
  </FullPageTemplate>
)

export default GasStationCreatePriceFuel
