import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as GasStationActions } from '@store/ducks/gasStation'
import {
  GasStationCard,
  Grid,
  Paragraph,
  ScreenLoader,
} from 'components'

const ListGasStations = ({ gasStations, gasStationsRequest, isFetching }) => {
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

  return (
    <Grid column="1fr 1fr">
      {gasStations && gasStations.map(({
        id,
        cnpj,
        fantasy_name: fantasyName,
        cep,
        address,
        complement,
        neighborhood,
        city,
        state,
      }) => (
        <GasStationCard
          key={id}
          cnpj={cnpj}
          fantasyName={fantasyName}
          cep={cep}
          address={address}
          complement={complement}
          neighborhood={neighborhood}
          cityName={city.name}
          stateName={state.name}
        />
      ))}
      {!gasStations && <Paragraph>Não foi encontrado nenhum posto de gasolina</Paragraph>}
    </Grid>
  )
}

ListGasStations.propTypes = {
  gasStations: PropTypes.array.isRequired,
  gasStationsRequest: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ gasStation: { gasStations, isFetching } }) => ({ gasStations, isFetching })
const mapDispatchToProps = dispatch => bindActionCreators(GasStationActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListGasStations)
