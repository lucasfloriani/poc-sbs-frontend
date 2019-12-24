import React from 'react'
import Container from '@atoms/Container'
import AboutUs from '@organisms/AboutUs'
import GasStationMenu from '@organisms/GasStationMenu'
import GasStationFooter from '@organisms/GasStationFooter'
import FullPageTemplate from '@templates/FullPageTemplate'

const GasStationAboutUs = () => (
  <FullPageTemplate header={<GasStationMenu />} footer={<GasStationFooter />}>
    <Container align="center">
      <AboutUs />
    </Container>
  </FullPageTemplate>
)

export default GasStationAboutUs
