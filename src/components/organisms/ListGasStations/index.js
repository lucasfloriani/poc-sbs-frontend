import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as GasStationActions } from '@store/ducks/gasStation'
import {
  Block,
  GasStationCard,
  Grid,
  Paragraph,
  ScreenLoader,
} from 'components'

const ListGasStations = ({
  actions, gasStations, gasStationsRequest, isFetching,
}) => {
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
    <Grid column={gasStations.length ? '1fr 1fr' : '1fr'}>
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
          actions={actions}
          key={id}
          id={id}
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
      {!gasStations.length && (
        <Block>
          <Paragraph color={{ type: 'grayscale', position: 4 }}>Não foi encontrado nenhum posto de gasolina</Paragraph>
        </Block>
      )}
    </Grid>
  )
}

ListGasStations.propTypes = {
  actions: PropTypes.array.isRequired,
  gasStations: PropTypes.array.isRequired,
  gasStationsRequest: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

ListGasStations.defaultProps = {
  actions: ['alert', 'bookmark', 'navigation'],
}

const mapStateToProps = ({ gasStation: { gasStations, isFetching } }) => ({ gasStations, isFetching })
const mapDispatchToProps = dispatch => bindActionCreators(GasStationActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListGasStations)
