import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  FullPageTemplate,
  GasStationMenu,
  GasStationFooter,
  UpdatePriceFuelForm,
} from 'components'

const GasStationEditPriceFuel = ({ match }) => (
  <FullPageTemplate
    header={<GasStationMenu />}
    footer={<GasStationFooter />}
    style={{ backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)' }}
  >
    <Container align="center">
      <UpdatePriceFuelForm priceFuelID={match.params.priceFuelID} />
    </Container>
  </FullPageTemplate>
)

GasStationEditPriceFuel.propTypes = {
  match: PropTypes.object.isRequired,
}

export default GasStationEditPriceFuel
