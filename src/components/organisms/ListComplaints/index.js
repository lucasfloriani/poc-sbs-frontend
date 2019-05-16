import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as ComplaintActions } from '@store/ducks/complaint'
import {
  Block,
  ComplaintCard,
  Grid,
  Paragraph,
  ScreenLoader,
} from 'components'

const ListComplaintGasStations = ({
  complaints, complaintsRequest, isFetching,
}) => {
  useEffect(() => { complaintsRequest() }, [])
  if (isFetching) return (<ScreenLoader />)

  return (
    <Grid column={complaints.length ? '1fr 1fr' : '1fr'}>
      {complaints && complaints.map(({
        gasStation, user, message, created_at: createdAt,
      }) => (
        <ComplaintCard
          key={`${gasStation.id}1${user.id}`}
          gasStationID={`${gasStation.id}`}
          gasStationName={gasStation.fantasy_name}
          message={message}
          createdAt={createdAt}
        />
      ))}
      {!complaints.length && (
        <Block>
          <Paragraph color={{ type: 'grayscale', position: 4 }}>Não foi encontrado nenhuma denúncia</Paragraph>
        </Block>
      )}
    </Grid>
  )
}

ListComplaintGasStations.propTypes = {
  complaintsRequest: PropTypes.func.isRequired,
  complaints: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ complaint: { complaints, isFetching } }) => ({ complaints, isFetching })
const mapDispatchToProps = dispatch => bindActionCreators(ComplaintActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListComplaintGasStations)