export const REQUEST_FILE = 'REQUEST_FILE'
export const RECEIVE_FILE = 'RECEIVE_FILE'
export const SELECT_FILE = 'SELECT_SUBREDDIT'
export const INVALIDATE_FILE = 'INVALIDATE_SUBREDDIT'

export const selectFile = (selectedFile) => ({
  type: SELECT_FILE,
  selectedFile,
})

export const invalidateFile = (selectedFile) => ({
  type: INVALIDATE_FILE,
  selectedFile,
})

export const requestFile = (selectedFile) => ({
  type: REQUEST_FILE,
  selectedFile,
})

export const receiveFile = (selectedFile, json) => ({
  type: RECEIVE_FILE,
  selectedFile,
  file: json.data.children.map((child) => child.data),
  receivedAt: Date.now(),
})

const fetchFile = (selectedFile) => (dispatch) => {
  dispatch(requestFile(selectedFile))
  return fetch(`https://www.reddit.com/r/${selectedFile}.json`)
    .then((response) => response.json())
    .then((json) => dispatch(receiveFile(selectedFile, json)))
}

/**const shouldFetchFile = (state, selectedFile) => {
  const loadedFile = state.fileBySubreddit[selectedFile]
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}
**/
export const fetchPostsIfNeeded = (selectedFile) => (dispatch, getState) => {
  //if (shouldFetchPosts(getState(), subreddit)) {
  return dispatch(fetchFile(selectedFile))
  // }
}
