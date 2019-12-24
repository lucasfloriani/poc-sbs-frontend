import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as BookmarkActions } from '@store/ducks/bookmark'
import Badge from '@atoms/Badge'
import Icon from '@atoms/Icon'

const BookmarkBadge = ({
  bookmarks,
  createBookmarkRequest,
  deleteBookmarkRequest,
  gasStationID,
  userID,
}) => {
  const hasUserBookmark = bookmarks.find(bookmark => bookmark.user_id.toString() === userID)
  const onToggle = hasUserBookmark
    ? () => deleteBookmarkRequest(hasUserBookmark.id)
    : () => createBookmarkRequest({ gas_station_id: gasStationID })

  return (
    <Badge>
      <Icon
        name="Bookmark"
        color={hasUserBookmark ? { type: 'error', position: 1 } : { type: 'primary', position: 0 }}
        hoverColor={hasUserBookmark ? { type: 'error', position: 1 } : { type: 'primary', position: 0 }}
        onClick={onToggle}
      />
    </Badge>
  )
}

BookmarkBadge.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  createBookmarkRequest: PropTypes.func.isRequired,
  deleteBookmarkRequest: PropTypes.func.isRequired,
  gasStationID: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
}

const mapStateToProps = ({ auth: { user: { id } } }) => ({ userID: `${id}` })
const mapDispatchToProps = dispatch => bindActionCreators(BookmarkActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkBadge)
