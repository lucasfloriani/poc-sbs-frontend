import React from 'react'
import {
  Container,
  FullPageTemplate,
  GasStationMenu,
  GasStationFooter,
} from 'components'

const GasStationHomePage = () => (
  <FullPageTemplate
    header={<GasStationMenu />}
    footer={<GasStationFooter />}
    style={{ backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)' }}
  >
    <Container align="center" windowHeight>
      Homepage do gas station
    </Container>
  </FullPageTemplate>
)

export default GasStationHomePage
