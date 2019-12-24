import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ListWrapper } from './style'
import { Creators as ComplaintActions } from '@store/ducks/complaint'
import Block from '@atoms/Block'
import Paragraph from '@atoms/Paragraph'
import ComplaintCard from '@molecules/ComplaintCard'
import ScreenLoader from '@molecules/ScreenLoader'

const ListComplaint = ({
  complaints, complaintsRequest, isFetching,
}) => {
  useEffect(() => { complaintsRequest() }, [complaintsRequest])
  if (isFetching) return <ScreenLoader />

  return (
    <ListWrapper length={complaints.length}>
      {complaints && complaints.map(({
        gasStation, user, image, message, created_at: createdAt,
      }) => (
        <ComplaintCard
          key={`${gasStation.id}1${user.id}`}
          gasStationID={`${gasStation.id}`}
          gasStationName={gasStation.fantasy_name}
          image={image}
          message={message}
          createdAt={createdAt}
        />
      ))}
      {!complaints.length && (
        <Block>
          <Paragraph color={{ type: 'grayscale', position: 4 }}>Não foi encontrado nenhuma denúncia</Paragraph>
        </Block>
      )}
    </ListWrapper>
  )
}

ListComplaint.propTypes = {
  complaints: PropTypes.array.isRequired,
  complaintsRequest: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ complaint: { complaints, isFetching } }) => ({ complaints, isFetching })
const mapDispatchToProps = dispatch => bindActionCreators(ComplaintActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListComplaint)
