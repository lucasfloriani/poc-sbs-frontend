import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as ComplaintActions } from '@store/ducks/complaint'
import { Creators as GasStationActions } from '@store/ducks/gasStation'
import { Creators as PriceFuelActions } from '@store/ducks/priceFuel'
import Button from '@atoms/Button'
import Container from '@atoms/Container'
import Grid from '@atoms/Grid'
import AdminFooter from '@organisms/AdminFooter'
import AdminMenu from '@organisms/AdminMenu'
import FullPageTemplate from '@templates/FullPageTemplate'

const AdminRelatories = ({ complaintRelatoryRequest, gasStationRelatoryRequest, priceFuelHistoryRelatoryRequest }) => (
  <FullPageTemplate header={<AdminMenu />} footer={<AdminFooter />}>
    <Container align="center">
      <Grid>
        <Button onClick={complaintRelatoryRequest}>Baixar denúncias</Button>
        <Button onClick={gasStationRelatoryRequest}>Baixar postos</Button>
        <Button onClick={priceFuelHistoryRelatoryRequest}>Baixar históricos de preços</Button>
      </Grid>
    </Container>
  </FullPageTemplate>
)

AdminRelatories.propTypes = {
  complaintRelatoryRequest: PropTypes.func.isRequired,
  gasStationRelatoryRequest: PropTypes.func.isRequired,
  priceFuelHistoryRelatoryRequest: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => bindActionCreators({
  ...ComplaintActions,
  ...GasStationActions,
  ...PriceFuelActions,
}, dispatch)

export default connect(null, mapDispatchToProps)(AdminRelatories)
