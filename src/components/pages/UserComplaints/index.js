import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Block,
  Container,
  FullPageTemplate,
  Grid,
  Heading,
  ListComplaintGasStations,
  MapDirections,
  UserFooter,
  UserMenu,
} from 'components'

const UserComplaint = ({ gasStationLocation }) => (
  <FullPageTemplate
    header={<UserMenu />}
    footer={<UserFooter />}
    style={{ backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)' }}
  >
    <Container align="center">
      <Grid>
        {gasStationLocation.location && <MapDirections gasStationLocation={gasStationLocation} />}
        <Block>
          <Heading
            color={{ type: 'grayscale', position: 4 }}
            hoverColor={{ type: 'grayscale', position: 4 }}
          >
            Minhas denúncias
          </Heading>
        </Block>
        <ListComplaintGasStations />
      </Grid>
    </Container>
  </FullPageTemplate>
)

UserComplaint.propTypes = {
  gasStationLocation: PropTypes.shape({
    location: PropTypes.string,
    name: PropTypes.string,
  }),
}

const mapStateToProps = ({ gasStation: { gasStationLocation } }) => ({ gasStationLocation })

export default connect(mapStateToProps)(UserComplaint)
