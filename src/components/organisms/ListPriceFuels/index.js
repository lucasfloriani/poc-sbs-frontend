import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { formatToFuelPrice } from '@helpers/string'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as PriceFuelActions } from '@store/ducks/priceFuel'
import {
  BadgeIcon,
  Block,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Link,
  Paragraph,
  ScreenLoader,
} from 'components'
import { ListWrapper } from './style'

const ListPriceFuels = ({
  deletePriceFuelRequest,
  gasStationID,
  isFetching,
  priceFuels,
  priceFuelsRequest,
}) => {
  useEffect(() => { priceFuelsRequest(gasStationID) }, [])
  if (isFetching) return <ScreenLoader />

  return (
    <Grid>
      <Block>
        <Flex halign="space-between" valign="center">
          <Heading color={{ type: 'grayscale', position: 4 }} hoverColor={{ type: 'grayscale', position: 4 }}>
            Preços de combustível
          </Heading>
          <Button
            to="/gas-station/price-fuel"
            backgroundColor={{ type: 'primary', position: 2 }}
            hoverBackgroundColor={{ type: 'primary', position: 0 }}
          >
            Criar Produto
          </Button>
        </Flex>
      </Block>
      <ListWrapper length={priceFuels.length}>
        {priceFuels && priceFuels.map(({
          id, fuelType, paymentType, price,
        }) => (
          <Card key={id} padding="medium">
            <Grid valign="flex-start" column="1fr auto">
              <Flex flow="column">
                <Heading margin="4px 0 8px">{fuelType.name}</Heading>
                <Paragraph fontSize="small">{paymentType.name}</Paragraph>
                <Paragraph fontSize="small">{formatToFuelPrice(price)}</Paragraph>
              </Flex>
              <Flex>
                <Link to={`/gas-station/price-fuel/${id}`}><BadgeIcon icon="edit" /></Link>
                <BadgeIcon icon="delete" onClick={() => deletePriceFuelRequest(`${id}`)} />
              </Flex>
            </Grid>
          </Card>
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
      </ListWrapper>
    </Grid>
  )
}

ListPriceFuels.propTypes = {
  deletePriceFuelRequest: PropTypes.func.isRequired,
  gasStationID: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  priceFuels: PropTypes.array.isRequired,
  priceFuelsRequest: PropTypes.func.isRequired,
}

const mapStateToProps = ({
  auth: { user },
  priceFuel: { isFetching, priceFuels },
}) => ({ gasStationID: `${user.id}`, isFetching, priceFuels })
const mapDispatchToProps = dispatch => bindActionCreators(PriceFuelActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListPriceFuels)
