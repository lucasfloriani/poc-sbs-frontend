import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  bookmarksRequest: null,
  bookmarksSuccess: ['bookmarks'],
  bookmarksFailure: null,
  createBookmarkRequest: ['bookmarkData'],
  createBookmarkSuccess: ['bookmark'],
  createBookmarkFailure: null,
  deleteBookmarkRequest: ['bookmarkID'],
  deleteBookmarkSuccess: ['bookmark'],
  deleteBookmarkFailure: null,
})

const INITIAL_STATE = {
  bookmark: {},
  bookmarks: [],
  isFetching: false,
}

// Get All Bookmarks
const bookmarksRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
  bookmarks: [],
})
const bookmarksSuccess = (state = INITIAL_STATE, { bookmarks }) => ({
  ...state,
  isFetching: false,
  bookmarks,
})
const bookmarksFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})

// Create Bookmark
const createBookmarkRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
})
const createBookmarkSuccess = (state = INITIAL_STATE, { bookmark }) => ({
  ...state,
  isFetching: false,
  bookmarks: [...state.bookmarks, bookmark],
})
const createBookmarkFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})

// Delete Bookmark
const deleteBookmarkRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
})
const deleteBookmarkSuccess = (state = INITIAL_STATE, { bookmarkID }) => ({
  ...state,
  isFetching: false,
  bookmarks: state.bookmarks.filter(bookmark => bookmark.id.toString() !== bookmarkID),
})
const deleteBookmarkFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})

export default createReducer(INITIAL_STATE, {
  [Types.BOOKMARKS_REQUEST]: bookmarksRequest,
  [Types.BOOKMARKS_SUCCESS]: bookmarksSuccess,
  [Types.BOOKMARKS_FAILURE]: bookmarksFailure,
  [Types.CREATE_BOOKMARK_REQUEST]: createBookmarkRequest,
  [Types.CREATE_BOOKMARK_SUCCESS]: createBookmarkSuccess,
  [Types.CREATE_BOOKMARK_FAILURE]: createBookmarkFailure,
  [Types.DELETE_BOOKMARK_REQUEST]: deleteBookmarkRequest,
  [Types.DELETE_BOOKMARK_SUCCESS]: deleteBookmarkSuccess,
  [Types.DELETE_BOOKMARK_FAILURE]: deleteBookmarkFailure,
})
