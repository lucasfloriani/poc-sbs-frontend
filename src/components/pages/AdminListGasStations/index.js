import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as GasStationActions } from '@store/ducks/gasStation'
import {
  AdminFooter,
  AdminMenu,
  Container,
  FullPageTemplate,
  FilterGasStation,
  Grid,
  ListGasStations,
  ScreenLoader,
} from 'components'

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
  }, [])
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
