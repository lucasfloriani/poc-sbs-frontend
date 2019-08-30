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
  <FullPageTemplate header={<GasStationMenu />} footer={<GasStationFooter />}>
    <Container align="center">
      <UpdatePriceFuelForm priceFuelID={match.params.priceFuelID} />
    </Container>
  </FullPageTemplate>
)

GasStationEditPriceFuel.propTypes = {
  match: PropTypes.object.isRequired,
}

export default GasStationEditPriceFuel
