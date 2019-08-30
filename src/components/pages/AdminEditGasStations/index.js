import React from 'react'
import PropTypes from 'prop-types'
import {
  AdminFooter,
  AdminMenu,
  Container,
  FullPageTemplate,
  UpdateGasStationForm,
} from 'components'

const AdminEditGasStations = ({ match }) => (
  <FullPageTemplate header={<AdminMenu />} footer={<AdminFooter />}>
    <Container align="center">
      <UpdateGasStationForm gasStationID={match.params.gasStationID} />
    </Container>
  </FullPageTemplate>
)

AdminEditGasStations.propTypes = {
  match: PropTypes.any,
}

export default AdminEditGasStations
