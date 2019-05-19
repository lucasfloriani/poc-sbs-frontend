import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '@theme'
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

const ListWrapper = styled(({ length, ...props }) => <Grid column={length ? '1fr 1fr' : '1fr'} {...props} />)`
  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
  `}
`

const ListComplaintGasStations = ({
  actions, complaintGasStations, complaintGasStationsRequest, isFetching,
}) => {
  useEffect(() => {
    complaintGasStationsRequest()
  }, [])
  if (isFetching) return (<ScreenLoader />)

  return (
    <ListWrapper length={complaintGasStations.length}>
      {complaintGasStations && complaintGasStations.map(({
        address,
        bookmarks,
        complaints,
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
          complaints={complaints}
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
      {!complaintGasStations.length && (
        <Block>
          <Paragraph color={{ type: 'grayscale', position: 4 }}>Não foi encontrado nenhum posto de gasolina</Paragraph>
        </Block>
      )}
    </ListWrapper>
  )
}

ListComplaintGasStations.propTypes = {
  actions: PropTypes.array.isRequired,
  complaintGasStationsRequest: PropTypes.func.isRequired,
  complaintGasStations: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

ListComplaintGasStations.defaultProps = {
  actions: ['alert', 'bookmark', 'navigation', 'rating'],
}

const mapStateToProps = ({ gasStation: { complaintGasStations, isFetching } }) => ({ complaintGasStations, isFetching })
const mapDispatchToProps = dispatch => bindActionCreators(GasStationActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListComplaintGasStations)
