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
  <FullPageTemplate
    header={<AdminMenu />}
    footer={<AdminFooter />}
    style={{ backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)' }}
  >
    <Container align="center">
      <UpdateGasStationForm gasStationID={match.params.gasStationID} />
    </Container>
  </FullPageTemplate>
)

AdminEditGasStations.propTypes = {
  match: PropTypes.any,
}

export default AdminEditGasStations
