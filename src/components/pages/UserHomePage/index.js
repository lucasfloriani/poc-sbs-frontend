import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Container,
  FullPageTemplate,
  FilterGasStation,
  Grid,
  ListGasStations,
  MapDirections,
  UserFooter,
  UserMenu,
} from 'components'

const UserHomePage = ({ gasStationLocation }) => (
  <FullPageTemplate
    header={<UserMenu />}
    footer={<UserFooter />}
    style={{ backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)' }}
  >
    <Container align="center">
      <Grid>
        {gasStationLocation.location && <MapDirections gasStationLocation={gasStationLocation} />}
        <FilterGasStation />
        <ListGasStations />
      </Grid>
    </Container>
  </FullPageTemplate>
)

UserHomePage.propTypes = {
  gasStationLocation: PropTypes.shape({
    location: PropTypes.string,
    name: PropTypes.string,
  }),
}

const mapStateToProps = ({ gasStation: { gasStationLocation } }) => ({ gasStationLocation })

export default connect(mapStateToProps)(UserHomePage)
