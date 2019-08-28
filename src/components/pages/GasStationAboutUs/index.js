import React from 'react'
import {
  AboutUs,
  Container,
  FullPageTemplate,
  GasStationMenu,
  GasStationFooter,
} from 'components'

const GasStationAboutUs = () => (
  <FullPageTemplate
    header={<GasStationMenu />}
    footer={<GasStationFooter />}
    style={{ backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)' }}
  >
    <Container align="center">
      <AboutUs />
    </Container>
  </FullPageTemplate>
)

export default GasStationAboutUs
