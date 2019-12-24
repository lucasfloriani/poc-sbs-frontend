import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as GasStationActions } from '@store/ducks/gasStation'
import Container from '@atoms/Container'
import Grid from '@atoms/Grid'
import ScreenLoader from '@molecules/ScreenLoader'
import AdminFooter from '@organisms/AdminFooter'
import AdminMenu from '@organisms/AdminMenu'
import FilterGasStation from '@organisms/FilterGasStation'
import ListGasStations from '@organisms/ListGasStations'
import FullPageTemplate from '@templates/FullPageTemplate'

const AdminListGasStations = ({ adminGasStationsRequest, isFetching }) => {
  useEffect(() => {
    const filterValues = {
      name: '',
      state: '',
      city: '',
      orderType: '',
      paymentType: '',
      fuelType: '',
      minPrice: '',
      maxPrice: '',
      rating: 0,
    }
    adminGasStationsRequest(filterValues)
  }, [adminGasStationsRequest])
  if (isFetching) return <ScreenLoader />

  return (
    <FullPageTemplate header={<AdminMenu />} footer={<AdminFooter />}>
      <Container align="center">
        <Grid>
          <FilterGasStation onSubmit={filterPayload => adminGasStationsRequest(filterPayload)} />
          <ListGasStations actions={['edit']} />
        </Grid>
      </Container>
    </FullPageTemplate>
  )
}

AdminListGasStations.propTypes = {
  adminGasStationsRequest: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ gasStation: { isFetching } }) => ({ isFetching })
const mapDispatchToProps = dispatch => bindActionCreators(GasStationActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AdminListGasStations)
