import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Block,
  Container,
  FullPageTemplate,
  Grid,
  Heading,
  ListBookmarkedGasStations,
  MapDirections,
  UserFooter,
  UserMenu,
} from 'components'

const UserBookmarks = ({ gasStationLocation }) => (
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
            Meus Favoritos
          </Heading>
        </Block>
        <ListBookmarkedGasStations />
      </Grid>
    </Container>
  </FullPageTemplate>
)

UserBookmarks.propTypes = {
  gasStationLocation: PropTypes.shape({
    location: PropTypes.string,
    name: PropTypes.string,
  }),
}

const mapStateToProps = ({ gasStation: { gasStationLocation } }) => ({ gasStationLocation })

export default connect(mapStateToProps)(UserBookmarks)
