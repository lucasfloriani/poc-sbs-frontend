import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Block,
  Container,
  FullPageTemplate,
  Grid,
  Heading,
  ListRatingGasStations,
  MapDirections,
  UserFooter,
  UserMenu,
} from 'components'

const UserRatings = ({ gasStationLocation }) => (
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
            Postos Avaliados
          </Heading>
        </Block>
        <ListRatingGasStations />
      </Grid>
    </Container>
  </FullPageTemplate>
)

UserRatings.propTypes = {
  gasStationLocation: PropTypes.shape({
    location: PropTypes.string,
    name: PropTypes.string,
  }),
}

const mapStateToProps = ({ gasStation: { gasStationLocation } }) => ({ gasStationLocation })

export default connect(mapStateToProps)(UserRatings)
