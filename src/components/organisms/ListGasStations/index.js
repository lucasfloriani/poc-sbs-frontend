import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as GasStationActions } from '@store/ducks/gasStation'
import {
  Block,
  GasStationCard,
  Paragraph,
} from 'components'
import { ListWrapper } from './style'

const ListGasStations = ({ actions, gasStations }) => (
  <ListWrapper length={gasStations.length}>
    {gasStations && gasStations.map(({
      address,
      bookmarks,
      cep,
      city,
      cnpj,
      complement,
      fantasy_name: fantasyName,
      geo_location: geoLocation,
      id,
      neighborhood,
      priceFuels,
      ratings,
      state,
    }) => (
      <GasStationCard
        actions={actions}
        address={address}
        bookmarks={bookmarks}
        cep={cep}
        cityName={city.name}
        cnpj={cnpj}
        complement={complement}
        fantasyName={fantasyName}
        geoLocation={geoLocation}
        key={id}
        id={id}
        neighborhood={neighborhood}
        priceFuels={priceFuels}
        ratings={ratings}
        stateName={state.name}
      />
    ))}
    {!gasStations.length && (
      <Block>
        <Paragraph color={{ type: 'grayscale', position: 4 }}>Não foi encontrado nenhum posto de gasolina</Paragraph>
      </Block>
    )}
  </ListWrapper>
)

ListGasStations.propTypes = {
  actions: PropTypes.array.isRequired,
  gasStations: PropTypes.array.isRequired,
}

ListGasStations.defaultProps = {
  actions: ['alert', 'bookmark', 'navigation', 'rating'],
}

const mapStateToProps = ({ gasStation: { gasStations, isFetching } }) => ({ gasStations, isFetching })
const mapDispatchToProps = dispatch => bindActionCreators(GasStationActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListGasStations)
