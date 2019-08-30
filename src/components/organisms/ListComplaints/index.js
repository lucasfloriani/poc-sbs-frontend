import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '@theme'
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

const ListWrapper = styled(({ length, ...props }) => <Grid column={length ? '1fr 1fr' : '1fr'} {...props} />)`
  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
  `}
`

const ListComplaint = ({
  complaints, complaintsRequest, isFetching,
}) => {
  useEffect(() => { complaintsRequest() }, [])
  if (isFetching) return (<ScreenLoader />)

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
  complaintsRequest: PropTypes.func.isRequired,
  complaints: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ complaint: { complaints, isFetching } }) => ({ complaints, isFetching })
const mapDispatchToProps = dispatch => bindActionCreators(ComplaintActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListComplaint)
