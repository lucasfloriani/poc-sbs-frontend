import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
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

const ListPriceFuels = ({
  gasStationID, priceFuels, priceFuelsRequest, isFetching,
}) => {
  useEffect(() => {
    priceFuelsRequest(gasStationID)
  }, [])
  if (isFetching) return (<ScreenLoader />)

  return (
    <Grid>
      <Heading>Preços de combustível</Heading>
      <Grid column={priceFuels.length ? '1fr 1fr' : '1fr'}>
        {priceFuels && priceFuels.map(({
          id, fuelType, paymentType, price,
        }) => (
          <Card key={id} padding="medium">
            <Grid valign="flex-start" column="1fr auto">
              <Flex flow="column">
                <Heading margin="4px 0 8px">{fuelType.name}</Heading>
                <Paragraph fontSize="small">{paymentType.name}</Paragraph>
                <Paragraph fontSize="small">{`R$ ${price}`}</Paragraph>
              </Flex>
              <Flex>
                <Link to={`/gas-station/price-fuel/${id}`}><BadgeIcon icon="edit" /></Link>
                <BadgeIcon icon="delete" />
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
      </Grid>
    </Grid>
  )
}

ListPriceFuels.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ListPriceFuels)
