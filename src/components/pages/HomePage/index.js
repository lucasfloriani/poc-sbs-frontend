import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as GasStationActions } from '@store/ducks/gasStation'
import {
  Container,
  FullPageTemplate,
  FilterGasStation,
  Grid,
  ListGasStations,
  MapPins,
  ScreenLoader,
  UserFooter,
  UserMenu,
} from 'components'

const HomePage = ({ gasStations, gasStationsRequest, isFetching }) => {
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
    gasStationsRequest(filterValues)
  }, [])
  if (isFetching) return (<ScreenLoader />)

  const gasStationsPins = gasStations.map(gasStation => ({
    location: gasStation.geo_location,
    name: gasStation.fantasy_name,
    prices: gasStation.priceFuels,
  }))

  return (
    <FullPageTemplate header={<UserMenu />} footer={<UserFooter />}>
      <Container align="center">
        <Grid>
          <MapPins pins={gasStationsPins} />
          <FilterGasStation onSubmit={filterPayload => gasStationsRequest(filterPayload)} />
          <ListGasStations />
        </Grid>
      </Container>
    </FullPageTemplate>
  )
}

HomePage.propTypes = {
  gasStations: PropTypes.array,
  gasStationsRequest: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ gasStation: { gasStations, isFetching } }) => ({ gasStations, isFetching })
const mapDispatchToProps = dispatch => bindActionCreators(GasStationActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
