import React from 'react'
import PropTypes from 'prop-types'
import Container from '@atoms/Container'
import UpdateGasStationForm from '@molecules/UpdateGasStationForm'
import AdminFooter from '@organisms/AdminFooter'
import AdminMenu from '@organisms/AdminMenu'
import FullPageTemplate from '@templates/FullPageTemplate'

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
