import React from 'react'
import PropTypes from 'prop-types'
import Container from '@atoms/Container'
import UpdatePriceFuelForm from '@molecules/UpdatePriceFuelForm'
import GasStationMenu from '@organisms/GasStationMenu'
import GasStationFooter from '@organisms/GasStationFooter'
import FullPageTemplate from '@templates/FullPageTemplate'

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
