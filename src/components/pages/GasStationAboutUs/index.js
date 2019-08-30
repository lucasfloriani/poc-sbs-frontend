import React from 'react'
import {
  AboutUs,
  Container,
  FullPageTemplate,
  GasStationMenu,
  GasStationFooter,
} from 'components'

const GasStationAboutUs = () => (
  <FullPageTemplate header={<GasStationMenu />} footer={<GasStationFooter />}>
    <Container align="center">
      <AboutUs />
    </Container>
  </FullPageTemplate>
)

export default GasStationAboutUs
