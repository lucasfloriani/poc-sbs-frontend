import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as PriceFuelActions } from '@store/ducks/priceFuel'
import {
  Block,
  Button,
  Grid,
  Paragraph,
  PriceFuelCard,
  ScreenLoader,
} from 'components'

const ListGasStations = ({
  gasStationID, priceFuels, priceFuelsRequest, isFetching,
}) => {
  useEffect(() => {
    priceFuelsRequest(gasStationID)
  }, [])
  if (isFetching) return (<ScreenLoader />)

  return (
    <Grid column={priceFuels.length ? '1fr 1fr' : '1fr'}>
      {priceFuels && priceFuels.map(({
        id,
      }) => (
        <PriceFuelCard
          key={id}
        />
        // <GasStationCard
        //   actions={actions}
        //   key={id}
        //   id={id}
        //   cnpj={cnpj}
        //   fantasyName={fantasyName}
        //   cep={cep}
        //   address={address}
        //   complement={complement}
        //   neighborhood={neighborhood}
        //   cityName={city.name}
        //   stateName={state.name}
        // />
      ))}
      {!priceFuels.length && (
        <>
          <Block>
            <Paragraph align="center" color={{ type: 'grayscale', position: 4 }}>
              Não há nenhum preço de combustível cadastrado, clique no botão abaixo para ir ao formulário
            </Paragraph>
          </Block>
          <Button to="/gas-station/price-fuel">Adicionar preço de combustível</Button>
        </>
      )}
    </Grid>
  )
}

ListGasStations.propTypes = {
  gasStationID: PropTypes.string.isRequired,
  priceFuels: PropTypes.array.isRequired,
  priceFuelsRequest: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

const mapStateToProps = ({
  priceFuel: { priceFuels, isFetching },
  auth: { user },
}) => ({ gasStationID: `${user.id}`, priceFuels, isFetching })
const mapDispatchToProps = dispatch => bindActionCreators(PriceFuelActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListGasStations)
