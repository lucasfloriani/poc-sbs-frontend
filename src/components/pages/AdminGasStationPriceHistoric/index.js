import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as GasStationActions } from '@store/ducks/gasStation'
import Block from '@atoms/Block'
import Container from '@atoms/Container'
import Grid from '@atoms/Grid'
import Heading from '@atoms/Heading'
import Paragraph from '@atoms/Paragraph'
import ContentLoader from '@molecules/ContentLoader'
import PriceFuelHistoryCard from '@molecules/PriceFuelHistoryCard'
import AdminFooter from '@organisms/AdminFooter'
import AdminMenu from '@organisms/AdminMenu'
import FullPageTemplate from '@templates/FullPageTemplate'

const AdminGasStationPriceHistoric = ({
  gasStation, getGasStationRequest, isFetching, match,
}) => {
  useEffect(() => {
    getGasStationRequest(match.params.gasStationID)
  }, [getGasStationRequest, match.params.gasStationID])
  if (isFetching) return <ContentLoader />

  return (
    <FullPageTemplate header={<AdminMenu />} footer={<AdminFooter />}>
      <Container align="center">
        <Grid>
          <Block>
            <Heading color={{ type: 'grayscale', position: 4 }} hoverColor={{ type: 'grayscale', position: 4 }}>
              {gasStation.fantasy_name}
            </Heading>
          </Block>
          {gasStation.priceFuelHistories && (
            <Grid column="1fr 1fr 1fr">
              <Block backgroundColor={{ type: 'primary', position: 4 }}>
                <Paragraph align="center" fontSize="medium">Criar</Paragraph>
              </Block>
              <Block backgroundColor={{ type: 'alert', position: 2 }}>
                <Paragraph align="center" fontSize="medium">Atualização</Paragraph>
              </Block>
              <Block backgroundColor={{ type: 'error', position: 3 }}>
                <Paragraph align="center" fontSize="medium">Remoção</Paragraph>
              </Block>
            </Grid>
          )}
          {gasStation.priceFuelHistories && gasStation.priceFuelHistories.map(price => (
            <PriceFuelHistoryCard
              key={price.updated_at}
              createdAt={price.created_at}
              fuelTypeName={price.fuelType.name}
              paymentTypeName={price.paymentType.name}
              price={price.price}
              type={price.type}
            />
          ))}
          {gasStation.priceFuelHistories && !gasStation.priceFuelHistories.length && (
            <Block>
              <Paragraph color={{ type: 'grayscale', position: 4 }}>Não foi encontrado nenhum histórico</Paragraph>
            </Block>
          )}
        </Grid>
      </Container>
    </FullPageTemplate>
  )
}

AdminGasStationPriceHistoric.propTypes = {
  gasStation: PropTypes.object.isRequired,
  getGasStationRequest: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  match: PropTypes.any.isRequired,
}

const mapStateToProps = ({ gasStation: { gasStation, isFetching } }) => ({ gasStation, isFetching })
const mapDispatchToProps = dispatch => bindActionCreators(GasStationActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AdminGasStationPriceHistoric)
